import { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getRows } from '../../services';
import { useParams } from "react-router-dom";
import { ProductContextType, Row } from "../../types";
import { Board } from "../../components";
import { ProductContext } from "../../context";

function DndContainer() {
  const { rowId } = useParams()
  const {products,setProducts} = useContext(ProductContext) as ProductContextType ;
  const [currentRow, setCurrentRow] = useState<Row>()

  useEffect(() => {
    getRows().then(response=>{
      const rowFiltered = response.filter((row: Row) => row.id === rowId)
      setCurrentRow(prevRow => rowFiltered[0])
    })
  }, [rowId])
  
  return (
    <DndProvider backend={HTML5Backend}>
      {
        currentRow && <Board row={currentRow} productsStock={products} setProducts={setProducts } setRow={ setCurrentRow} />
      }
     
    </DndProvider>
  );
}

export default DndContainer;