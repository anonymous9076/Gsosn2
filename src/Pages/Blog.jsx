import React, { useState } from 'react'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import { Eye, MessagesSquare, UserRound } from 'lucide-react'
import BlogData from '../BlogData.json'
import Loader from '../Components/Loader'

const Blog = () => {
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
                <div className='flex flex-col gap-10 py-10 '>
                    <div>
                        <h1 className='text-[36px]'>Blog</h1>
                        <p className='text-[16px] text-[#7f7f7f]'>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {
                            BlogData.posts.map((items, index) => (
                                <div key={index} className='max-w-[440px] flex flex-col gap-10 border border-gray-300 relative pb-7 rounded-b-lg hover:scale-103 hover:shadow-xl duration-400 '>
                                    <div className='h-[311px] w-full'>
                                        <div className='w-full h-full overflow-hidden'>
                                            <img className='w-full object-[10%_20%] scale-107 h-full' src={items.image} alt="1" />
                                        </div>
                                        <div className='absolute w-28 h-11 text-white flex items-center font-semibold justify-center top-5 left-5 bg-[#c7a379]'>
                                            <h2>{items.date}</h2>
                                        </div>
                                    </div>
                                    <div className='absolute top-71 left-1/2 transform -translate-x-1/2 w-[90%]'>
                                        <div className='border border-gray-300 w-full flex bg-white justify-between px-5 lg:px-6 xl:px-14 py-3'>
                                            <div className='flex gap-2'>
                                                <UserRound size={20} className='text-[#c7a379]' />
                                                <span className='text-[15px] text-[#7f7f7f] font-semibold'>{items.author}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <MessagesSquare size={20} className='text-[#c7a379]' />
                                                <span className='text-[15px] text-[#7f7f7f] font-semibold'>1.2k</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <Eye size={20} className='text-[#c7a379]' />
                                                <span className='text-[15px] text-[#7f7f7f] font-semibold'>9.5k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-5 flex flex-col gap-4'>
                                        <h1 className='text-[20px] text-center'>{items.title}</h1>
                                        <p className='text-[16px] text-[#7f7f7f] text-center'>{items.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog