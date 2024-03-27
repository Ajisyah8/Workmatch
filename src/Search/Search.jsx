import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = ({ onSearch }) => {
  const [searchTerms, setSearchTerms] = useState({
    work: '',
    perusahaan: '',
    lokasi: ''
  });

  const handleSearch = (e, type) => {
    const newSearchTerm = e.target.value;
    setSearchTerms({ ...searchTerms, [type]: newSearchTerm });
    onSearch({ ...searchTerms, [type]: newSearchTerm });
  };

  return (
    <div className='searchDiv grid gp-10 bg-slate-200 rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-slate-200'>

          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" value={searchTerms.work} onChange={(e) => handleSearch(e, 'work')} className='bg-transparent focus:outline-none w-[100%] border border-gray-500 rounded p-2' placeholder='Search Work' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-400 hover:text-black icon' />
          </div>

          <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text-[25px] icon' />
            <input type="text" value={searchTerms.perusahaan} onChange={(e) => handleSearch(e, 'perusahaan')} className='bg-transparent focus:outline-none w-[100%] border border-gray-500 rounded p-2' placeholder='Search Perusahaan' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-400 hover:text-black icon' />
          </div>

          <div className='flex gap-2 items-center'>
            <CiLocationOn className='text-[25px] icon' />
            <input type="text" value={searchTerms.lokasi} onChange={(e) => handleSearch(e, 'lokasi')} className='bg-transparent focus:outline-none w-[100%] border border-gray-500 rounded p-2' placeholder='Search Lokasi' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-400 hover:text-black icon' />
          </div>

        </div>
      </form>
      <div className='secDiv flex items-center gap-10 justify-center'>
      </div>
    </div>
  );
};

export default Search;