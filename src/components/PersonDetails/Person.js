import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./person.css";

const Person = (props) => {
  const { full_name, email, img, phone_number, price, title, company } =
    props.person;
  return (
    <div className="person-info">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h3>{full_name}</h3>
        <h4>{title}</h4>
        <h5>Company: {company}</h5>
        <h5>Email: {email}</h5>
        <h5>Phone: {phone_number}</h5>
        <h5>Fee: ${price}</h5>
        <button
          className="person-btn"
          onClick={() => props.handleCart(props.person)}
        >
          <FontAwesomeIcon icon={faCartArrowDown} /> Book Now
        </button>
      </div>
    </div>
  );
};

export default Person;
