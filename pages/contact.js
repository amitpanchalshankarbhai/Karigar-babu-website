import Image from "next/image";
import * as React from "react";
import KarigarLogo from '../assets/images/logo.png';
import Footer from "../components/Footer";
import Header from "../components/Header";

// markup
const Contact = () => {
    return (
        <div>
            <main>
                <>
                    <Header/>
                    <section style={{marginBottom:'150px'}} id="contact-us" className="about-area pt-70">
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
                                            <h3 className="title">Contact Us</h3>
                                        </div>{" "}
                                        {/* section title */}
                                        <ul className="contact">
                                            <li className="subscribe-title"><h2>+91 9687347050</h2></li>
                                            <li className="subscribe-title"><h3>karigar.babu.4@gmail.com</h3></li>
                                            {/* <li className="subscribe-title">www.yourweb.com</li> */}
                                            <li className="subscribe-title">
                                                <h4 style={{ color: 'gray' }}> A-104,&nbsp; Jay bhanu society,
                                                    <br />Ghatlodiya, Ahemdabad-380061,
                                                    <br /> Gujrat.</h4>
                                            </li>
                                        </ul>
                                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.karigarbabu" className="main-btn">
                                            Get App
                                        </a>
                                    </div>{" "}
                                    {/* about content */}
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

export default Contact;
