import React from 'react'
import Container from '../Components/Container'

const Section5 = () => {
    return (
        <Container>
            <div className='flex flex-col gap-8 pb-8'>
                <div>
                    <h1 className='text-[36px]'>Best Offers on Products</h1>
                    <p className='text-[17px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='xl:flex xl:flex-row flex flex-col gap-6'>
                    <div className='flex flex-col gap-8 xl:w-1/2'>
                        <div className='px-5 py-5 flex flex-col gap-5 border border-gray-300 rounded-lg bg-[#c7a379]'>
                            <div className='flex gap-10'>
                                <div className='h-32 w-32'>
                                    <img src="Images/Section5/1.png" alt="1" />
                                </div>
                                <div className='mt-5 text-white'>
                                    <h2 className='text-[16px] font-semibold'>Up to 68% OFF</h2>
                                    <h1 className='text-[24px]'>Chair & Sofa</h1>
                                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 '>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img src="Images/Sections3/2.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Chair</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img  src="Images/Sections3/3.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Chair</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img className='h-full w-full' src="Images/Sections3/1.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Chair</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img src="Images/Sections3/2.4.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Sofa</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img src="Images/Sections3/2.3.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Sofa</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                                <div className='bg-gray-50 border border-gray-300 rounded-lg flex flex-col items-center py-7 px-11 gap-4 hover:scale-110 duration-500 hover:shadow-md'>
                                    <div className='h-16 w-20'>
                                        <img src="Images/Sections3/2.1.png" alt="1" />
                                    </div>
                                    <h2 className='text-[14px] font-semibold text-[#7f7f7f]'>Sofa</h2>
                                    <h1 className='text-[16px] whitespace-nowrap'>Up to <span className='text-[#c7a379]'>65%</span> OFF</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex border border-gray-300 rounded-lg gap-8 px-5 py-2 items-center bg-gray-50 hover:scale-102 duration-500 hover:shadow-md'>
                            <div className='h-40 w-36'>
                                <img className='h-full w-full object-contain object-[0%_50%]' src="Images/Section5/2.png" alt="2" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[16px] text-[#c7a379] font-semibold'>Chair upto 68% OFF</h2>
                                <h1 className='text-[24px]'>Chair & Sofa</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-1/2 flex flex-col gap-[35px]'>
                        <div className='flex border border-gray-300 rounded-lg gap-6 px-5 py-2 w-full items-center bg-gray-50 hover:scale-102 duration-500 hover:shadow-md'>
                            <div className='h-40 w-36'>
                                <img className='h-full w-full object-contain object-[0%_50%] ' src="Images/Section5/3.png" alt="2" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[16px] text-[#c7a379] font-semibold'>Chair upto 68% OFF</h2>
                                <h1 className='text-[24px]'>Chair & Sofa</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex border border-gray-300 rounded-lg gap-6 px-5 py-2 w-full items-center bg-gray-50 hover:scale-102 duration-500 hover:shadow-md'>
                            <div className='h-40 w-36'>
                                <img className='h-full w-full object-contain object-[0%_50%]' src="Images/Section5/4.png" alt="2" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[16px] text-[#c7a379] font-semibold'>Chair upto 68% OFF</h2>
                                <h1 className='text-[24px]'>Chair & Sofa</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex border border-gray-300 rounded-lg gap-6 px-5 py-2 w-full items-center bg-gray-50 hover:scale-102 duration-500 hover:shadow-md'>
                            <div className='h-40 w-36'>
                                <img className='h-full w-full object-contain object-[0%_50%]' src="Images/Section5/5.png" alt="2" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[16px] text-[#c7a379] font-semibold'>Chair upto 68% OFF</h2>
                                <h1 className='text-[24px]'>Chair & Sofa</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex border border-gray-300 rounded-lg gap-6 px-5 py-2 w-full items-center bg-gray-50 hover:scale-102 duration-500 hover:shadow-md'>
                            <div className='h-40 w-36'>
                                <img className='h-full w-full object-contain object-[0%_50%]' src="Images/Section5/6.png" alt="2" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[16px] text-[#c7a379] font-semibold'>Chair upto 68% OFF</h2>
                                <h1 className='text-[24px]'>Chair & Sofa</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Section5