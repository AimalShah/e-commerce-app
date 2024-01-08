import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <div className='text-center my-10 px-12 py-20 border border-red-900 my-20 border bg-whitesh flex flex-col justify-center items-center gap-12'>
      <div className='font-heading text-5xl'>
      What do we do
     </div>  
     <p className='font-poppins text-zinc-600 lg:w-1/3 md:w-1/2 '>
        Brisa is a leading edge fashion footware specialist,providing style consious customers with innovative shoes to suit every occasion. We pride ourselves on our unique product range - created by our in-house design team and global brand partnerships,all of which are recognisable by their individuality,design and quality
     </p>
     <div 
    className="my-6 font-poppins"
    >
      <Link to="shop" >
        <button className="p-3 lg:p-4 text-sm bg-zinc-950 text-gray-200 flex items-center gap-3 justify-center ">
            Learn More
            <FontAwesomeIcon icon={faArrowRight} className="text-md rotate-[-45deg] block "/>
        </button>
      </Link>
    </div>
    </div>
  )
}
