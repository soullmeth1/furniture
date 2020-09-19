import React, { useEffect, useRef } from "react";
import "./Header.scss";
import chair from "../assets/chair1.png";

function Header() {
  const el = useRef();
  useEffect(() => {
    el.current.animate(
      {
        transform: ["scale(0)", "scale(1)"],
        opacity: [0, 1],
      },
      {
        duration: 500,
      }
    );
  }, []);
  return (
    <div className="header" ref={el}>
      <div className="header__left">
        <h1>
          Good Living Better <span>Live</span>
        </h1>
        <p>Find your way to the good living with our furniture.</p>
        <form>
          <input type="text" placeholder="Office chair" />
          <button>Search</button>
        </form>
        <div>
          <div className="header__totals">
            <h2>419</h2>
            <p>Total Products</p>
          </div>
          <div className="header__totals">
            <h2>102</h2>
            <p>Crafters</p>
          </div>
          <div className="header__totals">
            <h2>5k</h2>
            <p>Relations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
