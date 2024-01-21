'use client'

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  const {status} = useSession()

  return (
    <div className='py-4 px-4 flex items-center justify-between sticky top-0 right-0 left-0 mx-auto z-50 backdrop-blur-lg text-sm max-w-screen-xl justify-self-center items-center self-center'>
      <div className='flex gap-2 font-semibold text-lg items-center cursor-pointer justify-self-start'>
        <span className='w-8 h-8 bg-white rounded-xl rotate-45 flex justify-center items-center'>
          <span className='w-5 h-5 bg-accent rounded-md' />
        </span>
        <span className='hidden md:flex'>Growing Seeds</span>
      </div>
      <div className='hidden md:flex justify-center items-center p-2 rounded-full dark:bg-nav bg-gray-200 border border-white border-opacity-25 justify-self-center absolute left-0 right-0 w-fit mx-auto'>
        <ul className='flex justify-center items-center'>
          <li className='px-5 py-1.5 cursor-pointer rounded-full dark:bg-neutral-700 bg-gray-100 font-semibold'>Home</li>
          <li className='px-5 py-1.5 cursor-pointer'>About</li>
          <li className='px-5 py-1.5 cursor-pointer'>Pricing</li>
          <li className='px-5 py-1.5 cursor-pointer'>Blog</li>
        </ul>
      </div>
      { status === 'authenticated' ?
        <Link href={'/dashboard'}>
          <span className='flex justify-self-end text-accent2 px-5 py-1.5 rounded-full bg-accent2 bg-opacity-10 hover:bg-opacity-25 font-semibold border-2 h-min border-accent2 border-opacity-10 cursor-pointer'>Dashboard</span>
        </Link>
        : <span className='flex justify-self-end text-accent2 px-5 py-1.5 rounded-full bg-accent2 bg-opacity-10 hover:bg-opacity-25 font-semibold border-2 h-min border-accent2 border-opacity-10 cursor-pointer' onClick={() => signIn('google')}>Log in</span>
      }
    </div>
  )
}
