import React from "react";
import "./AsideBar.css";
import "../../../App.css";

export const AsideBar = () => {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>A</span>tlas
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#home" className="item-nav">
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#about" className="item-nav section-control" name="about">
            <i className="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#services" className="item-nav section-control" name="services">
            <i className="fa fa-list"></i>Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="item-nav section-control"
            name="portfolio"
          >
            <i className="fa fa-briefcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#contacts" className="item-nav section-control" name="contact">
            <i className="fa fa-comments"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
