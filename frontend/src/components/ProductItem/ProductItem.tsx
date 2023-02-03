import React from "react";
import { Product } from "../../types";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {

  return (
    <div className="m-5 mb-5" >
      <img
        src={product.url}
        alt={product.name}
      />
      <div className="flex flex-wrap gap-5">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
