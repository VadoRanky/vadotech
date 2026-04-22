import React from "react";
import snap from "./assets/snap.png";

const Header = () => {
  function click() {
    alert("Welcome Kayode");
  }
  return (
    <div>
      <header>
        <div>
          <h1 className="heading-1 text-light">
            Welcome to Vado Technology & Gadgets
          </h1>
          <p className="heading-p text-light ">
            your source for the latest Tech & Smart Gadgets
          </p>
          <button onClick={click}>Shop Now</button>
          <button className="btn-1">Explore Service</button>
        </div>
        <div className="image-container">
          <img src={snap} alt="" className="first-image" />
          <img src={snap} alt="" className="second-image" />
        </div>
      </header>
    </div>
  );
};

export default Header;
