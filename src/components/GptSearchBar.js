import React from 'react';
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., dispatch a search action)
  };
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={handleSubmit}>
        <input
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder}
          aria-label='Search'
        />
        <button type='submit' className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' aria-label='Search Button'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
