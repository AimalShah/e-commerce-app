import { useContext , useState } from "react"  
import CartContext from "../context/CartContext"
import SinglePageContext from "../context/SinglePageContext"
import { Link } from "react-router-dom"

export default function ProductCard({title , image ,price , id , description , link}) {

    const {addToCart , addDetails} = useContext(CartContext)
    
    const handleClick = () => {
        addDetails(title , id , description , price , image)
    }
  return (
    <Link to={link} >
    <div
    id={id}
    className="w-64 hover:bg-gray-300 bg-transparent rounded p-2 flex flex-col gap-4 font-poppins"
    onClick={handleClick}
    >
        <div className="w-full h-40 bg-light-blue rouded;md">
            <img src={image} alt=""  className="w-full h-full p-2 object-contain bg-white"/>
        </div>
        <div className="text-sm font-semibold text-center px-4">
            {title}
        </div>
        <div>
            <div className="font-bold text-center">
                {price}$
            </div>
        </div>
    </div>
    </Link>
  )
}
