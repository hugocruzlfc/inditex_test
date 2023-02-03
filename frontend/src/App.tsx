

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, ProductList, TemplateDetails, Home } from "./components";


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/template/:id"
          element={<TemplateDetails />}
        />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
