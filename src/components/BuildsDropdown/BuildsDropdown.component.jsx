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
  const [isActive, setIsActive] = useState('')

  const handleToggle = () => {
    isActive === '' ? setIsActive('active') : setIsActive('');
  }

  return (
    <>
      <div className={`${isActive} ${quicksandFont.className} dropdown bg-slate-800 w-5/6 aspect-[2.5] rounded-md border-[1px] border-slate-200`}>
        <button onClick={handleToggle} className="link w-full h-full text-3xl ">Builds</button>
        <div className={`${isActive} dropdown-content w-full h-full flex flex-col items-center justify-center gap-2`}>
          <a href="" className={`${isActive} dropdown-item w-full h-full min-h-[60px] flex items-center justify-center bg-amber-400`}>Create a Build</a>
          <a href="" className={`${isActive} dropdown-item w-full h-full min-h-[60px] flex items-center justify-center bg-amber-500`}>My Saved Builds</a>
          <a href="" className={`${isActive} dropdown-item w-full h-full min-h-[60px] flex items-center justify-center bg-amber-600`}>Recommended Builds</a>
        </div>
      </div>
    </>
  )
};
