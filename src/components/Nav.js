import React, { useEffect, useRef } from "react";
import "./Nav.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Nav() {
  const logo = useRef();
  const nav = useRef();

  useEffect(() => {
    logo.current.animate(
      {
        transform: ["translateX(-500px)", "translateX(0)"],
      },
      {
        duration: 500,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      }
    );

    function animasi(el) {
      el.forEach((li, i) => {
        li.animate(
          { transform: ["translateY(-100px)", "translateY(0px)"] },
          { duration: 200 * (1 + i) }
        );
      });
    }

    animasi(nav.current.childNodes);
    console.log(nav.current.childNodes);
  }, []);
  return (
    <div className="navbar">
      <h1 className="navbar__logo" ref={logo}>
        Furniture
      </h1>
      <ul className="navbar__nav" ref={nav}>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
      <div className="navbar__option">
        <span>
          <ShoppingCartIcon />
        </span>
        <span>
          <AccountCircleOutlinedIcon />
        </span>
      </div>
    </div>
  );
}

export default Nav;
