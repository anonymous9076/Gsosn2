import React, { useState } from 'react'
import Loader from '../Components/Loader';
import Container from '../Components/Container';
import Navbar from '../Components/Navbar';
import { Check } from 'lucide-react';

const Policy = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <Navbar />
            <Container>
                <div className='py-10 flex flex-col gap-8 lg:pr-96'>
                    <div>
                        <h1 className='text-[36px]'>Privacy & Policy</h1>
                        <h3 className='text-[16px] text-[#7f7f7f]'>Updated 18 October 2021</h3>
                    </div>
                    <p className='text-[16px] text-[#7f7f7f] font-semibold leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <h1 className='text-[28px]'>Licensing Policy</h1>
                    <p className='text-[16px] text-[#7f7f7f] font-semibold leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since.
                    </p>
                    <h1 className='text-[24px]'>Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                    <h1 className='text-[28px]'>Additional Policy</h1>
                    <p className='text-[16px] text-[#7f7f7f] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since.
                    </p>
                    <h1 className='text-[24px]'>Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className='flex items-start gap-4 leading-7'>
                            <div className='bg-[#c7a379] rounded-full p-1.5 mt-2 justify-center flex text-white'><Check size={15} /></div>
                            <p className='text-[16px] text-[#7f7f7f] font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Policy