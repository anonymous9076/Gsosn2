import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const Counter = ({counter, setCounter}) => {

    const handleOC = () => {
        setCounter((curr) => curr + 1)
    }
    const handleOCM = () => {
        if (counter > 1) {
            setCounter((curr) => curr - 1)
        }

    }
    return (
        <div className='border border-gray-300 w-fit  rounded-md py-2 px-2 flex gap-10'>
            <button onClick={handleOCM} className='bg-[#c7a379] rounded-md h-8 w-8 flex items-center justify-center text-white hover:scale-105 duration-150'>
                <Minus size={20} />
            </button>
            <span className='flex items-center'>{counter}</span>
            <button onClick={handleOC} className='bg-[#c7a379] rounded-md h-8 w-8 flex items-center justify-center text-white hover:scale-105 duration-150'>
                <Plus size={20} />
            </button>
        </div>
    )
}

export default Counter