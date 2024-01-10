import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp , faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function Shop() {
  const {data , loading , error} = useFetch("https://fakestoreapi.com/products")
  const [trueFilter , setTrueFilter] = useState(false)
  const [filter , setFilter] = useState([])
  const [isMenuOpen , setIsOpenMenu] = useState(false)

  useEffect(() => {
    if(!trueFilter){
      filterByCategory("All")
    }
  })
  const filterByCategory = (category = "All") => {
    if(!loading){
    if(category === "All"){
      setFilter(data)
    } else {
      setTrueFilter(true)
      const filtered = data.filter((product) => product.category === category)
      setFilter(filtered)
    }
    }
    return filter;
  }
  const categories =   [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]
  return (
<div className="">
      <div className="bg-light-blue">
        <div className="container mx-auto p-4">
          <button 
          onClick={() => isMenuOpen ? setIsOpenMenu(false) : setIsOpenMenu(true)}
          className="border border-zinc-600 p-2 flex gap-2 items-center mb-6"
          >
          Categories 
          {
            isMenuOpen ? <FontAwesomeIcon icon={faAngleUp} />
            : <FontAwesomeIcon icon={faAngleDown} />
          }
          </button>
         <div>  
        {
          isMenuOpen ?
          categories.map((category) => (
            <button 
            className="block p-2 border border-zinc-600 w-full hover:bg-zinc-600 Hover:text-zinc-600" 
            onClick={() => filterByCategory(category)}
            key={category}>
              {category}
            </button>
              )) :
              <div></div>
            }
         </div> 
        </div>
      </div>
    <div className="flex flex-wrap items-center justify-center min-h-screen">
        {
          loading ? <div>Loading....</div> :
          filter.map((product) => (
            <ProductCard 
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
