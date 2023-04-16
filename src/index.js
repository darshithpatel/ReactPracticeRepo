import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/product/add" element={<AddProduct />}></Route>
        <Route path="/product/edit/:id" element={<AddProduct />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
