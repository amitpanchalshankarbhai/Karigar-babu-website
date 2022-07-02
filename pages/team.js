import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import KarigarLogo from '../assets/images/logo.png';
import Footer from "../components/Footer";
import Header from "../components/Header";

// markup
const Teams = () => {
  return (
    <div>
      <main>
        <>
         <Header/>
         <section style={{marginBottom:'150px'}} id="team" className="team-area pt-120">
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

export default Teams;
