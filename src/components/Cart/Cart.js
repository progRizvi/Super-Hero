import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;

  const total = cart.reduce((prev, person) => prev + person.price, 0);

  return (
    <div>
      <p className="total-price">
        Total Price: <strong>${total.toFixed(2)}</strong>
      </p>
      {cart.map((name) => (
        <div className="individual-name">{name.full_name}</div>
      ))}
      {cart.length > 0 ? (
        <button className="checkout-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> Check Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
