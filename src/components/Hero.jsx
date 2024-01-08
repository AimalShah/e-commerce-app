import heroImage from "../assets/hero.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {motion , stagger} from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  const demoVariants = {
    animate: {
      x: "0px",
      opacity:"1",
      transition: {
        type : "spring",
        staggerChildren: 0.8,
        duration : 0.8
      },
    },
  };
  return (
    <>
    <div className="container mx-auto flex flex-col lg:flex-row md:flex-row">
    <motion.div 
    initial={{x:-300 , opacity : 0}}
    variants={demoVariants}
    animate="animate"
    className="my-8 p-4 font-heading lg:w-1/2  ms-12"
    >
        <motion.div 
        className="text-lg font-poppins my-6 p-3"
        initial={{x:-300 , opacity : 0}}
        variants={demoVariants}
        >
            Just Droped
        </motion.div>
        <motion.div 
        className="text-6xl md:text-7xl lg:text-9xl xs:text-4xl mb-9"
        initial={{x:-300 , opacity : 0}}
        variants={demoVariants}
        >
        Fell <br /> Authentic <br /> Peace
        </motion.div>
    <motion.div 
    className="mt-18 font-poppins"
    variants={{}}
    >
      <Link to="shop" >
        <button className="p-3 lg:p-4 text-sm lg:text-lg bg-zinc-950 text-zinc-300 flex items-center gap-3 justify-center ">
            Shop Now
            <FontAwesomeIcon icon={faArrowRight} className="text-md rotate-[-45deg] block "/>
        </button>
      </Link>
    </motion.div>
    </motion.div>
    <motion.div
    initial={{x:800 , opacity:0}}
    animate={{x:0 , opacity:1}}
    transition={{duration:0.8}}
    className="lg:w-1/2 md:w-1/2">
    <img src={heroImage}  className="w-full h-full object-contain"/>
    </motion.div>
    </div>
    </>
  )
}
