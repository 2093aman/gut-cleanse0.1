import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import style from "./index.module.css";
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on youfff.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on youfff.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div classNameName="entry-banner entry-banner-after  bg-common bgservices ">
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Services inner</h1>
            </div>
          </div>
        </div>
      </div>

      {/* servicess inner */}
      <section className="fancybox-layout1  bg-overlay-primary-gradient pt-120 pb-120  otherserv">
        <div class="container d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col-12">
              <h2 className="item-title text-center ">Service details </h2>
            </div>
            <div class="col-md-6 mt-5 d-flex align-items-center ps-5 mob">
              <div class="event-card ms-5">
                <div class="row align-items-center">
                  <div className="col-md-6">
                    <div className="row datevent">
                      <h3>Start </h3>
                      <div class="col-md-3">
                        <div class="event-date">13</div>
                      </div>
                      <div class="col-md-9">
                        <div class="month">NOVEMBER, 2018</div>
                        <div class="name">The Plaza Center</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row datevent">
                      <h3>End </h3>
                      <div class="col-md-3">
                        <div class="event-date">13</div>
                      </div>
                      <div class="col-md-9">
                        <div class="month">NOVEMBER, 2018</div>
                        <div class="name">The Plaza Center</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="event-title">
                  <a href="#">Information Technology in The Banking Sector</a>
                </div>
                <p>
                  {" "}
                  lorem Clinic provides a wide variety of services to help meet
                  your needs and provide a one-stop-shop!{" "}
                </p>
                <div class="upcoming-course-adr">
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <p>
                    768 Fifth Avenue New York, <br />
                    NY 1019 <span>|</span> The Plaza Center
                  </p>
                </div>
                <div className="priceing-even">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Price</h4>
                    </div>
                    <div className="col-md-4">
                      <p>$5678r4</p>
                    </div>
                  </div>
                </div>
                <button class="register-btn">E-BOOK</button>
              </div>
            </div>
            <div class="right col-md-6 z-3 d-flex align-items-center">
              <img
                alt="Person holding a smartphone with a laptop, documents, and a cup on a desk"
                class="img-fluid event-image me-5"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/6lLlf1l59iQcRqAPWnVI1dOOe9CAztKdZerVXHf8tMWuDh0PB.jpg"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
      {/* testimonial  */}

      <section className="banner-wrap-layout1 parallaxie" id="support">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-7 col-lg-4 col-md-10 col-12"></div> */}
            <div className="col-xl-12 col-lg-8 col-md-10 col-12">
              <div className="banner-box-layout1" data-aos="fade-up">
                <h2 className="item-title">What Our Patients Are Saying</h2>
                <Carousel
                  autoPlay={true}
                  draggable={true}
                  infinite={true}
                  autoPlaySpeed={6000}
                  responsive={responsive1}
                >
                  <div>
                    <p>
                      &quot;Dr. Huda Tsihira-Senga did a great job with my
                      baby’s first health exam. She explained everything to me
                      in a very clear manner. Especially loved how Dr. Huda
                      really took her time to explain my baby’s conditionto me.
                      I had a great visit. The staff and Dr. Huda were all very
                      friendly and helpful, I highly recommend Dr Huda.&quot;
                    </p>
                    <p>
                      <b>Mrs. Yolanda Vasquez</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      &quot;The nurse is always so nice. My son has special
                      needs… She always treats him with so much respect. DR.
                      KHOA PHAM is awesome. He treats my son with great respect,
                      and he has a lot of patience. My son is very comfortable.
                      Thank you, Dr. Pham and his nurse.&quot;{" "}
                    </p>
                    <p>
                      <b>Andrea Laskoskie</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      &quot;Desde mi primera visita quedé muy a gusto con la
                      clínica pues todo el personal es muy atento y súper
                      amable, dispuestos a ayudar e informar a cada paciente,
                      son un 100 excelente servicio.&quot;
                    </p>
                    <p>
                      <b>M G</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      &quot;Stephanie Gonzalez at the front desk was amazing and
                      made sure I took the best care for me and my daughter. Dr.
                      Krenek took her time to see my child and answer all my
                      questions. Everyone was super nice and
                      understanding.&quot;
                    </p>
                    <p>
                      <b>Carolyn Tryon</b>
                    </p>
                  </div>

                  <div>
                    <p>
                      &quot;From the front desk to the vitals check to the Lab
                      Tech, and last but not least, the Awesome Provider,
                      thisLorem Ipsum staff of friendly professionals is totally
                      fantastic, couldn’t get better in my opinion, Thank you
                      all ladies!&quot;
                    </p>
                    <p>
                      <b>Ashley Tran </b>
                    </p>
                  </div>

                  <div>
                    <p>
                      &quot;It is the second visit I have made, and I am very
                      happy with the service, and the doctor, I plan to change
                      with my family and continue withLorem Ipsum for my visits
                      each year, and my primary doctors, thank you!&quot;
                    </p>
                    <p>
                      <b>Angela Lopez</b>
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Service;
