import React, { useContext } from "react";
import "./ProductItem.css";
import { Button, Row, Col, Input, Form, Label } from "reactstrap";
import { Link } from "react-router-dom";

import CartContext from "../../store/cart-context";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);

  const { id, name, price, img, title, stars, bage } = props.data;
  const newPrice = `$${price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: newPrice,
    });
    console.log(newPrice);
  };

  return (
    <Col>
      <Link to="/details" className="my-link">
        <div className="productItem text-center mt-5">
          <div className="productItem__bage">{bage}</div>
          <div className="productItem__header d-flex align-items-center justify-content-center">
            <img src={img} alt="" />
            {/* <h2>{name}</h2> */}
          </div>
          <div className="productItem__body mt-5  mx-3 text-start ">
            <div className="mb-4">
              <h5 className="productItem__title mb-3">{title}</h5>
              <h5 className="productItem__price mb-3 ">
                <span className="price__main">{`$${newPrice}`}</span>{" "}
                <del className="price__del ms-4">${newPrice}</del>
              </h5>
              <div className="productItem__star mt-0 mb-3">
                <span>{stars}</span>
                <span>{stars}</span>
                <span>{stars}</span>
                <span>{stars}</span>
                <span>{stars}</span>
              </div>
            </div>
            <div>
              {/* <ProductItemForm onAddToCart={addItemToCartHandler} /> */}
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default ProductItem;
