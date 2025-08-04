import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductContainer = ({ data }) => {
  return (
    <div className='pb-20 '>
      <Container>
        <div className='flex flex-col gap-9'>
          <div>
            <h1 className='text-[36px] font-bold'>{data.category}</h1>
            <p className='text-[16px] text-[#7f7f7f]'>{data.description}</p>
          </div>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                1900: {
                  slidesPerView: 5,
                },
                1390: {
                  slidesPerView: 4,
                },
                980: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Navigation]}
              className="mySwiper "
            >

              {data?.products?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                )
              }
              )}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default ProductContainer