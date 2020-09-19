import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import "./Features.scss";
import lamp1 from "../assets/lamp1.png";
import lamp2 from "../assets/lamp2.png";
import lamp from "../assets/lamp.png";

function Features() {
  return (
    <section>
      <div className="feature">
        <div className="feature__list">
          <h1>Featured For You</h1>
          <ul>
            <li>
              <a href="#">Modern Chair</a>
            </li>
            <li>
              <a href="#">Lamp</a>
            </li>
            <li>
              <a href="#">Wardrobe</a>
            </li>
            <li>
              <a href="#">Bed</a>
            </li>
            <li>
              <a href="#">Table</a>
            </li>
          </ul>
        </div>
        <div className="feature__show">
          <div className="card">
            <h2>Fig Lamp</h2>
            <p>4.2k reviews</p>
            <h4>
              Wooden based lamp, 5v ooutputed and have a rounded texture in the
              neck.
            </h4>
            <div className="card__img">
              <img src={lamp1} alt="" />
              <img src={lamp2} alt="" />
            </div>
            <h2>
              $413<span>.00</span>
            </h2>
            <div className="card__btn">
              <button>Buy</button>
              <AddShoppingCart />
              <a href="#">See More</a>
            </div>
          </div>
          <img src={lamp} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
