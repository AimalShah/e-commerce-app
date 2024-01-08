import { useState } from "react"
import {delay, motion} from "framer-motion"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars , faXmark , faCartShopping} from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    const [isMenuOpen , setMenuOpen] = useState(false)
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
                    <li className="hover:bg-light-blue p-2 rounded "> 
                        <Link to="/">
                            Home
                        </Link>
                     </li>
                    <li className="hover:bg-light-blue p-2 rounded">
                        <a href="#">Shop</a>
                    </li>
                    <li className="hover:bg-light-blue p-2 rounded">
                        <a href="#">About</a>
                    </li>
                </nav> 
            </div>
            <div className="font-semibold">
               eSTORE
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
                <p className="bg-light-blue p-2 text-sm rounded-full">
                    0
                </p>
            </div>
            </div>
            
{/* mobile nav */}
            {
                isMenuOpen ?
                <motion.div 
                initial={{y:200 , opacity:0}}
                animate={{y:20 , opacity:1}}
                transition={{type : "just" ,
                 stiffness: 100 ,
                  ease: "linear",
                duration:0.5 }}
                className="absolute h-fit rounded-md right-2 md:right-10 text-center top-6 list-none bg-light-blue p-4 w-40 lg:hidden text-zinc-600">
                <nav className="flex flex-col gap-4 ms-4">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                     </li>
                    <li>
                        <a href="#">Shop</a>
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
