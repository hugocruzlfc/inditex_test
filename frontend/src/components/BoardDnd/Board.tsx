import { useContext, useEffect, useState } from "react";
import { Row, Product, RowContextType, Routes } from "../../types";
import { useDrop } from "react-dnd";
import { ProductItem } from "../ProductItem";
import { RowContext } from "../../context";
import { BackButton } from "../BackButton";

interface Props {
  row: Row;
  setRow: (row: Row) => void;
  setProducts: (products: Product[]) => void;
  productsStock: Product[];
}

export default function Board({
  row,
  setRow,
  setProducts,
  productsStock,
}: Props) {
  const [selectId, setSelectId] = useState("");
  const [productsRow, setProductsRow] = useState<Product[]>(row.products);
  const { allRows, setAllRows, templateParent } = useContext(
    RowContext
  ) as RowContextType;
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: Product) => toggleId(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const toggleId = (id: string) => {
    setSelectId((prevId) => id);
  };

  useEffect(() => {
    if (selectId !== "" && productsRow.length <= 3) {
      const productInRow = productsRow.find(
        (product) => product.id === selectId
      );
      if (!productInRow) {
        const productList = productsStock.filter(
          (product: Product) => selectId === product.id
        );
        setProductsRow((prevProducts) => [...prevProducts, productList[0]]);
        const updateProductsInStock = productsStock.filter(
          (product) => product.id !== selectId
        );
        setProducts(updateProductsInStock);
        const currentRow = allRows.find((rowItem) => row.id === rowItem.id);
        const rowsFiltered = allRows.filter((rowItem) => row.id !== rowItem.id);
        currentRow!.products = productsRow;
        setAllRows([...rowsFiltered, currentRow!]);
      }
    }
  }, [selectId, productsRow, productsStock, setProducts,allRows,row.id,setAllRows]);

  return (
    <div className="container md mx-auto">
      <h2 className="flex justify-start mt-10 mb-5">
        <BackButton path={`${Routes.TEMPLATE_ITEM}${templateParent}`} />
      </h2>
      <h2 className="flex justify-center mt-10 mb-5">{row.name}</h2>

      <div
        ref={drop}
        className="border-blue-300 w-11/12 h-52 shadow m-2  grid grid-cols-3 overflow-hidden "
      >
        {productsRow?.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <>
        <h2 className="flex justify-center mt-10 mb-5">Products in stock</h2>
        <div className="flex flex-row gap-3 flex-wrap rounded overflow-hidden shadow-lg pl-6">
          {productsStock?.map((product: Product) => (
            <ProductItem
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </>
    </div>
  );
}
