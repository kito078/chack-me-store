import React from "react";
import { Button, Row, Col } from "reactstrap";
import Meck from "../../images/meck.jpg";
import "./Banner.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPhotopea } from "react-icons/si";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="mx-3 ">
      <Row className="banner-container pt-5">
        <Row className="banner align-items-center justify-content-center text-center text-lg-start">
          <Col lg className="banner__header">
            <img src={Meck} alt="" />
            <div className="one-icon">
              <MdAddAPhoto />
            </div>
            <div className="two-icon">
              <SiAdobephotoshop />
            </div>
            <div className="three-icon">
              <SiPhotopea />
            </div>
          </Col>
          <Col lg className="banner__content">
            <h5 className="banner__hello mt-5 ms-lg-2">Hello, I'm</h5>
            <h1 className="banner__name py-2"> Amelia Montgome</h1>
            <h5 className="banner__para my-4 ">
              I <span className="banner-sci">sell and buy products</span> from
              JHB <span className="banner-co">market place</span>
            </h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              sed repudiandae porro impedit perspiciatis inventore id.
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-5">
              <div>
                <Link to="/about">
                  <Button
                    className="btn-button rounded-pill px-5 py-2 mb-5 mb-lg-0"
                    color="primary"
                  >
                    About Me
                  </Button>
                </Link>
              </div>
              <div className="banner__icon d-flex mb-5 mb-lg-0">
                <div className="b-icon">
                  <FaFacebookF />
                </div>
                <div className="b-icon">
                  <FaTwitter />
                </div>
                <div className="b-icon">
                  <FaLinkedinIn />
                </div>
                <div className="b-icon ">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Banner;
