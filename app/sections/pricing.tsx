import React from 'react'

export default function PricingSection() {
  return (
    <div className='flex justify-between items-start flex-wrap xl:flex-nowrap gap-10'>
      <div className='flex flex-col gap-6 justify-center pt-4'>
        <div className='relative w-fit flex justify-center items-center h-fit'> 
          <span className='text-3xl sm:text-4xl h-max font-medium'>Transparent Pricing</span>
          <span className='absolute w-[35%] h-full bg-gradient-to-r from-transparent to-background to-100% opacity-75 top-1.5 right-0'/>
        </div>
        <span className='max-w-[34em] flex opacity-75'>Focus on ministry, not spreadsheets. Streamline your financial operations with pricing plans tailored to your church.</span>
      </div>

      <div className='flex items-center flex-wrap lg:flex-nowrap'>
        <div className='relative'>
          <div className='flex flex-col gap-5 z-10 rounded-b-none border-b-0 rounded-2xl border-[1.5px] lg:border-r-0 lg:rounded-r-none dark:border-nav border-gray-400 p-6 min-w-72 md:w-96 min-h-[21.5rem]'>
            <div className='flex flex-col gap-6'>
              <span className='font-medium text-base z-10'>Free Access</span>
              <span className='flex z-10 items-center gap-2'>
                <span className='text-5xl text-white'>£0</span>
                <span className='opacity-75'>No monthly fees</span>
              </span>
              <span className='flex z-10 justify-center text-accent2 px-8 py-4 rounded-full bg-gray-200 dark:bg-background hover:bg-opacity-95 font-semibold border-2 h-min border-accent2 border-opacity-45 cursor-pointer'>Get started now</span>
            </div>
            <span className='w-full bg-hover h-px' />
          </div>
          <span className='bg-gradient-to-b from-transparent to-background w-full h-full absolute bottom-0 left-0' />
        </div>

        <div className='relative'>
          <div className='flex flex-col gap-4 z-10 rounded-b-none border-b-0 rounded-2xl border-[1.5px] dark:border-accent2 border-opacity-45 border-gray-400 p-6 pt-9 min-w-72 w-full md:w-96 min-h-[23rem]'>
            <div className='flex flex-col gap-6'>
              <span className='font-medium text-base z-10'>Pro Access</span>
              <span className='flex z-10 items-center gap-2'>
                <span className='text-5xl text-white'>£29</span>
                <span className='opacity-75'>per month</span>
              </span>
              <span className='flex z-10 justify-center text-accent2 px-8 py-4 rounded-full bg-accent2 bg-opacity-10 hover:bg-opacity-25 font-semibold border-2 h-min border-accent2 border-opacity-45 cursor-pointer'>Start 30-day free trial</span>
            </div>
            <span className='w-full bg-hover h-px' />
          </div>
          <span className='bg-gradient-to-b from-transparent to-background w-full h-full absolute bottom-0 left-0' />
        </div>
      </div>
    </div>
  )
}
