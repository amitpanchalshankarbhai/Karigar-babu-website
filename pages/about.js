import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// markup
const About = () => {
  return (
    <div>
      <main>
        <>
         <Header/>
          <section style={{marginBottom:'150px'}} id="about" className="about-area pt-70 mb-20">
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

         <Footer/>
          <a href="#" className="back-to-top">
            <i className="lni-chevron-up" />
          </a>
        </>
      </main>
    </div>
  );
};

export default About;
