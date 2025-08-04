import React, { useState } from 'react'
import Container from './Container'
import Accordion from './Accordion'
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
const pageLinks = [
    { name: "Account", path: "/Profile" },
    { name: "Faq's", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Policy", path: "/policy" }
];
const Navbar = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showPages, setShowPages] = useState(false)

    const toggleMenu = () => {
        setIsOpen(A => !A)
    }
    return (
        <div className={`flex justify-between sm:border-b sm:border-gray-300 text-[#7f7f7f] px-4 md:px-8 lg:px-8 xl:px-20 py-5 ${className}`}>
            <div></div>
            <div className='gap-10 text-[14px] font-semibold hidden sm:flex'>
                <Link to='/'>
                    <h2 className='hover:text-black duration-300'>Home</h2>
                </Link>
                <Link to='/AboutUs'>
                    <h2 className='hover:text-black duration-300'>About Us</h2>
                </Link>
                <Link to='/Blog'>
                    <h2 className='hover:text-black duration-300'>Blog</h2>
                </Link>
                <div onClick={() => setShowPages(!showPages)} className='hover:text-black relative cursor-pointer z-40 flex items-center duration-300'>
                    Pages<ChevronDown size={18} />
                    <ul className={`absolute top-8 gap-3 z-50 w-52 bg-black text-white rounded shadow-lg transition-all duration-300 transform origin-top
                      ${showPages
                            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                            : "opacity-0 -translate-y-2 scale-y-0 pointer-events-none"
                        }`}>  {pageLinks.map((item, index) => (
                            <Link key={index} to={item.path}>
                                <li className="border-b px-2 py-3 hover:bg-red-800 hover:pl-6 duration-500">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <Link to='/products'>
                    <h2 className='hover:text-black duration-300'>Shop</h2>
                </Link>
                <Link to='/Contact'>
                    <h2 className='hover:text-black duration-300'>Contact</h2>
                </Link>
            </div>
            <div className='sm:hidden flex '>
                {<button onClick={toggleMenu}>
                    {!isOpen ? <Menu size={28} /> : <X />}
                </button>}
            </div>
            {
                <div className={`w-[70%] z-[999] h-screen fixed left-0 top-0  duration-500 transition-transform   ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='bg-[#c7a379] h-full w-full pt-[4vh] flex flex-col '>
                        <div className='w-full text-white text-2xl px-2 flex flex-col gap-3'>
                            <Link to='/'>
                                <h2 className='hover:text-black border-b'>Home</h2>
                            </Link>
                            <Link to='/AboutUs'>
                                <h2 className='hover:text-black border-b'>About Us</h2>
                            </Link>
                            <Link to='/Blog'>
                                <h2 className='hover:text-black border-b'>Blog</h2>
                            </Link>
                            <h2 className='hover:text-black border-b'>Pages</h2>
                            <Link to='/products'>
                                <h2 className='hover:text-black border-b'>Shop</h2>
                            </Link>
                            <Link to='/Contact'>
                                <h2 className='hover:text-black border-b'>Contact</h2>
                            </Link>
                            <Link to='/faq'>
                                <h2 className='hover:text-black border-b'>Faq's</h2>
                            </Link>
                            <Link to='/terms'>
                                <h2 className='hover:text-black border-b'>Terms & Conditions</h2>
                            </Link>
                            <Link to='/policy'>
                                <h2 className='hover:text-black border-b'>Policy</h2>
                            </Link>
                            <div className='py-2 px-6 '>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar