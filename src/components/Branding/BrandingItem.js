import React from "react";
import "./BrandingItem.css";
import { Button, Row, Col } from "reactstrap";

function BrandingItem(props) {
  return (
    <Col lg className="brandingItem ">
      <div className="brandingItem__header">
        <div className="brand-page ">
          <div>
            <h5>{props.brand}</h5>
          </div>
        </div>
        <img src={props.img} alt="" />
      </div>
      <div className="brandingItem__body">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </Col>
  );
}

export default BrandingItem;
