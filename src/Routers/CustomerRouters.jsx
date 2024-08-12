import React from "react";
import Home from "../customer/pages/HomePage/Home";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import { Routes, Route } from "react-router-dom";
import Footer from "../customer/components/Footer/Footer";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>

      <Routes>
      <Route path="/signup" element={<Home />}></Route>
      <Route path="/login" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>

      {/* <Order/> */}
      {/* <OrderDetails /> */}
    </div>
  );
};

export default CustomerRouters;
