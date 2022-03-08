import * as React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import BackgroundImage from "../assets/images/banner-bg.svg";
import WorkingGIF from "../assets/images/carpenter.jpg";
import WorkingIllustration from "../assets/images/worker_illustration.jpeg";
import WorkingIllustration2 from "../assets/images/workthree.jpg";
import PhoneBackground from "../assets/images/phoneBackground.png";
import FounderProfile from "../assets/images/Mask Group (2).png";
import CoFounderOneProfile from "../assets/images/Mask Group.png";
import CoFounderTwoProfile from "../assets/images/Mask Group (1).png";

// markup
const Home = () => {
  return (
    <main>
      <>
        {/*====== PRELOADER PART START ======*/}
        {/* <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle" />
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/*====== PRELOADER PART ENDS ======*/}
        {/*====== HEADER PART START ======*/}
        <header className="header-area">
          <div className="navbar-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
                      <Image src={Logo} alt="Logo" />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <ul id="nav" className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="page-scroll" href="#home">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#facts">
                            Why Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#team">
                            Team
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* navbar collapse */}
                  </nav>{" "}
                  {/* navbar */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
          </div>{" "}
          {/* navbar area */}
          <div
            id="home"
            className="header-hero bg_cover"
            style={{
              backgroundImage: `url('https://assets.datahayinfotech.com/assets/images/banner-bg.svg')`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    style={{ marginTop: "26px" }}
                    className="header-hero-content text-center"
                  >
                    <h3
                      className="header-sub-title wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      Karigar Babu
                    </h3>
                    <h2
                      className="header-title wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.5s"
                    >
                      Find Workers and daily work on one click
                    </h2>
                    <p
                      className="text wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    ></p>
                  </div>{" "}
                  {/* header hero content */}
                </div>
              </div>{" "}
              {/* row */}
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="header-hero-image text-center wow fadeIn"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.4s"
                  >
                    <Image
                      height={260}
                      width={150}
                      src={PhoneBackground}
                      alt="hero"
                    />
                  </div>{" "}
                  {/* header hero image */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* container */}
            <div id="particles-1" className="particles" />
          </div>{" "}
          {/* header hero */}
        </header>
        {/*====== HEADER PART ENDS ======*/}
        {/*====== BRAMD PART START ======*/}
        {/* <div className="brand-area pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <Image src="../../assets/images/brand-1.png" alt="brand" />
                </div>{" "}
                
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <Image src="../../assets/images/brand-2.png" alt="brand" />
                </div>{" "}
                
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <Image src="../../assets/images/brand-3.png" alt="brand" />
                </div>{" "}
                
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <Image src="../../assets/images/brand-4.png" alt="brand" />
                </div>{" "}
                
                <div
                  className="single-logo mt-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <Image src="../../assets/images/brand-5.png" alt="brand" />
                </div>{" "}
                
              </div>{" "}
              
            </div>
          </div>{" "}
          
        </div>{" "}
      </div> */}
        {/*====== BRAMD PART ENDS ======*/}
        {/*====== SERVICES PART START ======*/}
        {/* <section id="features" className="services-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-40">
                <div className="line m-auto" />
                <h3 className="title">
                  Clean and simple design,{" "}
                  <span> Comes with everything you need to get started!</span>
                </h3>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="services-icon">
                  <Image
                    className="shape"
                    src="../../assets/images/services-shape.svg"
                    alt="shape"
                  />
                  <Image
                    className="shape-1"
                    src="../../assets/images/services-shape-1.svg"
                    alt="shape"
                  />
                  <i className="lni-baloon" />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="#">Clean</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="services-icon">
                  <Image
                    className="shape"
                    src="../../assets/images/services-shape.svg"
                    alt="shape"
                  />
                  <Image
                    className="shape-1"
                    src="../../assets/images/services-shape-2.svg"
                    alt="shape"
                  />
                  <i className="lni-cog" />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="#">Robust</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single-services text-center mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="services-icon">
                  <Image
                    className="shape"
                    src="../../assets/images/services-shape.svg"
                    alt="shape"
                  />
                  <Image
                    className="shape-1"
                    src="../../assets/images/services-shape-3.svg"
                    alt="shape"
                  />
                  <i className="lni-bolt-alt" />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="#">Powerful</a>
                  </h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "} */}
        {/*====== SERVICES PART ENDS ======*/}
        {/*====== ABOUT PART START ======*/}
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
                    worker. Where for the workers they just have to be online in
                    the application and once they online so after that any
                    contractor who is in the same location of the worker will
                    book or hire them for the daily wage basis or long so this
                    will help both of the users to get find their best match
                    without going to any location only and they both can find
                    their best match through karigar babu mobile application.
                  </p>
                  <a href="#" className="main-btn">
                    Get App
                  </a>
                </div>{" "}
                {/* about content */}
              </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <Image
                    src={WorkingGIF}
                    alt="about"
                    style={{
                      marginLeft: 25 + "px",
                      marginBottom: 20 + "px",
                      marginTop: 30,
                    }}
                  />
                </div>{" "}
                {/* about image */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
          <div className="about-shape-1">
            {/* <Image src={AboutShapeTwo} alt="shape" /> */}
          </div>
        </section>
        {/*====== ABOUT PART ENDS ======*/}
        {/*====== VIDEO COUNTER PART START ======*/}
        <section id="facts" className="video-counter pt-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="video-content mt-50 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="video-image">
                    <Image src={WorkingIllustration} alt="Illustration" />
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
                        The main reason is that why you need to use our services
                        that is we are providing an exact match to contractors
                        and workers for their daily work.The biggest traditional
                        problem in the daily working market is there is a not
                        any platform which connects workers and contractors
                        directly so through our platform contractor and workers
                        can connect easily and work.
                      </li>
                      <li className="text">
                        And also it might be possible that Sometimes contractors
                        have work for some months and they might not have work
                        for a few days so during this span of the time workers
                        might go with some other contractor and next time when
                        contractor get work then they face problem to find
                        workers for thier work. On the other end, workers also
                        facing the problem of finding their daily work this
                        problem will resolved by using our platform.
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
                      for their work. And if the contractor wants then they can
                      connect with the worker and hire them for daily wage
                      basis.
                    </li>
                    <li className="text">
                      2) On our platform contractors can book a worker for their
                      daily work at any time for that they don't need to go
                      physically to any place for finding workers for their
                      work.
                    </li>
                    <li className="text">
                      3) Workers can easily get the work on our platform as they
                      don’t need to rely on one contractor. so through our
                      mobile application they find more oppurtunities by staying
                      at their home.
                    </li>
                  </ul>
                </div>{" "}
                {/* about content */}
              </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <Image
                    src={WorkingIllustration2}
                    alt="about"
                    style={{ marginLeft: 25 + "px", marginBottom: 20 + "px" }}
                  />
                </div>{" "}
                {/* about image */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
          <div className="about-shape-1">
            {/* <Image src={AboutShapeTwo} alt="shape" /> */}
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
                    className="team-image"
                  >
                    <Image src={FounderProfile} alt="Team" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="lni-facebook-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-twitter-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-instagram-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-linkedin-original" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                    className="team-image"
                  >
                    <Image src={CoFounderOneProfile} alt="Team" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="lni-facebook-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-twitter-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-instagram-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-linkedin-original" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                    className="team-image"
                  >
                    <Image src={CoFounderTwoProfile} alt="Team" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="lni-facebook-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-twitter-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-instagram-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-linkedin-original" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
        {/*====== TEAM PART ENDS ======*/}
        {/*====== TESTIMONIAL PART START ======*/}
        {/* <section id="testimonial" className="testimonial-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center pb-40">
                <div className="line m-auto" />
                <h3 className="title">
                  Users sharing<span> their experience</span>
                </h3>
              </div>{" "}
            </div>
          </div>{" "}
          <div
            className="row testimonial-active wow fadeInUpBig"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation" />
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum
                    dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <Image
                      className="shape"
                      src="../../assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <Image
                      className="author"
                      src="../../assets/images/author-1.png"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Jenny Deo</h6>
                    <p className="text">CEO, SpaceX</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation" />
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum
                    dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <Image
                      className="shape"
                      src="../../assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <Image
                      className="author"
                      src="../../assets/images/author-2.png"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Marjin Otte</h6>
                    <p className="text">UX Specialist, Yoast</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation" />
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum
                    dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <Image
                      className="shape"
                      src="../../assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <Image
                      className="author"
                      src="../../assets/images/author-3.png"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">David Smith</h6>
                    <p className="text">CTO, Alphabet</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial">
                <div className="testimonial-review d-flex align-items-center justify-content-between">
                  <div className="quota">
                    <i className="lni-quotation" />
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni-star-filled" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p className="text">
                    Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                    seddiam nonu eirmod tempor invidunt labore.Lorem ipsum
                    dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
                  </p>
                </div>
                <div className="testimonial-author d-flex align-items-center">
                  <div className="author-image">
                    <Image
                      className="shape"
                      src="../../assets/images/textimonial-shape.svg"
                      alt="shape"
                    />
                    <Image
                      className="author"
                      src="../../assets/images/author-2.png"
                      alt="author"
                    />
                  </div>
                  <div className="author-content media-body">
                    <h6 className="holder-name">Fajar Siddiq</h6>
                    <p className="text">COO, MakerFlix</p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </section> */}
        {/*====== TESTIMONIAL PART ENDS ======*/}
        {/*====== BLOG PART START ======*/}
        {/* <section id="blog" className="blog-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-35">
                <div className="line" />
                <h3 className="title">
                  <span>Our Recent</span> Blog Posts
                </h3>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="blog-image">
                  <Image src="../../assets/images/blog-1.jpg" alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu
                    eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="blog-image">
                  <Image src="../../assets/images/blog-2.jpg" alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu
                    eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single-blog mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="blog-image">
                  <Image src="../../assets/images/blog-3.jpg" alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      Posted By: <a href="#">Admin</a>
                    </li>
                    <li>03 June, 2023</li>
                  </ul>
                  <p className="text">
                    Lorem ipsuamet conset sadips cing elitr seddiam nonu
                    eirmod tempor invidunt labore.
                  </p>
                  <a className="more" href="#">
                    Learn More <i className="lni-chevron-right" />
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </section> */}

        <footer id="footer" className="footer-area pt-120">
          <div className="container">
            <div
              className="subscribe-area wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="subscribe-content mt-45">
                    <h2 className="subscribe-title">
                      Subscribe Our Newsletter <span>get reguler updates</span>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="subscribe-form mt-50">
                    <form action="#">
                      <input type="text" placeholder="Enter eamil" />
                      <button className="main-btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* subscribe area */}
            <div className="footer-widget pb-100">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="footer-about mt-50 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <Image width={60} height={60} src={Logo} alt="logo" />
                    <p className="text">
                      Karigar babu is india’s first mobile application platform
                      which provide the solution between contractors and daily
                      worker where they can find their best match at one click.
                    </p>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* footer about */}
                </div>
                <div className="col-lg-5 col-md-7 col-sm-7">
                  <div className="footer-link d-flex mt-50 justify-content-md-between">
                    <div
                      className="link-wrapper wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <div className="footer-title">
                        <h4 className="title">Quick Link</h4>
                      </div>
                      <ul className="link">
                        <li>
                          <a href="#">Road Map</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Refund Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms of Service</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* footer wrapper */}
                    <div
                      className="link-wrapper wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                    >
                      <div className="footer-title">
                        <h4 className="title">Resources</h4>
                      </div>
                      <ul className="link">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">Page</a>
                        </li>
                        <li>
                          <a href="#">Portfolio</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* footer wrapper */}
                  </div>{" "}
                  {/* footer link */}
                </div>
                <div id="contact" className="col-lg-3 col-md-5 col-sm-5">
                  <div
                    className="footer-contact mt-50 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.8s"
                  >
                    <div className="footer-title">
                      <h4 className="title">Contact Us</h4>
                    </div>
                    <ul className="contact">
                      <li>+91 9687347050</li>
                      <li>karigar.babu.4@gmail.com</li>
                      {/* <li>www.yourweb.com</li> */}
                      <li>
                        104 ,&nbsp;Ghatlodiya Ahemdabad
                        <br /> Gujrat 380061.
                      </li>
                    </ul>
                  </div>{" "}
                  {/* footer contact */}
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* footer widget */}
            {/* footer copyright */}
          </div>{" "}
          {/* container */}
          <div id="particles-2" />
        </footer>
        {/*====== FOOTER PART ENDS ======*/}
        {/*====== BACK TOP TOP PART START ======*/}
        <a href="#" className="back-to-top">
          <i className="lni-chevron-up" />
        </a>
      </>
    </main>
  );
};

export default Home;
