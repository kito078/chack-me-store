import React, { useRef, useState } from "react";
import { Button, Row, Col } from "reactstrap";
import "./ProductDetailForm.css";
import { Link } from "react-router-dom";

function ProductDetailForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(amountInputRef.current.value);
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="productInfo__form d-flex align-items-center mt-lg-5"
    >
      <input
        className="py-2"
        ref={amountInputRef}
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />

      <Button
        type="submit"
        className="btn-button deals-btn rounded-pill px-5 py-2 mb-lg-0 ms-4 mb-lg-0 mt-lg-1 ms-lg-3"
        color="primary"
      >
        Add To Cart
      </Button>
    </form>
  );
}

export default ProductDetailForm;
