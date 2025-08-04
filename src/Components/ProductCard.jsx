import { Heart } from 'lucide-react'

import React from 'react'

const ProductCard = ({ item }) => {

    return (
        <>
            <div className='min-w-full relative  border hover:scale-105 cursor-pointer duration-500 border-gray-200 shadow-lg rounded-md'>
                <div className=' z-10 absolute top-0 left-0 flex justify-between w-full p-4'>
                    <div className='bg-[#c7a379] text-white text-sm whitespace-nowrap px-2 py-1 rounded-full  '>{item?.discount}% Off</div>
                    <div className='hover:text-red-600'>
                        <Heart className='hover:fill-red-600' size={28} strokeWidth={1.5} />
                    </div>
                </div>
                <div className='md:h-[240px] w-full p-6 overflow-hidden'>
                    <img className='w-full h-full scale-75  object-contain ' src={item.image} alt="qq" />
                </div>
                <div className='p-4'>
                    <div>
                        <h3 className='text-[14px]  text-[#464646] font-semibold'>{item.category}</h3>
                        <h1 className='text-[24px] font-bold'>{item.name}</h1>
                    </div>
                    <div>
                        <div className='flex gap-2 items-end'>
                            <p className='text-[24px] font-semibold text-[#c7a379]'>${(item.price - ((item.price * item.discount) / 100)).toPrecision(4)}</p>
                            <p className='line-through text-[14px] py-1 text-[#7f7f7f]'>${item.price}</p>
                        </div>
                        <h2 className='text-[16px] font-bold'>{item.pieces} PC</h2>
                    </div>
                    <button className='bg-[#2f2f2f] text-white w-full rounded-md py-1 hover:bg-red-600 duration-300'>
                        ADD
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard