import { Avatar } from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import "./FurnitureSet.scss";

function FurnitureSet() {
  return (
    <div className="set">
      <div className="set__describe">
        <div className="created">
          <p>THIS WEEK</p>
          <h1>Complete Furniture Set</h1>
          <p>Crafted by :</p>
          <div className="team">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
        <div className="desc">
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
