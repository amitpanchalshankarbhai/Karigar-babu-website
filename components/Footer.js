import Image from 'next/image';
import Link from 'next/link';
import React from 'react';;
import KarigarLogo from '../assets/images/logo.png';

function Footer() {
    return (
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
                                    Subscribe Our Newsletter{" "}
                                    <span>get reguler updates</span>
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
                                <Image height={100}
                                    width={100} src={KarigarLogo}></Image>
                                <p className="text">
                                    Karigar babu is india’s first mobile application
                                    platform which provide the solution between contractors
                                    and daily worker where they can find their best match at
                                    one click.
                                </p>
                                {/* <ul className="social">
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
            </ul> */}
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
                                            <Link href="/privacy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>

                                            <Link href="/refund">
                                                <a>Refund Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shipping">
                                                <a>Shipping & Delivery Policy</a>
                                            </Link>
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
                                        <li className="nav-item active">
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="page-scroll" href="#facts">
                                                Why Us
                                            </a>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
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
                                        A-104,&nbsp; Jay bhanu society,
                                        <br />Ghatlodiya, Ahemdabad-380061,
                                        <br /> Gujrat.
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
    )
}

export default Footer