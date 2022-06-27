import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__promo">15% Free Shipping Now</div>
      <div className="header__content">
        <div className="header__content__socials">
          <a href="#www">
            <AiOutlineFacebook className="socials__icon" />
          </a>
          <a href="#www">
            <AiOutlineInstagram className="socials__icon" />
          </a>
          <a href="#www">
            <AiOutlineTwitter className="socials__icon" />
          </a>
        </div>
        <div className="header__content__quick-links">
          <a href="#www"> NEWSLETTER</a>
          <a href="#www"> CONTACT</a>
          <a href="#www"> FAQS</a>
          <a href="#www"> HELP</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
