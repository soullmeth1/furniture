import React, { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductsView from "./components/ProductsView";

function App() {
  const app = useRef();

  useEffect(() => {
    app.current.animate(
      { transform: ["scale(0)", "scale(1)"], composite: "add" },
      { duration: 1000, pseudoElement: "::after" }
    );

    function scroll(e) {
      console.log(window.scrollY);
      console.log(document.scrollingElement.scrollTop);
      console.log(document.scrollingElement.clientHeight);
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="App" ref={app}>
      {/* Nav */}
      <Nav />

      {/* Header */}
      <Header />

      {/* Products View */}
      <ProductsView />

      {/* Set Furniture */}

      {/* Featured */}

      {/* Banner Subscribe */}

      {/* Footer */}
    </div>
  );
}

export default App;
