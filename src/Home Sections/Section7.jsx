import React from 'react'
import Container from '../Components/Container'

const Section7 = () => {
    return (
        <Container>
            <div className='flex flex-col gap-40'>
                <div>
                    <h1 className='text-[36px]'>What Clients Say</h1>
                    <p className='text-[16px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='lg:flex lg:flex-row flex flex-col gap-30 lg:gap-5'>
                    <div className='border border-gray-300 w-full lg:w-1/2 relative flex flex-col gap-14 '>
                        <div className='-top-[20%] sm:-top-[25%] left-10 absolute'>
                            <img src="Images/Section7/1.png" alt="1" />
                        </div>
                        <div className='pt-[7rem]  px-8'>
                            <p className='text-[20px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum architecto voluptatum ipsam, libero officiis.</p>
                        </div>
                        <div className='flex justify-between px-20 items-center'>
                            <div className='h-20 w-14 bg-[#c7a379] mt-5 rounded-t-full'>
                            </div>
                            <div>
                                <h1 className='text-[24px]'>Anna Wright</h1>
                                <h2 className='text-[16px] text-[#7f7f7f]'>CEO</h2>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 w-full lg:w-1/2 relative flex flex-col gap-14'>
                        <div className='-top-[20%] sm:-top-[25%] left-10 absolute'>
                            <img src="Images/Section7/2.png" alt="2" />
                        </div>
                        <div className='pt-[7rem]  px-8'>
                            <p className='text-[20px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum architecto voluptatum ipsam, libero officiis.</p>
                        </div>
                        <div className='flex justify-between px-20 items-center'>
                            <div className='h-20 w-14 bg-[#c7a379] mt-5 rounded-t-full'>
                            </div>
                            <div>
                                <h1 className='text-[24px]'>Jhon Deo</h1>
                                <h2 className='text-[16px] text-[#7f7f7f]'>Manager</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Section7