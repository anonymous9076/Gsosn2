import React, {useState} from 'react'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import { Apple } from 'lucide-react'
import Section4 from '../Home Sections/Section4'
import Section7 from '../Home Sections/Section7'
import Loader from '../Components/Loader'

const AboutUs = () => {
      const [loading, setLoading] = useState(true)
  
  setTimeout(() => {
    setLoading(false)
  }, 1000);
  if(loading){
    return <Loader/>
  }
  return (
    <>
      <Navbar />
      <Container>
        <div className='w-full'>
          <div className='w-full md:flex '>
            <div className='w-full md:min-w-1/2 flex items-center justify-center'>
              <img className='' src="Images/AboutUs/about2.jpg" alt="chair" />
            </div>
            <div className='w-full md:min-w-1/2 lg:pl-4 xl:pr-32 py-11 flex flex-col gap-5'>
              <h1 className='text-[36px] leading-11'>Contrary To Popular Belief, Lorem is Not Simply</h1>
              <p className='text-[16px] leading-8 text-[#7f7f7f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. ,
              </p>
              <div className='flex flex-col gap-4 sm:flex sm:flex-row sm:gap-32'>
                <div className='flex items-center gap-5'>
                  <div className='h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#c7a379]'>
                    <Apple />
                  </div>
                  <h1 className='text-[20px]'>Chair</h1>
                </div>
                <div className='flex items-center gap-5'>
                  <div className='h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#c7a379]'>
                    <Apple />
                  </div>
                  <h1 className='text-[20px]'>Sofa</h1>
                </div>
              </div>
              <div>
                <button className='bg-[#c7a379] w-40 rounded-full h-12 text-white font-bold text-lg flex justify-center items-center gap-2 hover:bg-black duration-300'>
                  <span className=''>Read More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Section4/>
      <Section7/>
    </>
  )
}

export default AboutUs