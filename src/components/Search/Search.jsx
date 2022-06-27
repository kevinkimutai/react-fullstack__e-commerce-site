import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

import "./Search.css";

const Search = () => {
  return (
    <form className="search">
      <input placeholder="search producs,brands and categories..." />
      <button type="submit">
        <AiOutlineSearch className="search__icon" />
      </button>
    </form>
  );
};

export default Search;
