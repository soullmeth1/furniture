import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div>
          <h1>
            Subscribe and get <span>10% OFF</span>
          </h1>
          <p>Get 10% discount for all products</p>
          <form className="banner__input">
            <input type="text" placeholder="Your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
