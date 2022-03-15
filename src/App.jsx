import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Component/Navigation";
import { ProductDetail, Cart, Home, Products, WishList } from "./pages/index";
export default function App() {
  return (
    <div className="App">
      <Navigation />
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
