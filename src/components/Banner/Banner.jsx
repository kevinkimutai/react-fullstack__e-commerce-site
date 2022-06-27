import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import Button from "../UI/Button/Button";

import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <NavMenu />
      <div className="banner-section">
        <div className="banner-section__content">
          <h3># Top Quality</h3>
          <h1>Beats Studio 3 Wireless</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button> Buy Now</Button>
        </div>
        <div className="banner-section__hero">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
