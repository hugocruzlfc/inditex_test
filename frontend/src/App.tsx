import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header,TemplateDetails, } from "./components";
import { ProductContextProvider, RowContextProvider } from './context';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndContainer, ProductContainer,TemplateContainer } from './containers';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ProductContextProvider>
        <RowContextProvider>
    <BrowserRouter>
      <Header />
            <Routes>
            <Route
          path="/"
          element={<ProductContainer />}
        />
        <Route
          path="/templates"
          element={<TemplateContainer />}
        />
        <Route
          path="/template/:id"
          element={<TemplateDetails />}
        />
        <Route
          path="/dnd/:rowId"
          element={<DndContainer />}
        />
      </Routes>
          </BrowserRouter>
          </RowContextProvider>
      </ProductContextProvider>
      </DndProvider>
  );
}
export default App;
