import React from 'react'
import {BG_URL} from "../utils/constants"
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

export const GPTSearch = () => {
  return (
    <>
      <div className='absolute inset-0 -z-10'>
            <img className='w-full h-full object-cover'
              src={BG_URL}
              alt="logo"   />
        </div>
      <div className=''>  
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>
      </>
  
  )
}
export default GPTSearch;