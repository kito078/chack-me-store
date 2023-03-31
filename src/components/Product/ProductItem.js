import React, { useContext } from "react";
import "./ProductItem.css";
import { Button, Row, Col, Input, Form, Label } from "reactstrap";
import { CartContext } from "../../cart-context";

function ProductItem(props) {
  const { id, name, price, img, title, stars, bage } = props.data;

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  console.log(cart.items);

  return (
    <Col className="productItem text-center mt-5">
      <div className="productItem__bage">{bage}</div>
      <div className="productItem__header d-flex align-items-center justify-content-center">
        <img src={img} alt="" />
        {/* <h2>{name}</h2> */}
      </div>
      <div className="productItem__body mt-5  mx-3 text-start ">
        <div className="mb-4">
          <p className="mb-0">{title}</p>
          <div className="productItem__star mt-0 mb-3">
            <span>{stars}</span>
            <span>{stars}</span>
            <span>{stars}</span>
            <span>{stars}</span>
            <span>{stars}</span>
          </div>
          <h5 className="productItem__price ">
            <span className="price__main">{`$${price}`}</span>{" "}
            <del className="price__del ms-4">${price}</del>
          </h5>
        </div>
        <div>
          {productQuantity > 0 ? (
            <>
              In Cart: {productQuantity}
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
              {/* <Button
                variant="danger"
                onClick={() => cart.deleteFromCart(id)}
                className="my-2"
              >
                Remove from cart
              </Button> */}
            </>
          ) : (
            //{" "}
            <Button variant="primary" onClick={() => cart.addOneToCart(id)}>
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;
