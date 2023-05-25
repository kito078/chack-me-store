import React from "react";
import "./Easy.css";
import All from "../../images/y2.jpg";
import { Button, Row, Col } from "reactstrap";
import { BsFillBellSlashFill } from "react-icons/bs";

function Easy() {
  return (
    <div className="easy mt-5 pt-3 pt-lg-3">
      <div className="container">
        <Row className="easy__section align-items-center justify-items-center mt-5 mt-lg-0  ms-2 ms-lg-0">
          <Col md className="easy__body text-center">
            <h3 className="easy_veg mb-4 pb-1">Freshness Home Vegetabbles</h3>
            <h3>Now get up to 50% off</h3>
            <Row></Row>
            <Button className="news-btn my-4 mt-5 " color="primary">
              Buy Now
            </Button>
          </Col>
          <Col lg className="easy__header">
            <div className="easy__sale">
              <h5 className="">50%</h5>
              <p>Offer</p>
            </div>
            <img src={All} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Easy;
