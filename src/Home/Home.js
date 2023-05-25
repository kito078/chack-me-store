import React from "react";
import Banner from "../components/Banner/Banner";
import Feature2 from "../components/Feature/Feature";
import Easy from "../components/Easy/Easy";
import FeatureOne from "../components/FeatureOne/FeatureOne";
import Product from "../components/Product/Product";
import Branding from "../components/Branding/Branding";
import Newsletter from "../components/Newsletter/Newsletter";
import Contact from "../components/Contact/Contact";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <div>
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
        <div className="testimonial__text text-center my-0                                                                         my-lg-2 py-0 py-lg-5">
          <h5 className="mb-5">OUR TESTIMONIAL</h5>
          <h2>Our Global Students Say It Best</h2>
        </div>
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;
