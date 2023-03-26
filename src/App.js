import React from "react";
import CreateUpdateForm from "./Components/CreateUpdateForm";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./Components/NavMenu";
import FullScreenLoader from "./Components/FullScreen-Loader";

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
      <FullScreenLoader/>
    </>
  );
};

export default App;
