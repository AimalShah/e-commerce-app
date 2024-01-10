import { useParams } from "react-router";

export default function Category() {
    const {category} = useParams() 
    const {data , loading ,  error} = useFetch(`https://fakestoreapi.com/products/category/${category}`)
  return (
    <div>
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
