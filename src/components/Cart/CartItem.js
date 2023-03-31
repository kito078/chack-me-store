import React, { useContext } from "react";
import { Button, Row, Col } from "reactstrap";
import CartImage from "../../images/01.jpg";
import "./CartItem.css";
import { CartContext } from "../../cart-context";
import { getProductData } from "../Product/newItem";

function CartItem(props) {
  //const product = props.product;
  const cart = useContext(CartContext);
  //const productQuantity = cart.getProductQuantity(id);

  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  console.log(cart.items);

  return (
    <li className="cartItem">
      <Row className="cartItem__row align-items-center justify-content-center text-center">
        <Col lg className="cartItem__header">
          <img src={productData.img} alt="" />
          <h5> </h5>
        </Col>
        <Col lg className="cartItem__body my-5 py-5 py-0 my-lg-0 text-start">
          <h3 className="cartItem__title">{productData.name}.</h3>
          <div className="d-flex align-items-center mb-4">
            <div className="cartItem-icon">
              <span>{productData.stars}</span>
              <span>{productData.stars}</span>
              <span>{productData.stars}</span>
              <span>{productData.stars}</span>
              <span>{productData.stars}</span>
            </div>
            <span className="cartItem-review ms-4 mt-1">(113)Reviews</span>
          </div>
          <span className="cartItem-stock-main">
            Availability:<span className="cartItem-stock">In Stock</span>
          </span>
          <p className="cartItem__para mt-4">{productData.description}</p>
          <h5 className="cartItem__price ">
            <span className="curtItem__price__main">{productData.price}</span>{" "}
            <del className="price__del ms-4">$65656</del>
          </h5>
        </Col>
      </Row>
    </li>
  );
}

export default CartItem;
