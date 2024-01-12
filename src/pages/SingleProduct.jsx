import { useContext , useState } from "react"
import { useParams } from "react-router"
import CartContext from "../context/CartContext";

export default function SingleProduct() {
    const {id} = useParams();
    const {singleItem , addToCart} = useContext(CartContext)
  return (
    <div className="lg:flex-row lg:items-center lg:justify-between lg:text-left  container mx-auto flex flex-col text-center items-center gap-2 justify-center">
      <div className="border border-zinc-800 p-2 m-14">
      <div className="h-80 lg:h-full lg:w-full w-64 ">
        <img src={singleItem.image} className="w-full h-full object-contain" alt="" />
      </div>
      </div>
    <div className="flex flex-col justfi-between">
      <div className="text-5xl my-6 font-heading">
        {singleItem.title}
      </div>
      <div className="font-poppins text-lg my-2">
        {singleItem.description}
      </div>
      <div className="text-4xl font-bold my-2">
        {singleItem.price}$
      </div>
      <div>
        <button 
        onClick={() => addToCart(singleItem.title , singleItem.image , singleItem.price , singleItem.id)}
        className="p-4 my-2 text-2xl border border-zinc-800 hover:bg-zinc-800 hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  )
}
