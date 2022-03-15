import { React } from "react";
import { Link } from "react-router-dom";
import { ProductDetail, Cart, Home, Products, WishList } from "../pages/index";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home" element={<Home />}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Products" element={<Products />}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/ProductDetail" element={<ProductDetail />}>
            Product Details
          </Link>
        </li>
        <li>
          <Link to="/Cart" element={<Cart />}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/WishList" element={<WishList />}>
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
