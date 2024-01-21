import React from 'react'
import NavBar from '../components/navbar'

export default function HeroSection() {
  return (
    <div className='flex flex-col relative text-center h-[100vh]'>
      <span className='blur-2xl w-full h-full absolute opacity-85'>
        <span className='max-w-[36em] h-[45em] opacity-75 bg-gradient-to-b from-accent2 to-accent [clip-path:polygon(50%_0,100%_100%,0_100%)] absolute left-0 right-0 top-0 mx-auto'/>
      </span>
      <div className='pt-36 z-10 flex flex-col items-center gap-10'>
        <span className='lg:text-7xl md:text-5xl text-3xl z-10 font-medium max-w-[14em]'>Discover all-in-one platform for church finance</span>
        <span className='font-normal text-lg max-w-[37em]'>Digital solution designed to help churches manage their financial operations to improve financial performance.</span>
        <span className='flex justify-self-end text-accent2 px-8 py-3 rounded-full bg-gray-200 dark:bg-nav bg-opacity-80 hover:bg-opacity-95 font-semibold border-2 h-min border-accent2 border-opacity-45 cursor-pointer'>Get started now</span>
      </div>
    </div>
  )
}
