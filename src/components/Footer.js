import React from "react";
import "./Footer.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="icons">
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>

        <p>@2020 Furniture. All rights reserved</p>
      </div>
      <div className="footer__right">
        <ul>
          Shop
          <li>
            <a href="#">Chair</a>
          </li>
          <li>
            <a href="#">Table</a>
          </li>
          <li>
            <a href="#">Bed</a>
          </li>
          <a href="#">Privacy policy</a>
        </ul>
        <ul>
          Help
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Payment</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <a href="#">Terms & Conditions</a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
