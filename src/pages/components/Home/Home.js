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
              Hello, my name is <span className="name">Luan Hoang</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">web designer</span>
            </h3>
            <p>
              Là một chàng trai đang trên con đường trở thành lập trình viên
              chuyên nghiệp. Luôn cố gắng và mong muốn tốt lên từng ngày để thực
              hiện được ước mơ của mình.
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
