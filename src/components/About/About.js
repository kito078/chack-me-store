import React from "react";
import Amage4 from "../../images/ab.jpg";
import "./About.css";
import Testimonial from "../Testimonial/Testimonial";

function About() {
  return (
    <div className="about">
      <div className="blog-container about__container">
        <div className="blog-container-content">
          <h2 className="mb-4">About Our Company .</h2>
          <h5>Home Blog Details Blog Details Right Sidebar</h5>
        </div>
      </div>
      <div className="about__header text-center mb-5">
        <h5>About</h5>
      </div>
      <div class="container about__body d-flex">
        <div>
          <img src={Amage4} alt="Image Description" />
        </div>
        <div className="about__content text-start">
          <h3 className="mt-5 pt-2 m-md-0 mx-3 mx-md-0">
            Tackle The Challenge Of Delivering Healt
          </h3>
          <p className="text-start mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            cgna.
          </p>
        </div>
      </div>
      <div className="container about__text">
        <div className="text-center">
          <h5>Testimonials</h5>
          <h3 className="mt-4">What Our Client’s Say</h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            perferendis deleniti illum necessitati voluptates ipsum, ratione
            dolorum veritatis minus mollitia placeat
          </p>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}

export default About;
