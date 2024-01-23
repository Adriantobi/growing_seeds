import React, { ReactNode } from 'react'

interface FeatureCardProps {
  title: string,
  content: string,
  children?: ReactNode,
}

export default function FeatureCard({title, content, children}: FeatureCardProps) {
  return (
    <div className='relative'>
      <div className='rounded-2xl rounded-b-none border-b-0 border-[1.5px] dark:border-nav border-gray-400 p-8 relative min-w-72 w-full md:w-96 min-h-[21.5rem] overflow-hidden'>
        <div className='w-full h-52 rounded-xl dark:bg-nav bg-gray-500 opacity-25 border border-gray-500 flex justify-center items-center relative'>
          <span className='w-20 h-1 rounded-full bg-gray-200 absolute left-0 right-0 mx-auto top-3' />
          {children}
        </div>
        <div className='flex flex-col gap-4 bg-gradient-to-b from-transparent to-background to-25% z-10 absolute bottom-0 left-0 p-8'>
          <span className='font-medium text-base'>{title}</span>
          <span className='opacity-75'>{content}</span>
        </div>
      </div>
      <span className='bg-gradient-to-b from-transparent to-background w-full h-full absolute bottom-0 left-0' />
    </div>
  )
}
