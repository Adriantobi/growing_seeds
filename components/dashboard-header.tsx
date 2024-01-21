import { MailIcon, MessageCircleIcon, SearchIcon } from 'lucide-react'
import React from 'react'

export default function DashBoardHeader() {
  return (
    <div className='py-6 flex flex-col gap-8 justify-between sm:flex-row'>
      <div className='flex flex-col gap-2'>
        <span className='text-xl opacity-75'>Welcome</span>
        <span className='text-3xl font-bold'>Dashboard</span>
      </div>
      <div className='flex gap-2 items-center h-min'>
        <span className='flex justify-center items-center px-4 py-2 rounded-full border border-white border-opacity-10 w-full'>
          <input placeholder='Search' className='outline-none bg-transparent text-sm w-full' />
          <SearchIcon width={20} height={20} strokeWidth={1.5} className='cursor-pointer' />
        </span>
        <span className='p-2 cursor-pointer hidden sm:flex'>
          <MailIcon width={20} height={20} strokeWidth={1.5} />
        </span>
        <span className='p-2 cursor-pointer hidden sm:flex'>
          <MessageCircleIcon width={20} height={20} strokeWidth={1.5} />
        </span>
      </div>
    </div>
  )
}
