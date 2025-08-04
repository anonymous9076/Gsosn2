import React, { useState } from 'react'
import Counter from './Counter'
import { X } from 'lucide-react'

const TableTr = ({ items , handleRemoveItem}) => {
    const [counter, setCounter] = useState(1)
    
    return (
        <>
            <td className='py-5 px-2 flex h-24 items-center justify-center border-b border-gray-300 '>
            <button className='cursor-pointer p-1' onClick={()=>handleRemoveItem(items.id)} ><X className='hover:rotate-90 duration-700 hover:text-red-600' size={20} /></button></td>
            <td className='py-5 px-2 border border-gray-300'>
                <div className='flex h-10'>
                    <img className='h-full' src={items.image} alt="1" />
                    <div className='leading-5'>
                        <h1 className='text-[14px]'>{items.name}</h1>
                        <span className='text-[13px]'>{items.pieces} pcs</span>
                    </div>
                </div>
            </td>
            <td className='py-5 px-2 border border-gray-300 text-[16px] font-bold'>${items.price}</td>
            <td className='py-5 px-2 border border-gray-300 '>
                <Counter counter={counter} setCounter={setCounter} />
            </td>
            <td className='py-5 px-2 border border-gray-300 text-[16px] font-bold'>${items.price * counter}</td>
        </>
    )
}

export default TableTr