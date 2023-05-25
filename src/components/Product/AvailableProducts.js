import React from "react";
import ProductItem from "./ProductItem";
import { Button, Row, Col } from "reactstrap";
import { PRODUCTS } from "./newItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function AvailableProducts() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.products);

  return (
    <Row className="align-items-center justify-content-center text-center mx-2">
      {PRODUCTS.map((product) => (
        <Col onClick={() => cartCtx.receiveItem(product)}>
          <ProductItem key={product.id} data={product} />
        </Col>
      ))}
    </Row>
  );
}

export default AvailableProducts;
