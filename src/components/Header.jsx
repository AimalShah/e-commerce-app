import { useState } from "react"
import {delay, motion} from "framer-motion"
import { Link , NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faXmark , faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import CartContext from "../context/CartContext"



export default function Header() {
const {items} = useContext(CartContext)

const [isMenuOpen , setMenuOpen] = useState(false)
const {item} = useContext(CartContext);

   const toggleMenu = () => {
    if(isMenuOpen === false){
        setMenuOpen(true)
    } else {
        setMenuOpen(false)
    }
   }



  return (
    <div className="bg-white font-poppins font-semobold relative top-0 p-2">
        <div className="container px-4 mx-auto my-6 flex justify-between text-xl">
            <div className="hidden lg:block font-light">
            <nav className="flex list-none gap-4 text-zinc-600">
                        <NavLink to="/"
                        className={({isActive}) => 
                            isActive ? "bg-light-blue rounded" :
                            "hover:bg-light-blue"
                        }
                        >
                    <li className="p-2 rounded"> 
                            Home
                     </li>
                        </NavLink>
                        <NavLink to="/shop"
                        className={({isActive}) => 
                            isActive ? "bg-light-blue rounded" :
                            "hover:bg-light-blue"
                        }
                        >
                    <li className="p-2 rounded"> 
                           Shop
                     </li>
                        </NavLink>
                        <NavLink to="/About"
                        className={({isActive}) => 
                            isActive ? "bg-light-blue rounded" :
                            "hover:bg-light-blue"
                        }
                        >
                    <li className="p-2 rounded"> 
                          About
                     </li>
                 </NavLink>

                </nav> 
            </div>
            <div className="font-semibold">
                <Link to="/" >
               eSTORE
                </Link>
            </div>
            <div className="flex gap-4">
            <div className="cursor-pointer lg:hidden"
            onClick={toggleMenu}>
                {
                    isMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : 
                    <FontAwesomeIcon icon={faBars} /> 
                }
            </div>
            <div className="flex items-center gap-4 font-light text-zinc-600">
                <p className="hidden lg:block">
                    account
                </p>
                    <Link to='/cart'> 
                <p className="bg-light-blue p-2 text-sm rounded-full">
                    {items.length}
                </p>
                    </Link>
            </div>
            </div>
            
{/* mobile nav */}
            {
                isMenuOpen ?
                <motion.div 
                initial={{y:200 , opacity:0}}
                animate={{y:60 , opacity:1}}
                transition={{type : "just" ,
                 stiffness: 100 ,
                  ease: "linear",
                duration:0.5 }}
                className="shadow shadow-white absolute h-fit rounded-md right-2 md:right-10 text-center top-6 list-none bg-light-blue p-4 w-40 lg:hidden text-zinc-600">
                <nav className="flex flex-col gap-4 ms-4">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                     </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </nav> 
                </motion.div>
                : <div className="hidden"></div>
            }
        </div>

    </div>
  )
}
