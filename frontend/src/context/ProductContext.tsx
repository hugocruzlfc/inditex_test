import React, { createContext, useState, useEffect } from "react";
import { Product,ProductContextType } from "../types";
import { getProducts } from "../services";


const INITIAL_PRODUCT= [{
    name: 'zara',
    price: 100,
    url: '',
    id: '1'
  }]




export const ProductContext = createContext<ProductContextType | null>(null);


interface Props{
    children: React.ReactNode
}



export const ProductContextProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCT);

  useEffect(() => {
    getProducts().then((response) => {
        setProducts(response);
      });
  
  }, []);


  return (
    <ProductContext.Provider
      value={{products,setProducts}}
    >
      {children}
    </ProductContext.Provider>
  );
};
