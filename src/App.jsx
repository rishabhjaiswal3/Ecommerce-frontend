import Navigation from './customer/components/Navigation/Navigation.jsx'
import Home from './customer/pages/HomePage/Home';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
function App() {

  return (
    <BrowserRouter>
      <Navigation />
      {/* <Home/> */}
      <ProductDetails />
      {/* <Product/> */}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
