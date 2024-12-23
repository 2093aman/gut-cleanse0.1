import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const OurProcess = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="entry-banner entry-banner-after  bg-common ">
        <ReactPlayer
          url="/video2.mp4"
          playing={true}
          autoplaying={true}
          loop={true}
          muted={true}
          playsinline={true}
          width={"100%"}
          height={"100%"}
          webkit-playsinline={true}
        />
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="row">
              <h2 className="text-center ">Explaining How Stress Makes You Sick You Need To Know
              </h2>
              <div class="info">
                <i class="fas fa-user-circle"></i>
                <span>John Doe</span>
                <i class="fas fa-calendar-alt"></i>
                <span>November 18, 2021</span>
                <i class="fas fa-folder"></i>
                <span>Insight</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <section className="inner-cont">
        <div className="container mt-5">
          <div className="row">
            <img
              alt="A person comforting another person"
              className="bloginner-img"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
              width="600"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h4>Lorem ipsum dolor sit amet</h4>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          </div>

          <div class="row">
            <div class="col-md-6 d-flex align-items-center">
              <span class="tag-text">Tags :</span>
              <span class="tag-value ms-2">Stress</span>
            </div>
            <div class="col-md-6 d-flex justify-content-end align-items-center">
              <span class="share-text">Share This :</span>
              <div class="share-icons ms-2">
                <a href="#" class="icon-circle"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="icon-circle"><i class="fab fa-twitter"></i></a>
                <a href="#" class="icon-circle"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default OurProcess;
