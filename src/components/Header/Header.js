import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <h1>Charity event</h1>
          <p className="header-para">
            The purpose of this event of raising money for charity and
            non-profit.
          </p>
          <h3 className="header-h3">Total Budget is : $500 Million</h3>
        </div>
        <h2 className="event-speaker">Event Speakers</h2>
      </header>
    </>
  );
};

export default Header;
