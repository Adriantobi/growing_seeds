import React from 'react'
import FeatureCard from '../components/feature-card'

export default function FeaturesSection() {
  return (
    <div className='relative flex flex-col w-full gap-12 justify-center items-center'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <div className='relative'> 
          <span className='text-3xl sm:text-4xl font-medium'>Don&apos;t hesitate. Let&apos;s Try</span>
          <span className='absolute w-[35%] h-full bg-gradient-to-r from-transparent to-background to-100% opacity-75 top-0 right-0 scale-150'/>
        </div>
        <span className='max-w-[34em] flex text-center opacity-75'>Growing Seeds provides various features that can make it easier for churches to manage their finances.</span>
      </div>
      <div className='flex gap-6 justify-center items-center flex-wrap'>
        <FeatureCard title='Financial Planning Analysis' content='Make informed decisions about your church&apos;s financial future with powerful forecasting and scenario analysis tools.'/>
        <FeatureCard title='Cash Flow' content='Optimize your cash flow and manage your working capital with ease using the cash management features.'/>
        <FeatureCard title='Church Intelligence' content='Access real-time data and insights to make informed decisions about your churches&apos;s financial performance.'/>
      </div>
    </div>
  )
}
