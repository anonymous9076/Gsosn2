import React, {useState} from 'react'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import { Bell, Heart, NotebookTabs, Settings, Star, Truck, UserRound } from 'lucide-react'
import Loader from '../Components/Loader'
import { Link } from 'react-router-dom'

const Profile = () => {
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
                <div className='flex'>
                    <div className='flex-col gap-10 py-10 w-[25%] border-r border-gray-300 hidden md:flex'>
                        <div>
                            <h1 className='text-[32px]'>My Account</h1>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><UserRound size={22} /><h3 className='text-[18px]'>User Info</h3></div>
                            <Link to='/Contact'><div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><NotebookTabs size={22} /><h3 className='text-[18px]'>Address</h3></div></Link>
                            <div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><Truck size={22} /><h3 className='text-[18px]'>Order</h3></div>
                            <Link to='/cart'><div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><Heart size={22} /><h3 className='text-[18px]'>Favorites</h3></div></Link>
                            <div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><Star size={22} /><h3 className='text-[18px]'>Wishlist</h3></div>
                            <div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><Settings size={22} /><h3 className='text-[18px]'>Settings</h3></div>
                            <div className='flex items-center gap-2 text-[#7f7f7f] hover:text-[#c7a379]'><Bell size={22} /><h3 className='text-[18px]'>Notifications</h3></div>

                        </div>
                    </div>
                    <div className='w-full md:w-[80%] md:px-16 py-11'>
                        <div className='flex items-center gap-8 border-b pb-8 border-gray-300'>
                            <div>
                                <img src="Images/Profile/user.jpg" alt="user" />
                            </div>
                            <div className='leading-8'>
                                <h1 className='text-[20px]'>Jhon Deo</h1>
                                <h3 className='text-[16px] text-[#7f7f7f]' >Mohali, Punjab</h3>
                            </div>
                        </div>
                        <div className='py-8 border-b border-gray-300 grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>First Name</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='First name' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>Last Name</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='Last name' />
                            </div>
                        </div>
                        <div className='py-8 border-b border-gray-300 grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>Email Address</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='Email' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>Phone No.</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='Phone No.' />
                            </div>
                        </div>
                        <div className='py-8 border-b border-gray-300 grid md:grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>Location</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='Location' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-semibold text-[16px]'>Postal/Zip Code</h2>
                                <input className='border py-2 px-4 text-[14px] rounded-lg border-gray-300' type="text" placeholder='Postal/Zip Code' />
                            </div>
                        </div>
                        <div className='py-8 border-b border-gray-300'>
                            <div className='leading-7'>
                                <h1 className='text-[16px]'>Linked Accounts</h1>
                                <p className='text-[14px] text-[#7f7f7f]'>Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img src="Images/Profile/google.png" alt="" />
                                    </div>
                                    <h2>Sign in With Google</h2>
                                </div>
                                <div>
                                    <button className='bg-[#c7a379] w-36 rounded-lg h-10 text-white font-bold text-xl flex justify-center items-center gap-2 hover:bg-black duration-300'>
                                        <span>Connect</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between py-8 border-b border-gray-300'>
                            <div className='leading-7'>
                                <h2 className='text-[16px] font-semibold'>Delete Account</h2>
                                <p className='text-[14px] text-[#7f7f7f] whitespace-nowrap'>Lorem Ipsum is simply dummy </p>
                            </div>
                            <div>
                                <h2 className='text-red-600 hover:scale-103'>Delete Account</h2>
                            </div>
                        </div>
                        <div className='flex justify-center py-8 '>
                            <button className='bg-[#2f2f2f] w-48 rounded-lg h-14 text-white font-bold text-xl flex justify-center items-center gap-2 hover:bg-black duration-300'>
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile