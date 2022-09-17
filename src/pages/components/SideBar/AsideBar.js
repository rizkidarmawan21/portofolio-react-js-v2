import React from "react";
import "./AsideBar.css";
import "../../../App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";

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
      <Routes>
        <ul className="nav">
          <li>
            <Route path='/' component={Home} >
              <a className="item-nav">
                <i className="fa fa-home"></i>Home
              </a>
            </Route>
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
      </Routes>
    </div>
  );
};
