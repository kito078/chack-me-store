import React, { useContext } from "react";
import First from "../../images/q1.webp";
import Second from "../../images/Q2.webp";
import Third from "../../images/Q3.webp";
import Third2 from "../../images/p1.webp";
import Third3 from "../../images/p3.webp";
import Third4 from "../../images/p2.webp";

import BrandingItem from "./BrandingItem";
import { Button, Row, Col } from "reactstrap";
import CartContext from "../../store/cart-context";

const newBrand = [
  {
    id: 1,
    img: Third,
    img1: Third2,
    title: "Special Offers",
    profile: "Emily Johnson",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "MEDICAL",
  },
  {
    id: 2,
    img: Second,
    img1: Third3,
    profile: "Benjamin Martinez",
    title: "New Operating Suites",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "SANITIZER",
  },
  {
    id: 3,
    img: Third,
    img1: Third4,
    profile: "Sophia Anderson",
    title: "We Are Here For You",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "MEDICAL",
  },
];

function Branding() {
  const cartCtx = useContext(CartContext);

  const brandItems = newBrand.map((item) => (
    <Col onClick={() => cartCtx.blogItem(item)}>
      <BrandingItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        brand={item.brand}
      />
    </Col>
  ));
  return (
    <Row className="align-items-center justify-content-center">
      {brandItems}
    </Row>
  );
}

export default Branding;
