import React from "react";
import "./Easy.css";
import All from "../../images/doctor2.jpg";
import { Button, Row, Col } from "reactstrap";
import { BsFillBellSlashFill } from "react-icons/bs";

function Easy() {
  return (
    <div className="easy mt-5 pt-3 pt-lg-3">
      <div className="container">
        <Row className="easy__section align-items-center justify-items-center mt-5 mt-lg-0  ms-2 ms-lg-0">
          <Col md className="easy__body">
            <h3>Join Now and Earn 5% On Every Order</h3>
            <div className="d-flex  ">
              <span className="mt-4">$350.000 </span>
              <span className="mt-4 ms-4">
                <del>$405.454</del>
              </span>
            </div>
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
