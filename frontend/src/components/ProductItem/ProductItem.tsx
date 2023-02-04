import React from 'react'
import { Product } from "../../types";
import { useDrag } from "react-dnd";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: product.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
        <div className="m-5 mb-5 w-20" ref={drag} style={{ border: isDragging ? "1px solid gray" : "0px" }}>
          <img
            src={product.url}
            alt={product.name}
          />
          <div className="flex flex-wrap gap-1 text-xs">
            <p className="text-xs">{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
    
  );
}
