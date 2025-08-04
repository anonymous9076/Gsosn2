import React, { useEffect, useState } from 'react'
import ProductData from '../ProductsData.json'
import ProductCard from './ProductCard'
import Container from './Container'


const Shop = () => {
    const [allItems, setAllItems] = useState([{
        "image": "Images/Section6/1.png",
        "name": "6 Seaters Dining Table",
        "price": 600,
        "category": "Dining",
        "discount": 45,
        "pieces": 1
    }])

    useEffect(() => {
        const data = [...ProductData.chair.products, ...ProductData.sofa.products, ...ProductData.lamp.products, ...ProductData.dining.products]
        setAllItems(data)
    }, [ProductData])

    return (
        <>
            <Container>
                <div className='flex flex-col gap-8'>
                    <div>
                        <h1 className='text-[36px] font-bold'>Shop</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 '>
                        {
                            allItems.map((items, index) =>
                                <div key={index} className='w-full'>
                                    <ProductCard item={items} />
                                </div>
                            )
                        }
                    </div >
                </div>
            </Container>
        </>
    )
}

export default Shop