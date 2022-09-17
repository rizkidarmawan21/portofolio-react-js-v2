import React from "react";
import "./AsideBar.css";
import "../../../App.css";
import { Home } from "../Home/Home";
import { Link } from "react-router-dom";

export const AsideBar = () => {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>ByMe</span>
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <Link to={{ pathname: "/" }} className="item-nav">
            <i className="fa fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to={"about"} className="item-nav section-control" name="about">
            <i className="fa fa-user"></i>About
          </Link>
        </li>
        <li>
          <Link
            to={"service"}
            className="item-nav section-control"
            name="services"
          >
            <i className="fa fa-list"></i>Services
          </Link>
        </li>
        <li>
          <Link to={"porto"}
            className="item-nav section-control"
            name="portfolio"
          >
            <i className="fa fa-briefcase"></i>Portfolio
          </Link>
        </li>
        <li>
          <Link to={"contact"}
            className="item-nav section-control"
            name="contact"
          >
            <i className="fa fa-comments"></i>Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
