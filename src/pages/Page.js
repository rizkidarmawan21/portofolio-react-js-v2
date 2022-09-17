import React from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contacts/Contact";
import { Home } from "./components/Home/Home";
import { Portofolios } from "./components/Portofolios/Portofolios";
import { Services } from "./components/Services/Services";
import { AsideBar } from "./components/SideBar/AsideBar";

export const Page = () => {
  return (
    <div className="main-container">
      <AsideBar />
      <div className="main-content">
        <Home />
        <About />
        <Services />
        <Portofolios />
        <Contact />
      </div>
    </div>
  );
};
