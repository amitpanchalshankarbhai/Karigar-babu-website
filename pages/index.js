import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// markup
const Home = () => {
  return (
    <div>
      <main>
        <>
         <Header/>
          <section id="about" className="about-area pt-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-content mt-50 wow fadeInLeftBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="section-title">
                      <div className="line" />
                      <h3 className="title">About Us</h3>
                    </div>{" "}
                    {/* section title */}
                    <p className="text">
                      Karigar babu is india’s first mobile application platform
                      which provide the solution between contractors and daily
                      worker. Where for the workers they just have to be online
                      in the application and once they online so after that any
                      contractor who is in the same location of the worker will
                      book or hire them for the daily wage basis or long so this
                      will help both of the users to get find their best match
                      without going to any location only and they both can find
                      their best match through karigar babu mobile application.
                    </p>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.karigarbabu" className="main-btn">
                      Get App
                    </a>
                  </div>{" "}
                  {/* about content */}
                </div>
                <div className="col-lg-6">
                  <div
                    className="about-img text-center mt-50 wow fadeInRightBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img
                      src={
                        "https://assets.datahayinfotech.com/assets/uploadImages/worker_illustration3.jpeg"
                      }
                      alt="about"
                      style={{
                        marginLeft: 25 + "px",
                        marginBottom: 20 + "px",
                        marginTop: 30,
                      }}
                    />
                  </div>{" "}
                  {/* about img */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
            <div className="about-shape-1">
              {/* <img src={AboutShapeTwo} alt="shape" /> */}
            </div>
          </section>
          <section id="facts" className="video-counter pt-20">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="video-content mt-50 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="video-img">
                      <img
                        src={
                          "https://assets.datahayinfotech.com/assets/uploadImages/worker_illustration.jpeg"
                        }
                        alt="Illustration"
                      />
                    </div>
                  </div>{" "}
                  {/* video content */}
                </div>
                <div className="col-lg-6">
                  <div
                    className="counter-wrapper mt-50 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.8s"
                  >
                    <div className="counter-content">
                      <div className="section-title">
                        <div className="line" />
                        <h3 className="title">Why Choose Us</h3>
                      </div>{" "}
                      {/* section title */}
                      <ul>
                        <li className="text">
                          The main reason is that why you need to use our
                          services that is we are providing an exact match to
                          contractors and workers for their daily work.The
                          biggest traditional problem in the daily working
                          market is there is a not any platform which connects
                          workers and contractors directly so through our
                          platform contractor and workers can connect easily and
                          work.
                        </li>
                        <li className="text">
                          And also it might be possible that Sometimes
                          contractors have work for some months and they might
                          not have work for a few days so during this span of
                          the time workers might go with some other contractor
                          and next time when contractor get work then they face
                          problem to find workers for thier work. On the other
                          end, workers also facing the problem of finding their
                          daily work this problem will resolved by using our
                          platform.
                        </li>
                      </ul>
                    </div>{" "}
                  </div>{" "}
                  {/* counter wrapper */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
          </section>
          <section id="benefits" className="about-area pt-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-content mt-50 wow fadeInLeftBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="section-title">
                      <div className="line" />
                      <h3 className="title">Benefits</h3>
                    </div>{" "}
                    {/* section title */}
                    <ul>
                      <li className="text">
                        1) We are providing one digital platform where workers
                        just need to open the app and stay online. On the other
                        end, contractors will check that any worker is available
                        for their work. And if the contractor wants then they
                        can connect with the worker and hire them for daily wage
                        basis.
                      </li>
                      <li className="text">
                        2) On our platform contractors can book a worker for
                        their daily work at any time for that they don't need to
                        go physically to any place for finding workers for their
                        work.
                      </li>
                      <li className="text">
                        3) Workers can easily get the work on our platform as
                        they dont need to rely on one contractor. so through our
                        mobile application they find more oppurtunities by
                        staying at their home.
                      </li>
                    </ul>
                  </div>{" "}
                  {/* about content */}
                </div>
                <div className="col-lg-6">
                  <div
                    className="about-img text-center mt-50 wow fadeInRightBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img
                      src={
                        "https://assets.datahayinfotech.com/assets/uploadImages/workthree.jpg"
                      }
                      alt="about"
                      style={{ marginLeft: 25 + "px", marginBottom: 20 + "px" }}
                    />
                  </div>{" "}
                  {/* about img */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
            <div className="about-shape-1">
              {/* <img src={AboutShapeTwo} alt="shape" /> */}
            </div>
          </section>
          {/*====== VIDEO COUNTER PART ENDS ======*/}
          {/*====== TEAM PART START ======*/}
          <section id="team" className="team-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="section-title text-center pb-30">
                    <div className="line m-auto" />
                    <h3 className="title">
                      <span>Meet Our</span> Creative Team Members
                    </h3>
                  </div>{" "}
                  {/* section title */}
                </div>
              </div>{" "}
              {/* row */}
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div
                    className="single-team text-center mt-30 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div
                      style={{
                        height: 200,
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 70,
                        marginTop: 30,
                      }}
                      className="team-img"
                    >
                      <img
                        src={
                          "https://assets.datahayinfotech.com/assets/uploadImages/Mask Group (2).png"
                        }
                        alt="Team"
                      />
                    </div>
                    <div className="team-content">
                      <h5 className="holder-name">
                        <a href="#">Amit Panchal</a>
                      </h5>
                      <p className="text">Founder and CEO</p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div
                    className="single-team text-center mt-30 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div
                      style={{
                        height: 200,
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 70,
                        marginTop: 30,
                      }}
                      className="team-img"
                    >
                      <img
                        src={
                          "https://assets.datahayinfotech.com/assets/uploadImages/Mask Group.png"
                        }
                        alt="Team"
                      />
                    </div>
                    <div className="team-content">
                      <h5 className="holder-name">
                        <a href="#">Mohil Patel</a>
                      </h5>
                      <p className="text">Co-Founder</p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div
                    className="single-team text-center mt-30 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.8s"
                  >
                    <div
                      style={{
                        height: 200,
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 70,
                        marginTop: 30,
                      }}
                      className="team-img"
                    >
                      <img
                        src={
                          "https://assets.datahayinfotech.com/assets/uploadImages/Mask Group (1).png"
                        }
                        alt="Team"
                      />
                    </div>
                    <div className="team-content">
                      <h5 className="holder-name">
                        <a href="#">Kuldeep Jiyani</a>
                      </h5>
                      <p className="text">Co-Founder</p>
                    </div>
                  </div>{" "}
                  {/* single team */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
          </section>
         <Footer/>
          {/*====== FOOTER PART ENDS ======*/}
          {/*====== BACK TOP TOP PART START ======*/}
          <a href="#" className="back-to-top">
            <i className="lni-chevron-up" />
          </a>
        </>
      </main>
    </div>
  );
};

export default Home;
