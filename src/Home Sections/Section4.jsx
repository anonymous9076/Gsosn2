import Container from '../Components/Container'
import React from 'react'
import { Link } from 'react-router-dom';


const Section4 = () => {
    return (
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-fit w-full py-14 overflow-hidden'>
                <div className='relative h-[20rem] lg:h-[24rem]  w-full overflow-hidden hover:scale-101 duration-300'>
                    <div className='h-full w-full overflow-hidden'>
                        <img className='w-full h-full object-cover object-right' src="Images/Section4/1.png" alt="1" />
                    </div>
                    <div className='absolute top-0 left-0 h-full w-full flex flex-col gap-3 px-[2rem] xl:px-[5rem] justify-center'>
                        <div>
                            <h1 className='text-[18px] text-[#c7a379]'>Discount 50%</h1>
                            <h1 className='text-[32px]'>Curabitur Non Sofa</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-[16px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet, consectetur.</p>
                            <Link to='/products'>
                            <button className='bg-[#c7a379] w-40 rounded-full h-14 text-white font-bold text-xl flex justify-center items-center gap-2 hover:bg-black duration-400'>
                                Shop now
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='relative h-[20rem] lg:h-[24rem] w-full overflow-hidden hover:scale-101 duration-300'>
                    <div className='h-full w-full'>
                        <img className='object-cover h-full w-full' src="Images/Section4/2.png" alt="2" />
                    </div>
                    <div className='absolute top-0 left-0 h-full w-full flex flex-col gap-3 px-[2rem] xl:px-[5rem] justify-center'>
                        <div>
                            <h1 className='text-[18px] text-[#c7a379]'>Discount 50%</h1>
                            <h1 className='text-[32px]'>Curabitur Non Sofa</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-[16px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet, consectetur.</p>
                            <Link to='/products'>
                            <button className='bg-[#c7a379] w-40 rounded-full h-14 text-white font-bold text-xl flex justify-center items-center gap-2 hover:bg-black duration-400'>
                                Shop now
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Section4