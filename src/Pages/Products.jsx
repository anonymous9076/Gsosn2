import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Shop from '../Components/Shop'
import Loader from '../Components/Loader'

const Products = () => {
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
      <Shop />
    </>
  )
}

export default Products