import React, { useRef } from 'react';
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async() => {
    
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result ahead. Example Result: Gadar, Sholay, Don, Tarzan, Animal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
   
  };
  


  return (
    <div className='pt-[20%] flex justify-center'>
      <form 
        className='w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e)=>e.preventDefault()}
      >
        <input
        ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
          aria-label='Search'
        />
        <button 
          type='submit' 
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
          aria-label='Search Button'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
