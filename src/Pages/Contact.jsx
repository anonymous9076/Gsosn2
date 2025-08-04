import React, {useState} from 'react'
import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';
import Container from '../Components/Container';
import { Mail, MapPin, Phone } from 'lucide-react';


const Contact = () => {
    const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);
  if (loading) {
    return <Loader />
  }
  return (
    <>
    <Navbar/>
    <Container>
    <div className='py-9'>
        <div className='grid sm:grid-cols-2  lg:grid-cols-3 w-full gap-5'>
            <div className='border border-gray-300 py-16 flex flex-col gap-5 rounded-lg px-10 items-center w-full hover:shadow-2xl hover:scale-101 duration-1000'>
                <div className='h-24 w-24 bg-[#c7a379] text-white flex rounded-full items-center justify-center'>
                    <MapPin size={60} />
                </div>
                <div>
                    <h1 className='text-[18px]'>Mohali, Punjab (Chandigarh) India, 176076</h1>
                </div>
            </div>
            <div className='border border-gray-300 py-16 flex flex-col gap-5 rounded-lg px-10 items-center w-full hover:shadow-2xl hover:scale-101 duration-1000'>
                <div className='h-24 w-24 bg-[#c7a379] text-white flex rounded-full items-center justify-center'>
                    <Phone size={50} />
                </div>
                <div>
                    <h1 className='text-[18px]'>8888 111 333</h1>
                </div>
            </div>
            <div className='border border-gray-300 py-16 flex flex-col gap-5 rounded-lg px-10 items-center w-full hover:shadow-2xl hover:scale-101 duration-1000'>
                <div className='h-24 w-24 bg-[#c7a379] text-white flex rounded-full items-center justify-center'>
                    <Mail size={60} />
                </div>
                <div>
                    <h1 className='text-[18px]'>ashutoshr033@gmail.com</h1>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
    </Container>
    </>
  )
}

export default Contact