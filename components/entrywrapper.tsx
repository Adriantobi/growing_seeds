'use client'

import React, { useState } from 'react'
import Input from './input/input'
import OptionInput from './input/option-input'
import { PlusIcon } from 'lucide-react';

interface OptionProps {
  title: string;
  setValue: (title: string) => void;
  selected: boolean;
}

interface GivingsProps {
  type: string;
  uniqueId: number;
  remove: (key: number) => void;
}

interface DenominationProps {
  uniqueId: number;
  remove: (key: number) => void
}

function Option({title, setValue, selected}: OptionProps) {
  return (
    <div className={`px-4 py-2 bg-hover rounded-lg bg-opacity-25 hover:bg-opacity-50 text-sm border border-hover cursor-pointer ${selected ? 'bg-opacity-50' : ''}`} onClick={() => setValue(title)}>
      {title}
    </div>
  )
}

function Denomination({uniqueId, remove}: DenominationProps) {
  return (
    <OptionInput 
      uniqueId={uniqueId}
      type='number'
      currencySymbol='£'
      textPlaceholder='0'
      optionsPlaceholder='Denomination' 
      options={[50,20,10,5,2,1,.50,.20,.10,.05,.02,.01]}
      remove={remove}
    />
  )
}

function Givings({type, uniqueId, remove}: GivingsProps) {
  const Partnership = <OptionInput 
    uniqueId={uniqueId}
    type='currency'
    currencySymbol='£'
    textPlaceholder='0'
    optionsPlaceholder='Partnership' 
    options={['Rhapsody of Realities', 'Loveworld TV', 'Healing School', 'Innercity Mission', 'IMM', 'Missions', 'Bible Sponsorship', 'Campus Ministry', 'Teens Advance Ministry']}
    remove={remove}
  />
  const Offerings = <OptionInput 
    uniqueId={uniqueId}
    type='currency'
    currencySymbol='£'
    textPlaceholder='0'
    optionsPlaceholder='Offerings' 
    options={['Offering', 'Tithes', 'Seed Offering', 'First Fruit', 'Thanksgiving']}
    remove={remove}
  />
  const [payment, setPayment] = useState('')
  const [denominationList, setDenominationList] = useState<{key: number}[]> ([])

  const handleAddDenomination = () => {
    const newKey = denominationList.length > 0 ? Math.max(...denominationList.map((d: {key: number}) => d.key)) + 1 : 0
    const newDenomination: {key: number} = {
      key: newKey,
    }
    setDenominationList([...denominationList, newDenomination])
  }

  const handleRemoveDenomination = (key: number) => {
    setDenominationList(denominationList.filter((denomination) => denomination.key !== key))
  }


  return(
    <span className='flex flex-col gap-4'>
      {type === 'partnership' ? Partnership : null}
      {type === 'offerings' ? Offerings : null}
      <span className='flex gap-4 flex-wrap'>
        <Option title='Cash' setValue={setPayment} selected={payment === 'Cash'} />
        <Option title='Bank Transfer' setValue={setPayment} selected={payment === 'Bank Transfer'} />
        <Option title='KingsPay' setValue={setPayment} selected={payment === 'KingsPay'} />
        <Option title='Cheque' setValue={setPayment} selected={payment === 'Cheque'} />
      </span>
      {payment === 'Cash' ? 
        <>
          {denominationList.map((denomination) => (
            <Denomination key={denomination.key} uniqueId={denomination.key} remove={handleRemoveDenomination} />
          ))}

          <div className='bg-hover bg-opacity-25 hover:bg-opacity-50 gap-1 text-sm flex rounded-lg px-4 py-2 justify-center items-center cursor-pointer border border-hover' onClick={() => handleAddDenomination()}><PlusIcon width={20} height={20} strokeWidth={1.5}/> Add Denomination</div>
        </>
      : null}
      {payment === 'KingsPay' ? <Input type='text' placeholder='Reference Code' /> : null}
      {payment === 'Cheque' ? <Input type='text' placeholder='Cheque Number' /> : null}
    </span>
  )
}

export default function EntryWrapper() {
  const [givingsList, setGivingsList] = useState<{key: number, type: string} []> ([]) 

  const handleAddGiving = (type: string) => {
    const newKey = givingsList.length > 0 ? Math.max(...givingsList.map((d: {key: number}) => d.key)) + 1 : 0
    const newGiving: {key: number, type: string} = {
      key: newKey,
      type: type,
    }
    setGivingsList([...givingsList, newGiving])
  }

  const handleRemoveGiving = (key: number) => {
    setGivingsList(givingsList.filter((giving) => giving.key !== key))
  }

  return (
    <div className='flex flex-col gap-4'>
      <Input type='text' placeholder='Name' /> 
      <div className='bg-hover bg-opacity-25 hover:bg-opacity-50 gap-1 text-sm flex rounded-lg px-4 py-2 justify-center items-center cursor-pointer border border-hover' onClick={() => handleAddGiving('partnership')}><PlusIcon width={20} height={20} strokeWidth={1.5}/> Add Partnership</div>
      {givingsList.map((giving) => (
        giving.type === 'partnership' && <Givings type={giving.type} key={giving.key} uniqueId={giving.key} remove={handleRemoveGiving} />
      ))}
      <div className='bg-hover bg-opacity-25 hover:bg-opacity-50 gap-1 text-sm flex rounded-lg px-4 py-2 justify-center items-center cursor-pointer border border-hover' onClick={() => handleAddGiving('offerings')}><PlusIcon width={20} height={20} strokeWidth={1.5}/> Add Offering</div>
      {givingsList.map((giving) => (
        giving.type === 'offerings' && <Givings type={giving.type} key={giving.key} uniqueId={giving.key} remove={handleRemoveGiving} />
      ))}
      {givingsList.length > 0 ? <div className='bg-hover bg-opacity-25 hover:bg-opacity-50 gap-1 text-sm flex rounded-lg px-4 py-2 justify-center items-center cursor-pointer border border-hover'>Save</div> : null }
    </div>
  )
}
