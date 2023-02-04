import { useState, useEffect } from "react";
import { Product } from "../types";
import { getProducts } from "../services";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    getProducts().then((response) => {
      setProducts(response);
      setLoading(false)
    });
  }, []);

  return { products, setProducts,loading };
}
