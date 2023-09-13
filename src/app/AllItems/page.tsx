"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import { Fragment } from 'react';

const quicksandFont = Quicksand({
  weight: ['300', '400', '500'],
  subsets: ['latin']
});



interface Item {
  active_status: boolean,
  glyph: boolean,
  id: number,
  name: string,
  pic_url: string,
  price: number,
  restricted: string,
  short_description: string,
  special: string,
  starter: boolean,
  stat_1_desc: string,
  stat_1_value: string | number,
  stat_2_desc: string | null
  stat_2_val: string | number | null,
  stat_3_desc: string | null,
  stat_3_val: string | number | null,
  stat_4_desc: string | null,
  stat_4_val: string | number | null,
  stat_5_desc: string | null,
  stat_5_val: string | number | null,
  stat_6_desc: string | null,
  stat_6_val: string | number | null,
  tier: number,
  type: string,
  sort?: string,
}

export default function AllItems() {

  const [allItems, setAllItems] = useState<Item[]>([]);

  const getAllItems = async() => {
    const response = await fetch('http://localhost:4000/allItems');

    const itemsInfo = await response.json();

    setAllItems(itemsInfo);
  }

  const allActiveItems: Item[] = allItems.filter((item: Item) => item.active_status);

  const lookAtItems = (peek: any) => console.log(peek);

  const sortItems = (array: Item[]) => {
    const sortedArray = array.map((item: Item) => {
    const { stat_1_desc, stat_2_desc, price, type } = item;

    if(stat_1_desc === null) {
      return {
        ...item,
        sort: 'Special'
      }
    }
    if(type === 'Consumable') {
      return {
        ...item,
        sort: 'Consumable'
      };
    }
    if(type === 'Active') {
      return {
        ...item,
        sort: 'Relic'
      };
    }
    if(stat_1_desc !== 'Physical Power'
        && stat_1_desc !== 'Magical Power'
        && stat_1_desc !== 'Attack Speed'
        ) {
      return {
        ...item,
        sort: 'Defensive'
      }
    } 
    if(stat_1_desc === 'Physical Power' && stat_2_desc === 'Magical Power') {
      return {
        ...item,
        sort: 'Physical/Magical'
      }
    }
    if(stat_1_desc === 'Physical Power') {
          return {
            ...item,
            sort: "Physical"
          }
        }
    if(stat_1_desc === 'Magical Power') {
          return {
            ...item,
            sort: "Magical"
          }
        }
    if(stat_1_desc === 'Attack Speed') {
          return {
            ...item,
            sort: "Attack Speed"
          }
        }

        
  })
    return sortedArray;
  }

  const tier3Items: Item[] = allActiveItems.filter((item: Item) => item.tier === 3 && item.type != "Active")

  const sortedTier3Items: Item[] = sortItems(tier3Items) as Item[];

  const tier3Sorted: Item[] = tier3Items.sort((a, b) => {
    if (a.name < b.name) {
      return - 1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const starters: Item[] = allActiveItems.filter((item: Item) => item.starter);

  const glyphs: Item[] = allActiveItems.filter((item: Item) => item.glyph)

  const shards: Item[] = allActiveItems.filter((item: Item) => item.type === "Active" && item.tier === 2);
  
  const relics: Item[] = allActiveItems.filter((item: Item) => item.type === "Active" && item.tier === 3);

  const upgradedRelics: Item[] = allActiveItems.filter((item: Item) => item.type === "Active" && item.tier === 4);

  const consumables: Item[] = allActiveItems.filter((item: Item) => item.type === "Consumable");

  const magicItems: Item[] = sortedTier3Items.filter((el) => el?.sort === "Magical" && el.tier >= 3);

  const physicalItems: Item[] = sortedTier3Items.filter((el) => el?.sort === "Physical" && el.tier >= 3);

  const attackSpeedItems: Item[] = sortedTier3Items.filter((el) => el?.sort === "Magical" && el.tier >= 3);

  return (
    <div className={`${quicksandFont.className} w-5/6 mx-auto flex flex-col`}>
      <button onClick={() => getAllItems()} className='w-full h-full bg-green-500 border-2 border-white'>test</button>
      <button onClick={() => lookAtItems(sortedTier3Items)} className='w-full h-full bg-green-500 border-2 border-white'>look</button>
      <button onClick={() => lookAtItems(allItems)} className='w-full h-full bg-green-500 border-2 border-white'>look at something else</button>

      <div className='grid grid-cols-4 md:grid-cols-8 gap-1'>
        <h3 className='col-span-full text-center p-4 text-3xl text-neutral border-b-2 border-yellow-400'>Magic Items</h3>
        {magicItems.map((item) => {
          return( 
          <div key={item.id} className='min-w-[75px] w-min'>
            <a href='/' className='bg-white'>
              <Image
              src={item.pic_url}
              alt={item.name}
              width={80}
              height={120}
              className='border-[1px] border-white/70' />
            </a>
            <h5 className='text-white text-xs'>{item.name}</h5>
          </div>
        )})
          }
      </div>
      <div className='grid grid-cols-6 gap-1'>
        <h3 className='col-span-full text-center p-4 text-3xl text-neutral border-b-2 border-yellow-400'>Starters</h3>
        {starters.map((item: Item) => {
          return <Image
          key={item.id}
          src={item.pic_url}
          alt={item.name}
          width={80}
          height={120}
          className='border-2 border-white/70' />
        })
          }
      </div>
      <div className='grid grid-cols-8 gap-4'>
        <h3 className='col-span-full text-center p-4 text-3xl text-neutral border-b-2 border-yellow-400'>Relics</h3>
        {relics.map((item: Item) => {
          return <Image
          key={item.id}
          src={item.pic_url}
          alt={item.name}
          width={80}
          height={120}
          className='border-2 border-white/70' />
        })
          }
      </div>
      <div className='grid grid-cols-8 gap-4'>
        <h3 className='col-span-full text-center p-4 text-3xl text-neutral border-b-2 border-yellow-400'>Relics</h3>
        {relics.map((item: Item) => {
          return <Image
          key={item.id}
          src={item.pic_url}
          alt={item.name}
          width={80}
          height={120}
          className='border-2 border-white/70' />
        })
          }
      </div>
    </div>
  )
}
