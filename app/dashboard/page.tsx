import DashBoard from '@/components/dashboard'
import SideNav from '@/components/sidenav'
import React from 'react'

export default function DashboardPage() {
  return (
    <main className='h-screen w-full flex justify-center'>
      <SideNav />
      <DashBoard />
    </main>
  )
}
