import React from 'react'
import DashBoardHeader from './dashboard-header'
import NewEntry from './newentry'

export default function DashBoard() {
  return (
    <div className='p-5 border-r border-x-white border-opacity-15 max-w-[42em] w-[100%] flex flex-col gap-6 overflow-y-scroll no-scrollbar sm:p-8'>
      <DashBoardHeader />
      <NewEntry /> 
    </div>
  )
}
