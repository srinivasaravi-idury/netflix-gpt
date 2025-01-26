import React from 'react'
import { useSelector } from 'react-redux';
import { langConstants } from '../utils/langConstants';

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={langConstants[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 rounded-lg">
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar