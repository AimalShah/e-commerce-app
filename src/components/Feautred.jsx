import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import ProductCard from "./ProductCard"

export default function Feautred({name}) {
 
  const {data , loading ,  error} = useFetch("https://fakestoreapi.com/products/category/men's clothing")
  

  if(error) return <div>Error</div>
  
  console.log("DATA : " + data.data)
  return (
<div className="container mx-auto flex flex-col gap-16 p-4">
    <div className="text-5xl font-heading text-center md:text-5xl lg:text-6xl">
      {name}
    </div>
    <div className="flex flex-wrap gap-4 justify-center items-center">
    
       {
        loading ? <div>Loading...</div> :
          data.map((product) => (
              <ProductCard 
              link={`shop/product/${product.id}`}
              description={product.description}
              id={product.id}
              key={product.id}
              title={product.title} 
              image={product.image}
              price={product.price}
              />
              )
              )
            } 
            
    </div>
</div>
  )
}
