import React from "react";

import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import Search from "../Search/Search";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <AiOutlineShopping className="logo-icon" />
        <h2>TechStars</h2>
      </div>
      <Search />
      <div className="navbar__user-account">
        <h3>LOGIN/REGISTER</h3>
        <div>
          <AiOutlineHeart className="user-icon" />
          <span>3</span>
        </div>
        <div>
          <AiOutlineShoppingCart className="user-icon" />
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
