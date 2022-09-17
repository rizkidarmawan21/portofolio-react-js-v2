import React from "react";
import "./Home.css";
import avatar from "../../../images/avatar.JPG";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Lailatul Fitriyah</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">web designer</span>
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum a et tenetur, quibusdam nemo sunt voluptatum eius harum repellendus nostrum fuga incidunt! Fuga nulla eum cumque maxime rerum voluptatum velit.
            </p>
            <a href="#contact" className="btn hire-me">
              Hire Me
            </a>
          </div>
          <div className="home-img">

            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
