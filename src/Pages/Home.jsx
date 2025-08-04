import React, {useState} from 'react'
import Section1 from '../Home Sections/Section1'
import Section2 from '../Home Sections/Section2'
import ProductContainer from '../Components/ProductContainer'
import ProductData from '../ProductsData.json'
import Section4 from '../Home Sections/Section4'
import Section5 from '../Home Sections/Section5'
import Section7 from '../Home Sections/Section7'
import Section8 from '../Home Sections/Section8'
import Loader from '../Components/Loader'

const Home = () => {
        const [loading, setLoading] = useState(true)
  
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  if(loading){
    return <Loader/>
  }
    return (
        <>
            <Section1 />
            <Section2 />
            <ProductContainer data={ProductData.chair} />
            <ProductContainer data={ProductData.sofa} />
            <Section4 />
            <Section5 />
            <ProductContainer data={ProductData.dining} />
            <ProductContainer data={ProductData.lamp} />
            <Section7 />
            <Section8 />
        </>
    )
}

export default Home