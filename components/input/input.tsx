import React from 'react'

interface InputProps {
  type: string;
  placeholder?: string;
}

export default function Input({type, placeholder}: InputProps) {
  return (
    <div className='bg-hover rounded-lg bg-opacity-25 hover:bg-opacity-50 text-sm border border-hover'>
      <input placeholder={placeholder} className='bg-transparent outline-none px-4 py-2 w-full' type={type}/>
    </div>
  )
}
