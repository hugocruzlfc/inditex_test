import React from "react";
import useProducts from "../../hooks/useProducts";
import { Loader } from "../Loader";
import { ProductItem } from "../ProductItem";

export default function ProductList() {
  const { products, loading } = useProducts();

  return (
    <>
      {!loading ? (
        <div className="flex flex-row gap-3 flex-wrap">
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
