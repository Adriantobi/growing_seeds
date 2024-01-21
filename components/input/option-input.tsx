'use client'

import { ChevronDownIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface OptionInputProps {
  uniqueId: number;
  remove?: (value: number) => void;
  textPlaceholder: string;
  optionsPlaceholder: string;
  currencySymbol?: string;
  type: string;
  options: any[];
}

export default function OptionInput({ uniqueId, remove, optionsPlaceholder, textPlaceholder, options, currencySymbol, type }: OptionInputProps) {
  const [option, setOption] = useState(null)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    setDropdown(false)
  }, [option])

  if (type === 'string') {
    return (
      <span className='w-full text-sm rounded-lg flex flex-col relative gap-2'>
        <div className='w-full bg-hover bg-opacity-25 hover:bg-opacity-50 text-sm rounded-lg border border-hover flex relative'>
          <span className='flex gap-1 text-sm items-center px-4 py-2 cursor-pointer border-r border-hover text-center whitespace-nowrap' onClick={() => setDropdown(!dropdown)}>
            {option === null ? optionsPlaceholder : option}
            <ChevronDownIcon width={20} height={20} strokeWidth={1.5} />
          </span>

          <span className='w-full px-4 py-2 flex justify-center items-center gap-0.5'>
            <input placeholder={textPlaceholder} className='bg-transparent outline-none w-full' type='text'/>
          </span>
          {remove ? <span onClick={() => remove(uniqueId)} className='flex justify-center items-center p-2 cursor-pointer'>
            <XIcon width={20} height={20} strokeWidth={1.5} />
          </span> : null }
        </div>

        <div className={`rounded-lg z-10 flex-col overflow-hidden ${dropdown ? 'flex' : 'hidden'}`}>
          <ul>
            {options.map((current) => (
              <li className={`px-4 py-2 bg-hover bg-opacity-25 hover:bg-opacity-50 cursor-pointer ${option === current ? 'bg-opacity-40' : ''}`} key={current} onClick={() => setOption(current)}>{current}</li>
            ))}
          </ul>
        </div>
      </span>
    )
  } else if (type === 'number') {
    return (
      <span className='w-full text-sm rounded-lg flex flex-col relative gap-2'>
        <div className='w-full bg-hover bg-opacity-25 hover:bg-opacity-50 text-sm rounded-lg border border-hover flex relative'>
          <span className='flex gap-1 text-sm items-center px-4 py-2 cursor-pointer border-r border-hover text-center whitespace-nowrap' onClick={() => setDropdown(!dropdown)}>
            {option === null ? optionsPlaceholder : `${currencySymbol}${option}`}
            <ChevronDownIcon width={20} height={20} strokeWidth={1.5} />
          </span>

          <span className='w-full px-4 py-2 flex justify-center items-center gap-0.5'>
            <input placeholder={textPlaceholder} className='bg-transparent outline-none w-full' type='number' inputMode='numeric' min={0} />
          </span>
          {remove ? <span onClick={() => remove(uniqueId)} className='flex justify-center items-center p-2 cursor-pointer'>
            <XIcon width={20} height={20} strokeWidth={1.5} />
          </span> : null }
        </div>

        <div className={`rounded-lg z-10 flex-col overflow-hidden ${dropdown ? 'flex' : 'hidden'}`}>
          <ul>
            {options.map((current) => (
              <li className={`px-4 py-2 bg-hover bg-opacity-25 hover:bg-opacity-50 cursor-pointer ${option === current ? 'bg-opacity-40' : ''}`} key={current} onClick={() => setOption(current)}>{currencySymbol}{current}</li>
            ))}
          </ul>
        </div>
      </span>
    )
  } else if (type === 'currency') {
    return (
      <span className='w-full text-sm rounded-lg flex flex-col relative gap-2'>
        <div className='w-full bg-hover bg-opacity-25 hover:bg-opacity-50 text-sm rounded-lg border border-hover flex relative'>
          <span className='flex gap-1 text-sm items-center px-4 py-2 cursor-pointer border-r border-hover text-center whitespace-nowrap' onClick={() => setDropdown(!dropdown)}>
            {option === null ? optionsPlaceholder : option}
            <ChevronDownIcon width={20} height={20} strokeWidth={1.5} />
          </span>

          <span className='w-full px-4 py-2 flex justify-center items-center gap-0.5'>
            {currencySymbol}
            <input placeholder={textPlaceholder} className='bg-transparent outline-none w-full' type='number' inputMode='numeric' min={0} />
          </span>
          {remove ? <span onClick={() => remove(uniqueId)} className='flex justify-center items-center p-2 cursor-pointer'>
            <XIcon width={20} height={20} strokeWidth={1.5} />
          </span> : null }
        </div>

        <div className={`rounded-lg z-10 flex-col overflow-hidden ${dropdown ? 'flex' : 'hidden'}`}>
          <ul>
            {options.map((current) => (
              <li className={`px-4 py-2 bg-hover bg-opacity-25 hover:bg-opacity-50 cursor-pointer ${option === current ? 'bg-opacity-40' : ''}`} key={current} onClick={() => setOption(current)}>{current}</li>
            ))}
          </ul>
        </div>
      </span>
    )
  }
}
