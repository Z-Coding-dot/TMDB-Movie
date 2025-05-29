import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = ({search, setSearch}) => {
  return (
    <div className='mx-auto sm:mx-10 mt-4 mb-10'>
            <div className='max-w-4xl flex items-center relative
                       justify-center text-white mx-4 sm:mx-auto'>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
           type="text" placeholder='Search...' 
          className='bg-[#1c1c31] outline-hidden text-medium
           text-gray-200 pl-12 sm:py-3 py-2 rounded-lg w-full' />
          <span className='absolute left-4'><IoSearch className='size-6'/></span>
      </div>
        <div className="text-white my-6 ml-12">
        <h2 className="text-3xl font-bold">Popular Movies</h2>
      </div>
    </div>
  )
}

export default Search
