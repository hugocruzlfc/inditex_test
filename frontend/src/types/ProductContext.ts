import { Product } from "./Products";

  export type ProductContextType = {
    products: Product[];
    setProducts: (products: Product[]) => void;
  };