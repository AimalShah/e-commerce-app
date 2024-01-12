import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import ProductCard from '../components/ProductCard'


function Cart() {
    const {items} = useContext(CartContext) 
    const [sameItems , setSameItems] = useState(1)

    console.log(items[0])
  return (
    <div>
        Items in Cart : {items.length}
      {
        items.map((product) => (
            <div className='flex gap-4 m-6 border border-zinc-800 rounded p-2  h-20 items-center text-xl justify-between w-1/2'>
                <div className='h-full'>
                    <img src={product.image}  className='w-full h-full'/>
                </div>
                <div className='w-64'>
                    {product.title}
                </div>
                <div>
                    {product.price}$
                </div> 
                <div className='flex border text-2xl border-zince-600 items-center gap-4'>
                    <span className='border p-2' onClick={() => setSameItems((prev) => prev-1)}>-</span>
                        {sameItems}
                    <span className='border p-2' onClick={() => setSameItems((prev) => prev+1)}>+</span>
                </div>
            </div>
        
        ))
      }
    </div>
  )
}

export default Cart
