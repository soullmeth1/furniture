import { Avatar } from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import "./FurnitureSet.scss";

function FurnitureSet() {
  const set = useRef();
  const created = useRef();
  const desc = useRef();

  useEffect(() => {
    function anim() {
      let measure =
        document.scrollingElement.scrollTop +
        document.scrollingElement.clientHeight;
      if (measure > 1300) {
        set.current.animate(
          {
            transform: ["translateX(100%)", "translateX(0px)"],
            opacity: 1,
          },
          {
            duration: 1000,
            pseudoElement: "::after",
            fill: "forwards",
            // composite: "add",
          }
        );
        set.current.animate(
          { transform: ["scale(0)", "scale(1)"] },
          { duration: 1000, pseudoElement: "::before", fill: "forwards" }
        );
        created.current.animate(
          { transform: ["translateX(-100%)", "translateX(0)"], opacity: 1 },
          { duration: 500, fill: "forwards", delay: 500 }
        );
        desc.current.animate(
          { transform: ["translateX(-100%)", "translateX(0)"], opacity: 1 },
          { duration: 500, fill: "forwards", delay: 800 }
        );

        window.removeEventListener("scroll", anim);
      }
    }
    window.addEventListener("scroll", anim);
  }, []);
  return (
    <div className="set" ref={set}>
      <div className="set__describe">
        <div className="created" ref={created}>
          <p>THIS WEEK</p>
          <h1>Complete Furniture Set</h1>
          <p>Crafted by :</p>
          <div className="team">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
        <div className="desc" ref={desc}>
          <h2>Lowie Chair</h2>
          <p>8.9k reviews</p>
          <h4>Dimension : 60cm x 50cm x 30xm Comfy stainless-steel product.</h4>
          <h2>
            $90<span>.00</span>
          </h2>
          <div className="submit">
            <button>BUY</button>
            <AddShoppingCartOutlined />
          </div>
          <a href="#">See Collections</a>
        </div>
      </div>
    </div>
  );
}

export default FurnitureSet;
