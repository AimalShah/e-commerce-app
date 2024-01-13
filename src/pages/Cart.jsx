import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import ProductCard from '../components/ProductCard'


function Cart() {
    const {items} = useContext(CartContext) 
    const [sameItems , setSameItems] = useState(1)

    console.log(items[0])
  return (
    <div className='p-2'>
        Items in Cart : {items.length}
      {
        items.map((product) => (
      <div className='container mx-auto my-2 flex items-center  p-4 border border-zinc-900 justify-between gap-4 font-poppins'>
        <div className='w-12'>
          <img src={product.image} alt="" />
        </div>
        <div className='text-xs'>
          {product.title}
        </div>
        <div className='text-sm'>
          {product.price}
        </div>
        <div className='flex items-center gap-5 border border-gray-900 hover-text-white'>
          <button className='border block p-2 hover:bg-zinc-900 hover:text-white'>
            -
          </button>
          {sameItems}
          <button  className='border block p-2 hover:bg-zinc-900 hover:text-white'>
            +
          </button>
        </div>
      </div>  
        ))
      }
    </div>
  )
}

export default Cart
