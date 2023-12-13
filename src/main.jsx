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
import Cart from "./Pages/Cart/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="products/:id" element={<SingleProduct />} />
      <Route path="products" element={<Home />} />
      <Route path="cart" element={<Cart />} />

      <Route path="" element={<Home />} />
      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
    <ProductProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </ProductProvider>
    </FilterProvider>

  </React.StrictMode>
);
