import "./styles.css";

import { Routes, Link, Route } from "react-router-dom";

import { ProductDetail, Cart, Home, Products, WishList } from "./pages/index";
export default function App() {
  return (
    <div className="App">
      <Link to="/productDetail">Prod Detail</Link> {"|"}
      <Link to="/Cart">Cart Detail</Link> {"|"}
      <Link to="/Home">Home</Link> {"|"}
      <Link to="/products">Products</Link> {"|"}
      <Link to="/WishList">WishList</Link>
      <Routes>
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </div>
  );
}
