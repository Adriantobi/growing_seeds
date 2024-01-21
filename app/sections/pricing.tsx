import React from 'react'

export default function PricingSection() {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-6 justify-center'>
        <div className='relative w-fit h-full flex justify-center items-center'> 
          <span className='text-4xl h-max font-medium'>Transparent Pricing</span>
          <span className='absolute w-[35%] h-full bg-gradient-to-r from-transparent to-background to-100% opacity-75 top-0.5 right-0'/>
        </div>
        <span className='max-w-[34em] flex opacity-75'>Focus on ministry, not spreadsheets. Streamline your financial operations with pricing plans tailored to your church.</span>
      </div>
    </div>
  )
}
