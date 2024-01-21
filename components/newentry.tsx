'use client'

import { ArrowRightIcon, MinusIcon, MoreHorizontal, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import EntryWrapper from './entrywrapper';

export default function NewEntry() {
  const [createSlip, setCreateSlip] = useState(false)
  return (
    <div className='w-full border border-white border-opacity-15 p-6 rounded-2xl flex flex-col gap-6'>
      <div className='flex justify-between'>
        <span className='text-base font-semibold'>New Entry</span>
        <span className='cursor-pointer'><MoreHorizontal width={20} height={20} strokeWidth={1.5}/></span>
      </div>
      <div className='h-max w-full flex flex-col gap-4'>
        <span className='rounded-lg w-full h-40 bg-accent flex flex-col overflow-hidden relative'>
          <span className='w-[100%] bg-[#e5ede8] h-[50%] sm:h-[100%] sm:w-[50%] p-6 text-black font-medium'>Check Previous Data</span>
          <span className='px-4 py-2 flex rounded-full bg-white h-min text-black justify-center items-center gap-2 cursor-pointer m-6 absolute self-end right-0 bottom-0'>Details <ArrowRightIcon width={20} height={20} strokeWidth={1.5}/></span>
        </span>
        <div className='bg-hover bg-opacity-25 hover:bg-opacity-50 gap-1 text-sm flex rounded-lg px-4 py-2 justify-center items-center cursor-pointer border border-hover' onClick={() => setCreateSlip(!createSlip)}>{!createSlip ? <PlusIcon width={20} height={20} strokeWidth={1.5}/> : <MinusIcon width={20} height={20} strokeWidth={1.5} /> }{!createSlip ? 'New' : 'Remove'} Entry</div>
      </div>

      { createSlip ?
        <>
          <span className='w-full bg-hover bg-opacity-25 h-px' />
          <EntryWrapper />
        </>
      : null }
    </div>
  )
}
