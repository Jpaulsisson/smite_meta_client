import Image from 'next/image'
import React from 'react'
import { Exo_2, Quicksand } from 'next/font/google'

const exoFont = Exo_2({
  weight: ['200'],
  subsets: ['latin']
})

const quicksandFont = Quicksand({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})



//// DROPPING THIS FOR INDIVIDUAL DROPDOWN COMPONENTS.
//// BUT NOT DELETING YET IN CASE I NEED TO LOOK AT IT.






export default function HomePageLink({ href, title }) {
  return (
    <div className={`home-page-link ${quicksandFont.className} text-2xl text-neutral bg-slate-800 max-w-[400px] w-10/12 aspect-[8/3] flex items-center justify-center border-[1px] border-black rounded-md`}>
      <a href={href}>{title}</a>
    </div>
  )
}


