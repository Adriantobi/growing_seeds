import React from 'react'

export default function CallToActionSection() {
  return (
    <div className='flex h-[calc(100vh-68px)] flex-col pt-20 relative overflow-hidden text-sm'>
      <div className='flex flex-col gap-10 justify-center items-center z-10'>
        <span className='lg:text-5xl md:text-3xl text-2xl max-w-[14em] text-center'>Take a hold of your church&apos;s financial future today</span>
        <span>Sign up for our app and start managing your finances with ease.</span>
        <span className='flex w-fit justify-self-end text-accent2 px-8 py-3 rounded-full bg-gray-200 dark:bg-nav bg-opacity-80 hover:bg-opacity-95 font-semibold border-2 h-min border-accent2 border-opacity-45 cursor-pointer'>Get started now</span>
      </div>
      <div></div>
      <span className='w-2/4 h-auto bg-gradient-to-tl from-accent2 to-accent rotate-45 absolute top-2/4 -left-24 aspect-square blur-3xl' />
      <span className='w-2/4 h-auto bg-gradient-to-tl from-accent2 to-accent rotate-45 absolute top-2/4 -right-24 aspect-square blur-3xl' />
    </div>
  )
}
