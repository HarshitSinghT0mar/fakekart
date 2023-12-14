import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import { FilterProvider } from "./contexts/FilterContext.jsx";
import Home from "./Pages/home/Home.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import CartPage from "./Pages/Cart/CartPage.jsx";
import Products from "./components/Products/Products.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="products" element={<Home />} />
      <Route path="products/:id" element={<SingleProduct />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ProductProvider>
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>
);
