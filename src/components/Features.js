import { AddShoppingCart } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import "./Features.scss";
import lamp1 from "../assets/lamp1.png";
import lamp2 from "../assets/lamp2.png";
import lamp from "../assets/lamp.png";

function Features() {
  const list = useRef();
  const show = useRef();
  useEffect(() => {
    console.log([list.current]);
    function aniim() {
      let scrollCount =
        document.scrollingElement.scrollTop +
        document.scrollingElement.clientHeight;
      if (scrollCount > 2300) {
        list.current.childNodes[0].animate(
          {
            opacity: [0, 1],
            transform: ["translateY(-100px)", "translateY(0)"],
          },
          { duration: 500, fill: "forwards", composite: "add" }
        );
        list.current.childNodes[1].childNodes.forEach((val, i) => {
          val.animate(
            {
              opacity: [0, 1],
              transform: ["translateX(-100%)", "translateX(0)"],
            },
            {
              duration: 300 + 100 * i,
              fill: "forwards",
              delay: 300,
            }
          );
        });
        show.current.childNodes.forEach((va, i) => {
          va.animate(
            {
              opacity: [0, 1],
              transform: ["scale(0)", "scale(1)"],
            },
            {
              duration: 500 + 500 * i,
              fill: "forwards",
              easing: "ease-out",
              delay: 500 + 300 * i,
            }
          );
        });
        setTimeout(() => {
          window.removeEventListener("scroll", aniim);
        }, 0);
      }
    }

    window.addEventListener("scroll", aniim);
  }, []);
  return (
    <section>
      <div className="feature">
        <div className="feature__list" ref={list}>
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
        <div className="feature__show" ref={show}>
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
