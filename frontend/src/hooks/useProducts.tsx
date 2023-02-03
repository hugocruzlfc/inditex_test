import { useState, useEffect } from "react";
import { Product } from "../types";
import { getProducts } from "../services";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return { products, setProducts };
}
