import React, { useState } from 'react'

const Section8 = () => {
    const [email, setEmail] = useState('')
    let handleSub =()=>{
        console.log(email)
        setEmail('')
    }
    const handleInputEmail=(e)=>{
        const value = e.target.value 
        setEmail(value)
    }
    return (
        <div className='bg-[#00000073] px-4 md:px-8 lg:px-8 xl:px-20 py-20 flex flex-col gap-10'>
            <div>
                <h1 className=' text-[48px]  text-white'>Contrary to popular belief, Lorem Ipsum.</h1>
                <p className='text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div>
                <div className='sm:w-[85%] md:w-[60%] lg:w-[65%] xl:w-1/2 h-full bg-white relative rounded-lg flex overflow-hidden'>
                <div className=''>
                    <input onChange={handleInputEmail} className='rounded-l-md w-full py-5 px-5 border-none outline-none' type="email" value={email} placeholder='Email Address' />
                    </div>
                    <button onClick={handleSub} className='bg-[#c7a379] absolute top-[15%] right-3 flex items-center py-3 px-10 rounded-lg hover:scale-105 duration-300 font-semibold text-white'>
                        <h2>Subscribe</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section8