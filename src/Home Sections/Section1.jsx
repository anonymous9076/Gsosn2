import React, { useRef, useState } from 'react';
import Container from '../Components/Container';
import { MoveRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function Section1() {
    let images = [
        { src: "Images/Section1/1.png", title: 'Contrary to popular belief, Lorem Ipsum is not simply', desc: 'SALE UP TO', Eighty: '80%', Off: 'OFF', button: 'Shop Now', Icon: <MoveRight size={16} /> },
        { src: "Images/Section1/2.png", title: 'Contrary to popular belief, Lorem Ipsum is not simply', desc: 'SALE UP TO', Eighty: '80%', Off: 'OFF', button: 'Shop Now', Icon: <MoveRight size={16} /> },
        { src: "Images/Section1/3.png", title: 'Contrary to popular belief, Lorem Ipsum is not simply', desc: 'SALE UP TO', Eighty: '80%', Off: 'OFF', button: 'Shop Now', Icon: <MoveRight size={16} /> },
        { src: "Images/Section1/4.png", title: 'Contrary to popular belief, Lorem Ipsum is not simply', desc: 'SALE UP TO', Eighty: '80%', Off: 'OFF', button: 'Shop Now', Icon: <MoveRight size={16} /> },
        { src: "Images/Section1/5.png", title: 'Contrary to popular belief, Lorem Ipsum is not simply', desc: 'SALE UP TO', Eighty: '80%', Off: 'OFF', button: 'Shop Now', Icon: <MoveRight size={16} /> }
    ]

    return (
        <div className='relative'>
            <Navbar className='!absolute bg-transparent top-0 z-50 sm:backdrop-blur w-full py-6  px-4 md:px-8 lg:px-8 xl:px-20 text-white'/>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {
                    images.map((item, index) => (
                        <SwiperSlide>
                            <div className='h-[100vh] w-[100dvw] relative'>
                                <div className='h-full w-full '>
                                    <img className='h-full w-full object-cover' src={item.src} alt="1" />
                                </div>
                                <div className='h-screen w-full absolute top-0 left-0 bg-black/10 lg:pr-[420px]'>
                                    <Container className='flex items-center h-full' >
                                        <div className='  flex flex-col gap-10'>
                                            <div>
                                                <h1 className='font-dosis text-5xl text-white font-extrabold'>{item.title}</h1>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div className='bg-white w-[1px] h-[100px]'></div>
                                                <div className='flex flex-col justify-center'>
                                                    <span className='text-3xl text-white font-thin'>{item.desc}</span>
                                                    <div className='flex gap-2'>
                                                        <span className='text-3xl font-medium text-[#c7a379]'>{item.Eighty}</span>
                                                        <span className='text-3xl font-thin text-white'>{item.Off}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to='/products'>
                                                <button className='bg-[#c7a379] w-44 rounded-full h-14 text-white font-bold text-xl flex justify-center items-center gap-2 hover:bg-black duration-300'>
                                                    <span>{item.button}</span>
                                                    <span className='mt-1'>{item.Icon}</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}