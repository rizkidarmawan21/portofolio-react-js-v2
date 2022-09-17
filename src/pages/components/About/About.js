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
                  <p>Facebook: <span><a href="https://www.facebook.com/profile.php?id=100029577947626">Hoàng Luân</a></span></p>
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
                        <p> Học cấp 2 tại Trường tiểu học Cao An trong 4 năm</p>
                        <p>Cả 4 năm đều là học sinh tiên tiến.</p>
                        <p>Tốt nghiệp bằng khá và hạnh kiểm tốt</p>
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
                        <p> Học cấp 3 tại Trường THPT Tuệ Tĩnh trong 3 năm</p>
                        <p>Cả 3 năm đều là học sinh tiên tiến.</p>
                        <p>Tốt nghiệp bằng khá và hạnh kiểm tốt</p>
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
                        <p>Học đại học 5.5 tại Đại học Bách Khoa Hà Nội</p>
                        <p>Tốt nghiệp bằng Khá</p>
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
                        <p>Tư vấn khách hàng về chính sách và dịch vụ.</p>
                        <p>Hỗ trợ khách hàng khi có lỗi kĩ thuật xảy ra.</p>
                        <p>Nâng cao khả năng giao tiếp.
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
                        <p>Tìm hiểu tổ chức doanh nghiệp và quy trình sản xuất sản phẩm.
                        </p>
                        <p>Tham gia trực tiếp vào dây chuyền sản xuất</p>
                        <p> Nâng cao khả năng làm việc nhóm và sự kiên trì
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
                        <p>Tìm hiểu về Reactjs, Redux, React Hooks, Material UI, Typescript.
                        </p>
                        <p>Tham gia làm các project nhỏ trong quá trình thực tập</p>
                        <p>Tham gia làm những task nhỏ trong dự án của công ty.</p>
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
