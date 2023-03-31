import React from "react";
import { useContext } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import { CartContext } from "../../cart-context";

import "./Cart.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal-one cart__header text-center pt-5">
        <ul className="cart__list">
          {productsCount > 0 ? (
            <>
              {cart.items.map((currentProduct, idx) => (
                <CartItem
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartItem>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase items!</Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </ul>
        {/* <Row className="d-flex">
          <Col>
            <h3 className="cart-price">4353</h3>
          </Col>
          <Col>
            <h3>Total Amount</h3>
          </Col>
        </Row> */}
        {/* <Row>
          <Col></Col>
          <Col>
            <div className="d-flex justify-content-end">
              <Button
                onClick={props.onClose}
                className="btn-button rounded-pill px-5 py-2"
                color="primary"
              >
                close
              </Button>

              <Button
                className="btn-button rounded-pill px-5 py-2"
                color="primary"
              >
                Order
              </Button>
            </div>
          </Col>
        </Row> */}
      </div>
    </div>
  );
}

export default Cart;
