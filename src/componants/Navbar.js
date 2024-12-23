import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faFacebook,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Translate from "./TranslateComponent";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);

  return (
    <div>
      <header id="header_1" className="">
        <div class="sidebarmenu">
          <div class="d-flex justify-content-between align-items-center p-4">
            <a href="/" className="temp-logo">
              <Image
                src="/home/logotic.jpeg"
                alt="logo"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </a>
            <button
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
            >
              <Image
                src="/menu.png"
                alt="menu"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </button>
          </div>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div class="d-flex justify-content-between color-white">
                    <Link href="/about">About</Link>
                   
                  </div>
                  
                </li>

                <li>
                  <div class="d-flex justify-content-between color-white">
                    <Link href="/services">Services</Link>
                   
                  </div>

                 
                </li>
                <li>
                  <div class="d-flex justify-content-between color-white">
                    <Link href="/our-process">Our Process</Link>
                   
                  </div>

                  
                </li>
                <li>
                  <div class="d-flex justify-content-between color-white">
                    <a href="blogs">Blogs </a>
                    
                  </div>

                 
                </li>
                <li>
                  <Link href="/contactus">Contact Us</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="header-top-bar   d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-12 col-md-12 col-12 header-contact-layout1">
                <div className="marquee">
                  {" "}
                  <p>
                    To contact your healthcare provider after hours, or when the
                    clinic is closed, please call (713) 773-0803.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 d-none d-xl-block">
                <ul className="header-social-layout1">

                <b> Call Us: (713) 773-0803</b>
                  <li>
                 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-menu-area header-menu-layout1">
          <div className="container">
            <div className="row no-gutters d-flex align-items-center">
              <div className="col-lg-2 col-md-2 logo-area-layout1">
                <a href="/" className="temp-logo">
                  <Image
                    src="/logoblack.png"
                    alt="logo"
                    className="img-fluid"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </a>
              </div>
              <div className="col-lg-7 col-md-7 possition-static">
                <div className="template-main-menu ">
                  <nav id="dropdown">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>

                        
                      </li>
                      <li>
                        <Link href="/services">Services</Link>

                       
                      </li>

                      <li>
                        <Link href="/our-process">Our Process</Link>

                        
                      </li>

                    
                      <li>
                        <Link href="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/contactus">Contact Us</Link>
                        
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header-action-items-layout1">
								<div className="template-main-menu " >
									<nav id="dropdown">
										<ul>
											<li>
												<Link target="" href="" className="btn-red ">login/Sign</Link>
												
											</li>
											
									
										</ul>
								</nav>
								</div>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
           
       
      </header>
    </div>
  );
};

export default Navbar;
