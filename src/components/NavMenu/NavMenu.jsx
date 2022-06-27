import React from "react";

import { AiOutlinePhone, AiOutlineFieldTime } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";
import {
  MdComputer,
  MdHeadphones,
  MdSpeaker,
  MdTabletMac,
  MdMenu,
} from "react-icons/md";

import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="navmenu">
      <div className="navmenu__title">
        <MdMenu className="navmenu__icon" />
        <h3>Browse by categories</h3>
      </div>
      <ul className="navmenu__menu-links">
        <li>
          <AiOutlinePhone className="navmenu__icon" /> Phones
        </li>
        <li>
          <MdComputer className="navmenu__icon" /> Laptops
        </li>
        <li>
          <MdTabletMac className="navmenu__icon" /> Tabs
        </li>
        <li>
          <MdHeadphones className="navmenu__icon" /> HeadPhones
        </li>
        <li>
          <MdSpeaker className="navmenu__icon" /> Speakers
        </li>
        <li>
          <AiOutlineFieldTime className="navmenu__icon" /> Smart Watches
        </li>
        <li>
          <GiGamepad className="navmenu__icon" /> Gaming
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
