import { createContext , useState , useEffect } from "react";
import useFetch from "../hooks/useFetch";

const CartContext = createContext();

export function CartProvider({children})  {
    
    const [items, setItems] = useState([])
    const [data , setData] = useState([])
    const [singleItem , setSingleItem] = useState({})

    const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setData(data);
    }

    useEffect(()=> {

        fetchData();
        
    }, []);

   
    
    const addDetails = (title , id , description , price ,image) => {
        setSingleItem({title , id , description , price , image })
    }
    const addToCart = (title , image  , price  , id) => {
        setItems((prev) => [...prev , {title , image , price , id}])
    }
    return(
        <CartContext.Provider value={{items , addToCart , singleItem , data , addDetails}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;