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
import Home from "./Pages/home/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="products/:id" element={<SingleProduct />} />
      <Route path="products" element={<Home />} />

      <Route path="" element={<Home />} />
      
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
