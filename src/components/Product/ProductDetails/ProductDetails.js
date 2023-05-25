import React, { useContext, useEffect, useState } from "react";
import ImageOne from "../../../images/a1.jpg";
import "./ProductDetails.css";
import { Button, Row, Col, ButtonGroup } from "reactstrap";
import ProductDetailForm from "./ProductDetailForm";
import CartContext from "../../../store/cart-context";
import { Link } from "react-router-dom";

function ProductInfo({ product }) {
  const [text, setText] = useState({ title: "", desc: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setText({
      title: "Lorem, ipsum dolor Lorem ipsum dolor sit, amet",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum",
    });
  };
  const handleClickOne = () => {
    setText({
      title: "Lorem, ipsum dolor Lorem ipsum dolor sit, amet",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum",
    });
  };
  const handleClickTwo = () => {
    setText({
      title: "Lorem, ipsum dolor Lorem ipsum dolor sit, amet",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum",
    });
  };

  const cartCtx = useContext(CartContext);

  const price = `$${
    cartCtx.products.product && cartCtx.products.product.price.toFixed(2)
  }`;

  const listItems = Object.keys(cartCtx.products);
  const length = listItems.length;

  const lengthList = length > 0;
  console.log(length);

  const addItemHandler = (amount) => {
    cartCtx.addItem({
      id: cartCtx.products.product.id,
      amount: amount,
      price: cartCtx.products.product.price,
      title: cartCtx.products.product.title,
      name: cartCtx.products.product.name,
      img: cartCtx.products.product.img,
      description: cartCtx.products.product.description,
    });
  };

  return (
    <div>
      {lengthList && (
        <div>
          <div className="container product__showcase ps-5 mt-5 py-5">
            <h2>Products</h2>
            <h3 className="mt-4">Home // Single Product</h3>
          </div>
          <div className="container productInfo mt-5">
            <Row className="productInfo__card mx-3 mx-md-0">
              <Col md className="productInfo__image">
                <div className="productDetails__badge">
                  <h5>36%</h5>
                  <h5>OFF</h5>
                </div>
                <img
                  src={cartCtx.products.product && cartCtx.products.product.img}
                  alt=""
                />
              </Col>
              <Col md className="productInfo__content mt-5 pt-md-4 ms-lg-3">
                <div>
                  <h2 className="mt-5  mt-lg-3 mb-lg-4">
                    {cartCtx.products.product && cartCtx.products.product.name}
                  </h2>
                  <h3 className="product__price my-3 mb-4 mt-lg-4 pt-4 pt-md-0">
                    {price}
                  </h3>
                  <div className="productItem__star mt-0 mb-3">
                    <span>
                      {cartCtx.products.product &&
                        cartCtx.products.product.stars}
                    </span>
                    <span>
                      {cartCtx.products.product &&
                        cartCtx.products.product.stars}
                    </span>
                    <span>
                      {cartCtx.products.product &&
                        cartCtx.products.product.stars}
                    </span>
                    <span>
                      {cartCtx.products.product &&
                        cartCtx.products.product.stars}
                    </span>
                    <span>
                      {cartCtx.products.product &&
                        cartCtx.products.product.stars}
                    </span>
                  </div>
                  <p className="product__para mt-4 mb-5 mb-md-0">
                    {cartCtx.products.product &&
                      cartCtx.products.product.description}
                  </p>
                </div>
                <ProductDetailForm onAddToCart={addItemHandler} />
              </Col>
            </Row>
          </div>
          <div className="container productInfo__grp my-5 py-5">
            <ButtonGroup className="d-flex flex-column flex-lg-row mx-4">
              <div>
                <Button className="grp-btn-one my-2 me-3" onClick={handleClick}>
                  Description
                </Button>
              </div>
              <div>
                <Button className="grp-btn my-2 me-3" onClick={handleClickOne}>
                  Additional Information
                </Button>
              </div>
              <div>
                <Button className="grp-btn my-2" onClick={handleClickTwo}>
                  Reviews (2)
                </Button>
              </div>
            </ButtonGroup>
            {/* display text.title and text.desc */}
            <div className="btn-info mt-5 mx-4">
              <h4 className="mb-4">{text.title}</h4>
              <p className="">{text.desc}</p>
            </div>
          </div>
        </div>
      )}

      {!lengthList && (
        <div className="details__none text-center mx-3 ">
          <h3 className="mb-5">Check Out Our Best Offers</h3>
          <Link to="/">
            <Button
              className="btn-button rounded-pill px-5 py-2 mb-5 mb-lg-0"
              color="primary"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
