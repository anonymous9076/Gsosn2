import React from 'react'
import { Truck, ShoppingBag, Headphones, Box } from 'lucide-react'
import Container from '../Components/Container'

const Section2 = () => {
    return (
        <div className='py-16'>
            <Container>
                <div className='h-fit grid lg:grid-cols-4 sm:grid-cols-2 gap-7'>
                    <div className='flex gap-5'>
                        <div className='bg-[#c7a379] text-white w-14 h-14 flex justify-center items-center rounded-full'>
                            <Truck size={25} strokeWidth={2} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-dosis font-extrabold font-4xl text-xl'>Free Shipping</h1>
                            <span className='text-[#6e6e6e]'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#c7a379] text-white w-14 h-14 flex justify-center items-center rounded-full'>
                            <ShoppingBag size={25} strokeWidth={2} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-dosis font-extrabold text-xl'>100% Secure Payment</h1>
                            <span className='text-[#6e6e6e]'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#c7a379] text-white w-14 h-14 flex justify-center items-center rounded-full'>
                            <Headphones size={25} strokeWidth={2} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-dosis font-extrabold text-xl'>Great Support 24x7</h1>
                            <span className='text-[#6e6e6e]'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#c7a379] text-white w-14 h-14 flex justify-center items-center rounded-full'>
                            <Box size={25} strokeWidth={2} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-dosis font-extrabold text-xl'>Money - Returns</h1>
                            <span className='text-[#6e6e6e]'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section2