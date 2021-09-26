import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <h1>
            <FontAwesomeIcon icon={faHandHoldingUsd} /> Charity event{" "}
            <FontAwesomeIcon icon={faHandHoldingUsd} />
          </h1>
          <p className="header-para">
            The purpose of this event of raising money for charity and
            non-profit.
          </p>
          <h3 className="header-h3">Total Fund Rise : $500 Million</h3>
        </div>
        <h2 className="event-speaker">Event Speakers</h2>
      </header>
    </>
  );
};

export default Header;
