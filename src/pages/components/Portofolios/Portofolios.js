import React from "react";
import "./Portofolios.css";
import projects1 from "../../../images/Projects/1.png";
import projects2 from "../../../images/Projects/2.png";
import projects3 from "../../../images/Projects/3.png";
import projects4 from "../../../images/Projects/4.png";
import projects5 from "../../../images/Projects/5.png";

export const Portofolios = () => {
  return (
    <section className="portfolio section section-content" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Project :</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects1} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://nike-cv-luanhoang0902.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects2} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://profile-react-pied.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects3} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://tic-toc-toe-neon.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects4} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://color-matching-game-one.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects5} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://portfolio-ui-puce.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={projects2} alt="" />
                <div className="portfolio-demo">
                  <a
                    href="https://profile-react-pied.vercel.app/"
                    className=""
                    target="_blank"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
