import React from "react";
import ProductItem from "./ProductItem";
import { Button, Row, Col } from "reactstrap";
import { PRODUCTS } from "./newItem";

function AvailableProducts() {
  return (
    <Row className="align-items-center justify-content-center text-center mx-2">
      {PRODUCTS.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </Row>
  );
}

export default AvailableProducts;
