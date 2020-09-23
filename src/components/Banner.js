import React, { useEffect, useRef } from "react";
import "./Banner.scss";

function Banner() {
  const banner = useRef();

  useEffect(() => {
    function animasi() {
      let measure =
        document.scrollingElement.scrollTop +
        document.scrollingElement.clientHeight;
      if (measure > 2900) {
        banner.current.animate(
          {
            opacity: 1,
            filter: ["blur(10px)", "blur(0)"],
          },
          {
            delay: 300,
            duration: 700,
            fill: "forwards",
            easing: "ease",
          }
        );
        setTimeout(() => {
          window.removeEventListener("scroll", animasi);
        }, 0);
      }
    }

    window.addEventListener("scroll", animasi);
  }, []);
  return (
    <div className="banner">
      <div className="banner__container" ref={banner}>
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
