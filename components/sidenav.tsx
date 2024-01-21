import { BarChart3Icon, HomeIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'

export default function SideNav() {
  return (
    <div className='border-r border-x-white border-opacity-15 min-h-full px-6 py-10 hidden flex-col items-center gap-10 sticky top-0 left-0 sm:flex'>
      <Link href={'/'}>
        <span className='w-10 h-10 bg-white rounded-2xl rotate-45 flex justify-center items-center'>
          <span className='w-6 h-6 bg-accent rounded-lg' />
        </span>
      </Link>

      <div className='flex flex-col gap-6 justify-center items-center'>
        <span className='p-2 hover:bg-opacity-50 bg-hover bg-opacity-0 rounded-xl hover:cursor-pointer flex justify-center items-center gap-1'>
          <HomeIcon width={20} height={20} strokeWidth={1.5}/>
        </span>
        <span className='p-2 hover:bg-opacity-50 bg-hover bg-opacity-0 rounded-xl hover:cursor-pointer flex justify-center items-center gap-1'>
          <BarChart3Icon width={20} height={20} strokeWidth={1.5}/>
        </span>
        <span className='p-2 hover:bg-opacity-50 bg-hover bg-opacity-0 rounded-xl hover:cursor-pointer flex justify-center items-center gap-1'>
          <SettingsIcon width={20} height={20} strokeWidth={1.5}/>
        </span>
      </div>
    </div>
  )
}
