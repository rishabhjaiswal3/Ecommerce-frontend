import { Route, Routes } from "react-router-dom";

import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Home from "./customer/pages/HomePage/Home";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product.jsx";
import { BrowserRouter } from "react-router-dom";
import Cart from "./customer/components/Cart/Cart.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import CustomerRouters from "./Routers/CustomerRouters.jsx";

function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
