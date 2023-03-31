import React from "react";
import { Button, Row, Col } from "reactstrap";
import Meck from "../../images/meck.jpg";
import All from "../../images/04.jpg";
import "./Masection.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPhotopea } from "react-icons/si";

function Banner() {
  return (
    <div>
      <Row className="bann align-items-center justify-content-center text-center  text-lg-start">
        <Col lg className="banner__head">
          <div className="masection__card">
            <h5>
              <span className="count">8K </span>Years of sucess
            </h5>
          </div>
          <div className="masection__card-two">
            <h5>
              <span className="count-two">101+ </span>products sold
            </h5>
          </div>
          <img src={All} alt="" />
        </Col>
        <Col lg className="banner__content masection__content mx-5">
          <h5 className="banner__hello mt-5 mt-lg-3 ms-lg-2 mb-lg-0">
            I'm a Designer
          </h5>
          <h1 className="banner__name-two py-4 pb-5 pb-lg-4">
            I can design anything you want
          </h1>

          <p>
            Hello there! I'm a web designer, and I'm very passionate and
            dedicated to my work. With 20 years experience as a professional web
            developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </p>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-5">
            <div>
              <Button
                className="btn-button rounded-pill mt-5 mt-lg-2 px-5 py-2"
                color="primary"
              >
                About Me
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
