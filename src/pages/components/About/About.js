import React from 'react'
import './About.css'

export const About = () => {
  return (
    <section className="about section section-content" id="about">
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row"> 
        <div className="about-content padd-15">
          <div className="row">
            <div className="about-text padd-15">
              <h3>I'm Lailatul Fitriyah and <span>Front-end Developer</span></h3>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptas a cum, amet eos sapiente ipsa doloribus tenetur aspernatur vitae molestiae perspiciatis explicabo quis nemo deleniti sequi fugit animi ut!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                <div className="info-item padd-15">
                  <p>Birthday: <span>12 March 1997</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Age: <span>25</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Github: <span>https://github.com/</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Email: <span>luan.hoang.van.1997@gmail.com</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Degree: <span>Engineers</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Phone: <span>0343151097</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>City: <span>Ha Noi </span></p>
                </div>
                <div className="info-item padd-15">
                  <p>Facebook: <span><a href="https://www.facebook.com/profile.php?id=100029577947626">Ho??ng Lu??n</a></span></p>
                </div>
              </div>
              <div className="row">
                <div className="buttons padd-15">
                  <a href="./files/CV-HoangVanLuan.pdf" className="btn" download="proposed_file_name">Dowload CV</a>
                  <a href="#contact" className="btn hire-me">Hire me</a>
                </div>
              </div>
            </div>
            <div className="skills padd-15">
              <div className="row">
                <div className="skill-item padd-15">
                  <h5>HTML</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '86%'}}></div>
                    <div className="skill-percent">86%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>CSS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '72%'}}></div>
                    <div className="skill-percent">72%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>JS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '58%'}}></div>
                    <div className="skill-percent">58%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>REACT</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '60%'}}></div>
                    <div className="skill-percent">60%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="education padd-15">
              <h3 className="title">Education</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2013 - 2015
                      </h3>
                      <h4 className="timeline-title">
                        Cao An elementary school
                      </h4>
                      <p className="timeline-text">
                        <p> H???c c???p 2 t???i Tr?????ng ti???u h???c Cao An trong 4 n??m</p>
                        <p>C??? 4 n??m ?????u l?? h???c sinh ti??n ti???n.</p>
                        <p>T???t nghi???p b???ng kh?? v?? h???nh ki???m t???t</p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2012 - 2015
                      </h3>
                      <h4 className="timeline-title">
                        Tue Tinh High School
                      </h4>
                      <p className="timeline-text">
                        <p> H???c c???p 3 t???i Tr?????ng THPT Tu??? T??nh trong 3 n??m</p>
                        <p>C??? 3 n??m ?????u l?? h???c sinh ti??n ti???n.</p>
                        <p>T???t nghi???p b???ng kh?? v?? h???nh ki???m t???t</p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2016 - 2022
                      </h3>
                      <h4 className="timeline-title">
                        Hanoi University of Science and Technology
                      </h4>
                      <p className="timeline-text">
                        <p>H???c ?????i h???c 5.5 t???i ?????i h???c B??ch Khoa H?? N???i</p>
                        <p>T???t nghi???p b???ng Kh??</p>
                        <p>CPA: 2.73</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience padd-15">
              <h3 className="title">Experience</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 20017 - 2018
                      </h3>
                      <h4 className="timeline-title">
                        Hanoicab-SCTV
                      </h4>
                      <p className="timeline-text">
                        <p>T?? v???n kh??ch h??ng v??? ch??nh s??ch v?? d???ch v???.</p>
                        <p>H??? tr??? kh??ch h??ng khi c?? l???i k?? thu???t x???y ra.</p>
                        <p>N??ng cao kh??? n??ng giao ti???p.
                        </p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2019
                      </h3>
                      <h4 className="timeline-title">
                        ACE Antenna Company
                      </h4>
                      <p className="timeline-text">
                        <p>T??m hi???u t??? ch???c doanh nghi???p v?? quy tr??nh s???n xu???t s???n ph???m.
                        </p>
                        <p>Tham gia tr???c ti???p v??o d??y chuy???n s???n xu???t</p>
                        <p> N??ng cao kh??? n??ng l??m vi???c nh??m v?? s??? ki??n tr??
                        </p>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2022
                      </h3>
                      <h4 className="timeline-title">
                        VKX Company
                      </h4>
                      <p className="timeline-text">
                        <p>T??m hi???u v??? Reactjs, Redux, React Hooks, Material UI, Typescript.
                        </p>
                        <p>Tham gia l??m c??c project nh??? trong qu?? tr??nh th???c t???p</p>
                        <p>Tham gia l??m nh???ng task nh??? trong d??? ??n c???a c??ng ty.</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}
