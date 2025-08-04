import React, { useState } from 'react'
import { Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import Container from './Container';
import IconButton from './IconButton';
import { Link } from 'react-router-dom';

const pageLinks = [
    { name: "My Account", path: "/Profile" },
    { name: "SignUp", path: "/signup" },
    { name: "Logout", path: "/login" }
];

const Header = () => {
  const [text, setText] = useState('')
  const [showPages, setshowPages] = useState(false)

  const handleSearch = () => {
    console.log(text)
    setText('')
  }
  const handleText = (e) => {
    const value = e.target.value
    setText(value)
  }
  const handleOnEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSearch()
    }
  }


  return (
    <div className='bg-[#c7a379]'>
      <Container>
        <div className='flex justify-between xl:h-fit w-full '>

          {/* Image Header */}
          <Link to='/'>
            <div className='h-fit'>
              <img src="./Images/Header.png" alt="Header" />
            </div>
          </Link>

          {/* Location and Search Bar */}
          <div className='gap-5 hidden lg:flex'>
            <div className='border border-white rounded-md text-white p-2'>
              <label className='block text-sm'>Your Location</label>
              <select className='border-none outline-none'>
                <option className='text-black'>Select A location</option>
                <option className='text-black'>New Delhi</option>
                <option className='text-black'>Mumbai</option>
                <option className='text-black'>Kolkata</option>
                <option className='text-black'>Chennai</option>
              </select>
            </div>

            {/* search bar */}
            <div className='bg-white flex rounded-md max-h-[100%] w-[250px] xl:w-[420px]'>
              <div className='w-[85%] h-full'>
                <input onChange={handleText} onKeyDown={handleOnEnter} className=' rounded-l-md w-full py-5 px-5 border-none outline-none' type="text" value={text} placeholder='Search for products...' />
              </div>
              <button onClick={handleSearch} className='rounded-r-md w-[15%] flex justify-center items-center'>
                <Search size={20} className='text-gray-400' />
              </button>
            </div>
          </div>

          {/* Fav, Shopping, Profile */}
          <div className='flex items-center text-md h-fit gap-3 text-white'>
            <Link to='/cart'>
              <div className='hover:text-red-600 duration-300'>
                <Heart size={21} className='hover:fill-red-600 duration-300' />
              </div>
            </Link>
            <Link to='/cart'>
              <div className='flex gap-2 mr-2 items-center hover:text-black duration-300'>
                <IconButton icon={ShoppingCart} variant='secondary' />
                <div className='hidden sm:flex sm:flex-col justify-center mt-2'>
                  <span className='font-semibold'>My Cart</span>
                  <span className='text-sm'>$150.00</span>
                </div>
              </div>
            </Link>
            <div className='flex items-center gap-4'>
              <Link to='/Profile'>
                <div className='hidden sm:flex'>
                  <img className='hover:scale-105 cursor-pointer duration-200 rounded-full' src="./Images/HeaderPerson.png" alt="pr" />
                </div>
              </Link>
              <div onClick={() => setshowPages(!showPages)} className='flex items-center cursor-pointer hover:text-black duration-300'>
                <span className='whitespace-nowrap'>John Deo</span>
                <ChevronDown size={18} />
                <ul className={`absolute top-16 right-1 gap-3 z-60 w-40 bg-black text-white rounded shadow-lg transition-all duration-300 transform origin-top
                  ${showPages ?
                    "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                    : "opacity-0 -translate-y-2 scale-y-0 pointer-events-none"
                  }`}> {pageLinks.map((item, index) => (
                    <Link key={index} to={item.path}>
                      <li className="border-b px-2 py-3 hover:bg-red-800 hover:pl-6 duration-500">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Second serachBar */}
        <div className='w-full lg:hidden py-5 '>
          <div className='flex flex-col sm:flex sm:flex-row gap-5  '>


            {/* search bar */}
            <div className='bg-white  flex rounded-md max-h-[100%] w-full'>
              <div className='w-[85%] h-full'>
                <input className=' rounded-l-md w-full py-5 pl-5 border-none outline-none' type="text" placeholder='Search for products...' />
              </div>
              <button className='rounded-r-md w-[15%] flex justify-center items-center'>
                <Search size={20} className='text-gray-400' />
              </button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Header