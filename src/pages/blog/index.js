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
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Blog</h1>
              {/* <p>At HOPE Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
              {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="blogcard  ">
              <img
                alt="A person comforting another person"
                className="blogcard-img-top"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/xqTefwuA3xthbEMLOABekqKMeCeUWldfjQjUQ7PW9R4BD8afJA.jpg"
                width="600"
              />
              <div className="blogcard-body">
                <span className="badge"> Mental Health </span>
                <p className="text-muted mt-2 mb-1">
                  Jan 30, 2022 | Martin King
                </p>
                <h5 className="blogcard-title">
                  6 Tips To Protect Your Mental Health When You’re Sick
                </h5>
                <p className="blogcard-text">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a condition that’s certainly true if you test
                  positive for COVID-19, or are presumed to be positive...
                </p>
                <a href="#">
                  Read More
                  <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pagenation">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  );
};

export default OurProcess;
