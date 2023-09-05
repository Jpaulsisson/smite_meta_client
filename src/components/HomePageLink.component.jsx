import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'


const buttonFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
})

export default function HomePageLink({ href, label }) {
  return (
      <div className='w-3/4 flex items-center'>
        <a href={href} className={`p-4 ${buttonFont.className}  w-full underline text-center text-slate-200 text-4xl border-thin border-font-color rounded-lg shadow-link-shadow`}>
          {label}
        </a>
      </div>
  )
}


