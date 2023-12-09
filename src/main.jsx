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
import Products from "./components/Products/Products.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import { FilterProvider } from "./contexts/FilterContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="products/:id" element={<SingleProduct />} />

      <Route path="" element={<Products />} />
      <Route path="products" element={<Products />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </FilterProvider>
  </React.StrictMode>
);
