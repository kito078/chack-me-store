import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "././images/loading.gif";

import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowPage, setIsShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsShowPage(true);
    }, 2000);
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      {isLoading && (
        <div className="loading">
          <img src={Loading} alt="" />
        </div>
      )}
      {isShowPage && (
        <CartProvider>
          <Router>
            {/* {cartIsShown && <Cart onClose={hideCartHandler} />} */}
            <Navbar onShowCart={showCartHandler} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/Cart"
                element={<Cart onClose={hideCartHandler} />}
              />
              <Route
                path="/details"
                element={<ProductDetails onClose={hideCartHandler} />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      )}
    </div>
  );
}

export default App;
