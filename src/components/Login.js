import React, { useState , useRef} from 'react'
import Header from "./Header"
import {checkValidData} from "../utils/validate"
import {
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
  const message= checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

  if(message) return;

    // sign //signup
    if(!isSignInForm){
      //signUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontedata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAYHCAX/xAA1EAABAwMCBQMBBwMFAQAAAAABAAIDBAURBiEHEjFRYRMiQYEUFTJxkbHBM1LwQmJyoeEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7cFN7W7fCzY6bbosmGD2hZTIVUYrIPCvMh8LKbEpdyRtc6QhrQMkn4QYs74aSB01Q8Rxt6uKVFXR00IlqJmRsIyCT+L8lyXU2qTWyVtzY7144Kh9JQQO3Y0hvvkIzvkFavaKuO4SVVbqOoqZ6aCD2ta/cnIAAGR3/AFUVt/E/WlVS3A2izzvgDGD7RKx25JGeUdtv3XMzcq4vL/ttTz/3eq7P7qzNI+V7pJZHSSPPM5zjkk+VbKDJqq6orJXy1cpmldjMkm5wBjCxsqEQFOSoRBOSvpWC91tiuEdZQvw5p90ZJ5XjsR8r5iIO82XX9luUkUL5WQzPaOZp5gA7GTuQM9FtQ5JYmyROa9jhlr2nIcPC8vxPcx4cxxa5pyCDggrpPCjULKSerpbhWiOlcA5rHAnD87u7NHfuqOnyxbdFgzw+F9g8kjA+Nwcw9HNOQVjTRZRGvTQZd0RfSmi93REGzRQ7LIZEr7IsKsNwgs+mvk6i9KSCO2vdym4c0OR1xynIHn/1fdwtf1zMKPTtXWt/q0kbp2f8gCAPr0QearmH0tRNSOY5jopX9XdM7H9lgFxwQCcHr5Ww3ltdqCqqrgH0s8zPa6OmYGPc0D8fKB7uuCev0WukYz4UVCIiAiIgIiICIiArkH9VmA0+4bO6H8/CtqcoO9cNXukt0zW1ME8THANMDC1o26YPnI+i2qZq5bwevrwX2VtM0jJl9VrgCfBB6rq0g2VR8yVnuRXpW+5EG6mMYVlzcLJLlbcMoLGFrOrqepuhbZaWang+0wSSPkmZzktGBho6Z925+Oy2ktWFdLXT3KONs3qMkidzxTxO5Xxu7g/4D8oOCXPhvftPTiohne+maOY1EMZc6LB25mjfHkdFolU+SaZ75Hc7yfc5o2PlevKWAwwxxyTPmeBgySAczvzxstU1la9N2ayXW81NspzPJTOi6Y5y74UV5mKhSdgoQEREBERAREQFIGVCkIO48JtOwUtjpLvyubVTtfzOB2czOwIK3yRu3fytR4PSmTREIJOWSyN3J75/lbnIFUfOlb7kV2VvuUINpyo5lTlEAlRnZCqT/hQfGveo6e1VUNDFDLXXKcZhoqbHOR/c4nZrfJXJOLd3vd4po2VVFT0dDSSFsjIqoTZk+OY4GDjoPz3X1LFT6psuo9Q3i20VPdo21z4Klj5D6zsYeOQn4DXAfwtb1/f6uWp+309PDTUtc9jzTzxj1mSxjfmb9evyornhGAQqVOdgFCAiIgIiICIiApChVRtL3Bo6uOAg9B8IqF1Hoqmc8EOqHvmx8YJwP+gFuDwsWw0X3dZaGjxgwwMaR2OFmuCqMORu6K68bog+5hMKtCEFshU4VwqkoNOoq+n07X6ohrJI2SOmdc4GPOPWjMTQeXPXDoyD2yO6876hvddqG6TXG5Sl80vx8Mb8NHgL1jVUlNVsLKqnimaQRiRgdsevVcR4ncOLbYYPvG0zSRQyFx+zP9wbhudid/1UVylFJUICIiAiIgIiIJC3Hhfpkai1Ew1DC6ipMSz9nYOzfqtQiY6R4Yxpc5xw0DqSvTHDjTLdN6Yghkjc2sqAJqrmO4eR+H6DAQbFyBoAAwB8KhwV4hUOCqMV43RVvG6IPtqFKhBBVBVRVOEELm3HxlU7SVM+na4wMqh67h8AjDc+M/wumYWvcQ6F9foy5wRNa6X0uZnN0BB6qK8plQq5GOje6N4LXNJBB+CqEBERAREQFI6qFI6oOqcFNH/eNadQV0bvslI8inaW7SSd/Ib+67gcry9p7Wl7sclEylr5hSUr8imJ/wDmWlxLgR5yf1Xp2GQS08Uo252B2O2RlAcVbJVTyrTiqi2/qiocd1KD72EwrnKE5UFkhRhXS1UkIKFTLHHNE+KZvNHI0te3uDsVWo3QeU9f2uKz6lnoonFxjHvPd2T/ABha4u4cReFF0vV9mu1jqIJftJ5pKeZ/IWO/2noR+mFzWo0VcqaSsbPNRtbRtBlkEpLQSccoIByVFayik7FQgIiICIiCuGN0srI2DLnkNA8levKSMx0VOxww5sTQQPAC8i008lNURzwO5JY3B7HdiOhXeuE2vKrUontl6kElwhbzxy4AMrPnI7g/ug6C8KyWrKcFbLVUYjm7orz27og+4pUZwqSUAqgqSqUEKQEC5pxU4jOsEAt9ldG+tmaWvlOcxDuPKDP4pa7h05bZaG3zNddpgRgHPpNPUnz4XEKS/OhtFfba15lNRJz5ByA4Zznvla/V1U9ZUPqKqaSaaQ5e97sklWVFSepUIiAiIgIiIC+npy81Vgu9Pc6Ej1oHZ5XfheDsWnwQvmIg9BUHGPTdTPHFVQ1tJz/ikewOYw/Qk484W/RSxVMLJ6aRksMgyyRhy1w7heP1sel9aXzTDx93VZNPnL6WYc0bvp8fmMFB6acN1K5nbeNFolgDrnb6mCo/1CIh7T+XQog7Gd1CqwoVRGFRI+OLeWRjB3c4BU1dXT0MBnraiKnhb+KSV4a0fUrzJxSusNz1TVzUd3dX0r35YGuPIxu2AEHctR6qgbC+ktU4lnJDXSRHPLvjA89+y85aumkm1FXmVxc5spbuc4x8LAguNbTt5YKqaMD4a8rHc9zyS4kknJJOSVFUoiICIiAiIgIiICIiAiIgIiIPaytVshgpppWY5mRucM9wCf4RFUeQtQXq5XmvmmuVZNUO9QkB7iQ3f4HwvmZUIooiIgIiICIiAiIgIiICIiAiIgIiIP/Znt.com/u/109015717?v=4",
        }).then(() => {
          // Profile updated!
          navigate("/browse");
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage);
        // ..
      });
        }
    else{
      //signIn Logic
      signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+error);
  });
    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


  return (
    <div>
        <Header />

        {/* Background image */}
        <div className='absolute'>
            <img 
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="logo"
            />
        </div>
      
        <form 
          onSubmit={(e) => e.preventDefault() } 
          className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' 
        >
          
          <h1 className='font-bold text-3xl py-4'> 
            { isSignInForm ? "Sign-In" : "Sign-Up"}
          </h1>

          {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700'>          
          </input>
          )}

          <input 
            ref={email}
            type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700' 
          />
          

          <input 
          ref={password}
            type='password' 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700' 
          />

          <p className="text-red-500">
            {errorMessage}

          </p>

          <button 
            className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
            { isSignInForm ? "Sign In" : "Sign Up"}
             </button>

            <p 
              className='py-4 cursor-pointer' 
              onClick={toggleSignInForm}>
              { isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now."}
            </p>

        </form>
        
    </div>
  )
}

export default Login