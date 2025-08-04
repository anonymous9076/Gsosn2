import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Container>
                <div className='w-full border-b border-gray-300 py-3'>
                    <div className='grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-4'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[25px] font-bold '>Contach Us</h1>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>India, Punjab</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Mohali, Sector 82</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Ph: 885 885 885</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Ph: 880 880 880</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[25px] font-bold'>Help Center</h1>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Payments</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Shipping</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Checkout</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Product Returns</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[25px] font-bold'>Categories</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Chair</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Sofa</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Dining Table</h3>
                            <h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Table Lamp</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-[25px] font-bold'>Useful Links</h3>
                            <Link to='/' ><h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Home</h3></Link>
                            <Link to='/Contact' ><h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Contact</h3></Link>
                            <Link to='/AboutUs' ><h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>About</h3></Link>
                            <Link><h3 className='text-[#333] text-[14px] hover:text-black hover:font-semibold'>Terms & Conditions</h3></Link>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='flex justify-center text-[18px] text-[#1a1e29] mb-2'>
                <h4>A website created by <span className='text-black font-bold'>Ashutosh</span><span className='font-bold text-[#00c65e]'> Rana</span></h4>
            </div>
        </>
    )
}

export default Footer