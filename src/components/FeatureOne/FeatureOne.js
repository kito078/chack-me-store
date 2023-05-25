import React from "react";
import { Button, Row, Col } from "reactstrap";
import "./FeatureOne.css";

function FeatureOne() {
  return (
    <div>
      <Row className="features text-center mt-5 pt-lg-5 pt-5">
        <h5 className="feature__header mb-4 mt-lg-5 pt-lg">Features</h5>
        <h1 className="feature__service mb-4">
          Get Up to 70% Discount <span className="lab">Everyday.</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          impedit ut harum incidunt, pariatur saepe dolor hic expedita sapiente
          enim.
        </p>
      </Row>
    </div>
  );
}

export default FeatureOne;
