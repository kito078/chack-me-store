import { useContext, useEffect } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

function Cart(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartCtx = useContext(CartContext);

  const cartList = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const listItems = cartCtx.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      title={item.title}
      price={item.price}
      desc={item.description}
      img={item.img}
      amount={item.amount}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <div>
      {cartList && (
        <div className="cart container">
          {listItems}
          <div className="cart__body d-flex justify-content-between justify-content-center">
            <h3 className="my-5 ms-4">{totalAmount}</h3>
            <Button className="order-btn my-4 me-3" color="primary">
              Order Now
            </Button>
          </div>
        </div>
      )}

      {!cartList && (
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

export default Cart;
