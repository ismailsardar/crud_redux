import React from "react";
import CreateUpdateForm from "./Components/CreateUpdateForm";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./Components/NavMenu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create" element={<CreateUpdateForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
