import useProducts from "../../hooks/useProducts";
import { ProductItem } from "../ProductItem";

export default function ProductList() {
  const { products } = useProducts();

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {products.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}
