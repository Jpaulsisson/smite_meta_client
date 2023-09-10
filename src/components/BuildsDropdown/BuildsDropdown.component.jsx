"use client"

import './BuildsDropdown.styles.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { Quicksand } from 'next/font/google';

const quicksandFont = Quicksand({
  weight: ['300', '400', '500'],
  subsets: ['latin']
});



export default function BuildsDropdown() {
  
  const [isOpen, setIsOpen] = useState('')

  const handleToggle = () => {
    isOpen === '' ? setIsOpen('active') : setIsOpen('');
  }

  return (
    <>
      <div className={`${quicksandFont.className} dropdown bg-slate-800 w-5/6 aspect-[2.5] rounded-md border-[1px] border-slate-200`}>
        <button onClick={handleToggle} className="link w-full h-full text-3xl text-slate-300 ">Builds</button>
        <div className={`${isOpen} dropdown-content bg-sky-400 w-full h-full flex flex-col items-center justify-center`}>
          <a href="" className='w-full h-full bg-pink-400'>Create a Build</a>
          <a href="" className='w-full h-full bg-pink-600'>My Saved Builds</a>
          <a href="" className='w-full h-full bg-pink-800'>Recommended Builds</a>
        </div>
      </div>
    </>
  )
};
