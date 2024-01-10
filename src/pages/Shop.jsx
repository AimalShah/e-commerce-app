import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"


const filterByCategory = (index = 0 , arr,category)=>{
  if(index < arr.length ){
    const filtered = filterByCategory(index + 1 , arr ,category);
    const product = arr[index];
    if(product.category === category){
      return [product].concat[filtered]
    }
    return filtered
  }
}


export default function Shop() {
  const {data , loading , error} = useFetch("https://fakestoreapi.com/products")
  const categories =   [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]
    

  return (
<div className="" >
      <div className="flex flex-col gap-4">
        {
          categories.map((c) => (

            <button>
              {c}
            </button>
              ))
        }
      </div>
    <div className="flex flex-wrap items-center justify-center min-h-screen">
        {
          data.map((product) => (
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
