import React from 'react'
import Navbar from '../Components/Navbar'
import CartSec from '../Components/CartSec'
import { useState } from 'react'
import Loader from '../Components/Loader'

const Cart = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);
  if (loading) {
    return <Loader />
  }
  return (
    <>
      <Navbar />
      <CartSec />
    </>
  )
}

export default Cart