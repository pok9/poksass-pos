import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "app/store";

import Layout from "./features/ui/Layout";
import Products from "./features/products/Products";
import NewProduct from "./features/products/NewProduct";
import ProductDetails from "./features/products/ProductDetails";
import EditProduct from "./features/products/EditProduct";
import Cart from "./features/cart/Cart";
import Orders from "./features/cart/Orders";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="products" element={<Products />} />
            <Route path="products/new" element={<NewProduct />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="products/:id/edit" element={<EditProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route index element={<Navigate to={"/products"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
