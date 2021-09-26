import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Person from "../PersonDetails/Person";
import "./events.css";

const Events = () => {
  const [person, setPerson] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  const handleCart = (person) => {
    const newPerson = [...cart, person];
    setCart(newPerson);
  };
  return (
    <div className="events">
      <div className="person-container">
        {person.map((person) => (
          <Person key={person.id} person={person} handleCart={handleCart} />
        ))}
      </div>
      <div className="cart-container">
        <h4>
          You Have Selected {cart.length} {cart.length > 0 ? "Events" : "Event"}
        </h4>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Events;
