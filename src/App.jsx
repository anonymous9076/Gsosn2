import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Faq from './Pages/Faq'
import Terms from './Pages/Terms'
import Policy from './Pages/Policy'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path='//policy' element={<Policy/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App