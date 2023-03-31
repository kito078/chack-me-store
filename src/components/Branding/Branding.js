import React from "react";
import First from "../../images/01.jpg";
import Second from "../../images/02.jpg";
import Third from "../../images/03.jpg";
import BrandingItem from "./BrandingItem";
import { Button, Row, Col } from "reactstrap";

const newBrand = [
  {
    img: Third,
    title: "i love coding",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "MEDICAL",
  },
  {
    img: Second,
    title: "i love coding",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "SANITIZER",
  },
  {
    img: Third,
    title: "i love coding",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "MEDICAL",
  },
];

function Branding() {
  const brandItems = newBrand.map((item) => {
    return (
      <BrandingItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        brand={item.brand}
      />
    );
  });
  return (
    <Row className="align-items-center justify-content-center">
      {brandItems}
    </Row>
  );
}

export default Branding;
