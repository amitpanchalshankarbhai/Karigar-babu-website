import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import KarigarLogo from '../assets/images/logo.png';
function Header() {
    return (
        <header className="header-area">
            <div className="navbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <Image height={100}
                                        width={100} src={KarigarLogo}></Image>
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
                                className="header-hero-img text-center wow fadeIn"
                                data-wow-duration="1.3s"
                                data-wow-delay="1.4s"
                            >
                                <img
                                    height={260}
                                    width={150}
                                    src={
                                        "https://assets.datahayinfotech.com/assets/uploadImages/phoneBackground.png"
                                    }
                                    alt="hero"
                                />
                            </div>{" "}
                            {/* header hero img */}
                        </div>
                    </div>{" "}
                    {/* row */}
                </div>{" "}
                {/* container */}
                <div id="particles-1" className="particles" />
            </div>{" "}
            {/* header hero */}
        </header>
    )
}

export default Header