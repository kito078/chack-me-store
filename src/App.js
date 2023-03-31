import { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Feature2 from "./components/Feature/Feature";
import Masection from "./components/Masection/Masection";
import FeatureOne from "./components/FeatureOne/FeatureOne";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Branding from "./components/Branding/Branding";
import Newsletter from "./components/Newsletter/Newsletter";
import Easy from "./components/Easy/Easy";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import CartProvider from "./cart-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <div className="container"></div>
      <Banner />

      <div className="container">
        <Feature2 />
      </div>
      <Easy />
      <div className="container">
        <FeatureOne />
        <Product />
        <FeatureOne />
        <Branding />
      </div>

      <Newsletter />
      <div className="container">
        <Contact />
        <Testimonial />
      </div>

      <Footer />
    </CartProvider>
  );
}

export default App;
