import Container from './Container'
import ProductData from '../ProductsData.json'
import TableTr from './TableTr'
import { useEffect, useState } from 'react'


const CartSec = () => {
    const [initalData, setInitaldata] = useState(ProductData.chair.products)

    const handleRemoveItem = (id) => {
        const result = initalData.filter((item) => item.id !== id)
        setInitaldata(result)
    }
    return (
        <Container>
            <div className='flex flex-col gap-7 py-10 '>
                <div>
                    <h1 className='text-[36px] font-bold'>Cart</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='w-full overflow-x-auto'>
                    <table className='min-w-[1350px] border border-gray-300'>
                        <tbody>
                            <tr>
                                <th className=' border border-gray-300'></th>
                                <th className=' px-2 py-4 text-left border border-gray-300'>Products</th>
                                <th className=' px-2 py-4 text-left border border-gray-300'>Price</th>
                                <th className=' px-2 py-4 text-left border border-gray-300'>Quantity</th>
                                <th className=' px-2 py-4 text-left border border-gray-300'>Total</th>
                            </tr>
                            {
                                initalData.map((items, index) => (
                                    <tr key={items}>
                                        <TableTr items={items} handleRemoveItem={handleRemoveItem} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}

export default CartSec




function dsf(x, y) {
    console.log(x)
}
