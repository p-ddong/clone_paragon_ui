import React, { useEffect, useState } from "react";
import Sales from "./sales";
import "./styles.sass";
import logo from "../../assets/icon/paragon_logo.svg";
import { LuChevronDown } from "react-icons/lu";
import classNames from "classnames";

import {
  LuShoppingCart,
  LuCircleUserRound,
  LuSearch,
  LuMenu,
} from "react-icons/lu";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 74) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Sales />
      <div className={classNames({ "nav-air": isSticky })}/>
      <div className={classNames("navbar", { "sticky": isSticky })}>
        <div className="navbar-cointainer">
          <div className="funtion-hidden">
            <LuMenu />
            <LuSearch />
          </div>

          <div className="logo">
            <img src={logo} alt="Paragon Logo" className="logo-img" />
          </div>

          <div className="menu">
            <ul>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Collections <LuChevronDown/></li>
              <li>Shop <LuChevronDown/></li>
              <li>SculptSeam®</li>
              <li>Fabrics <LuChevronDown/></li>
              <li>Gift Guide</li>
              <li>Holiday Sale</li>
            </ul>
          </div>

          <div className="funtion">
            <LuCircleUserRound />
            <LuSearch className="LuSearch" />
            <LuShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
