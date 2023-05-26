import React from "react";
import { Button, Row, Col, Card } from "reactstrap";
import "./CartItem.css";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlusCircle, AiTwotoneStar } from "react-icons/ai";
import imageTwo from "../../images/p2.jpg";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function CartItem(props) {
  //const price = props.price && `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  return (
    <Card className="cartItem my-4 mx-3 ">
      <div className="cartItem__container-one d-flex align-items-center justify-content-between">
        <div className="cartItem__container d-flex ">
          <div>
            <div className="cartItem__header me-3">
              <img src={props.img} alt="" />
            </div>
          </div>
          <div className="cart__bottom ms-md-5">
            <div>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div sm className="mt-md-3">
                  <p>{props.name}.</p>
                  <h5 className="cartItem__price">{props.price}</h5>
                  <h5 className="d-none d-md-block">In stock</h5>
                </div>
                <div></div>
              </div>
              <h5 className="d-none d-md-block">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </h5>
              <div className="cartItem__body d-flex">
                <button
                  onClick={props.onRemove}
                  className="delete-btn mt-4 px-4 me-4"
                >
                  delete
                </button>
                <button onClick={props.onAdd} className="delete-btn mt-4 px-4">
                  add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <h5 className="me-5">X {props.amount}</h5>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
