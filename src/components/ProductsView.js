import React, { useEffect, useRef } from "react";
import "./ProductsView.scss";
import kursi from "../assets/chair1.png";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

function ProductsView() {
  const el = useRef();

  useEffect(() => {
    function scroll(e) {
      // console.log(e);
      // console.log(el);
      if (
        document.scrollingElement.scrollTop +
          document.scrollingElement.clientHeight >
        850
      ) {
        el.current.classList.add("show");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="view" ref={el}>
      <div className="view__product">
        <img src={kursi} alt="" />
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="view__details">
        <div className="info">
          <h4>NEW ARRIVAL</h4>
          <h1>Scott Chair</h1>
          <p>3.5k reviews</p>
          <h1>
            $413<span>.00</span>
          </h1>
        </div>
        <div className="detail">
          <p>
            This is made in kenya within the best stuff we have. It will make
            you feel comfort and reduce your anxiety.
          </p>
          <a href="#">See More</a>
        </div>
        <div className="submit">
          <button>BUY NOW</button>
          <button style={{ display: "flex", alignItems: "center" }}>
            <AddShoppingCartOutlinedIcon
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />{" "}
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
