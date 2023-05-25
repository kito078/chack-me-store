import React, { useEffect } from "react";
import "./BrandingItem.css";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function BrandingItem(props) {
  return (
    <Link to="/blog" className="my-link">
      <div lg className="brandingItem ">
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
      </div>
    </Link>
  );
}

export default BrandingItem;
