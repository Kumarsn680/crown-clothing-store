import { createContext,useState } from "react";

import { shopData } from "../assets/shop-data";

export const ProductContext =  createContext({
    products : [],
})

export const ProductsProvider = ({children}) =>{
    const [products,setProducts] = useState(shopData)
    const value = {products}
    return(
       < ProductContext.Provider value={value}> { children}</ProductContext.Provider>
    )
}