import React, {useState} from 'react'
import Container from '../Components/Container'
import Loader from '../Components/Loader';

const SignUp = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <div className=' lg:px-72 py-8 '>
            <div className='bg-[#ececec] px-2 sm:px-4 md:px-10 py-10 flex flex-col gap-8 rounded-lg'>
                <h1 className='text-[28px] sm:text-[42px]'>Sign Up to your account</h1>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[18px] font-medium'>Username</h3>
                    <input type="text" className='border border-gray-300 w-full p-2 rounded-lg' placeholder='Username' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[18px] font-medium'>Email I'd</h3>
                    <input type="email" className='border border-gray-300 w-full p-2 rounded-lg' placeholder='Email' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between font-medium'>
                        <h3 className='text-[18px]'>Password</h3>
                        <h4 className='text-[14px] text-[#c7a379] cursor-pointer hover:text-red-800 duration-200'>Forgot Password ?</h4>
                    </div>
                    <input type="password" className='border border-gray-300 w-full p-2 rounded-lg' placeholder='Password' />
                </div>
                <button className='bg-[#c7a379] w-full rounded-lg h-14 cursor-pointer text-white font-medium text-[18px] flex justify-center items-center gap-2 hover:bg-black duration-300'>
                    Sign Up
                </button>
                <div className='flex justify-center'>
                    <h3 className='text-[16px] text-[#7f7f7f] font-medium'>Already have an account? <span className='text-[#c7a379] cursor-pointer hover:text-red-800 duration-200'>Login</span></h3>
                </div>
            </div>
            </div>
        </Container>

    )
}

export default SignUp