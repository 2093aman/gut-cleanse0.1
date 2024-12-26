import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import style from "./index.module.css";
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="entry-banner entry-banner-after  bg-common bgservices ">
        {/* <ReactPlayer
					url="/video2.mp4"
					playing={true}
					autoplaying={true}
					loop={true}
					muted={true}
					playsinline={true}
					width={"100%"}
					height={"100%"}
					webkit-playsinline={true}

				/> */}
        <div className="inner-page-banner breadcrumbs-off">
          <div className="container">
            <div className="entry-banner-content breadcrumbs-area">
              <h1>Services</h1>
              {/* <p>At Lorem Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
              {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}
            </div>
          </div>
        </div>
      </div>

      <section className="fancybox-layout1  bg-overlay-primary-gradient pt-120 pb-120  otherserv">
        <div class="container d-flex align-items-center">
          <div class="row">
            <div class="col-12 mb-4">
              <h2 className="item-title text-center ">Our Services</h2>
            </div>
            <div class="col-md-4">
              <div class="pro-card p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="days-left">7</div>
                  <div class="ms-2">
                    <span>Days Left</span>
                  </div>
                </div>
                <div class="event-title mb-2">Gut Reset Revolution</div>
                <div class="event-description mb-3">
                  Meet authorized professionals in the fields of marketing,
                  public relations, advertising and sales planning...
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="price-tab">Price </h3>
                  </div>
                  <div className="col-md-6">
                    <p className="price-money">$12345</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6"><h6>Start date </h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div></div>
                  <div className="col-md-6"><h6 className="end-dat">End date</h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pro-card p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="days-left">7</div>
                  <div class="ms-2">
                    <span>Days Left</span>
                  </div>
                </div>
                <div class="event-title mb-2">Gut & Glory™</div>
                <div class="event-description mb-3">
                  Meet authorized professionals in the fields of marketing,
                  public relations, advertising and sales planning...
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="price-tab">Price </h3>
                  </div>
                  <div className="col-md-6">
                    <p className="price-money">$12345</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6"><h6>Start date </h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div></div>
                  <div className="col-md-6"><h6 className="end-dat">End date </h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  <div class="col-md-4">
              <div class="pro-card p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="days-left">7</div>
                  <div class="ms-2">
                    <span>Days Left</span>
                  </div>
                </div>
                <div class="event-title mb-2">Gut Intelligence Workshop</div>
                <div class="event-description mb-3">
                  Meet authorized professionals in the fields of marketing,
                  public relations, advertising and sales planning...
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="price-tab">Price </h3>
                  </div>
                  <div className="col-md-6">
                    <p className="price-money">$12345</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6"><h6>Start date </h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div></div>
                  <div className="col-md-6"><h6 className="end-dat">End date </h6>
                    <div class="d-flex align-items-center mb-2">
                      <div class="event-date">May 5, 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* servicess  */}

      <section className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-120 bg-Image otherserv">
        <div className="container">
          <div className="row">
            <div className="col-2 col-xl-1">
              <div className="heading-divider mb-3"></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <div className="heading mb-50" data-aos="fade-top">
                <h3 className="heading-title color-white">Other Services</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mb-30">
            <div
              className="col-sm-12 col-md-12 col-lg-8 col-xl-12"
              data-aos="fade-up"
            >
              <p className="heading-desc color-white mb-20 fw-bold">
                Lorem Clinic provides a wide variety of services to help meet
                your needs and provide a one-stop-shop! At Lorem Clinic, we go
                above and beyond the clinical aspect and provide services that
                help you gain the most out of your healthcare experience. We
                want to make sure that you have access to as many benefits and
                programs as possible so that you and your family can stay
                healthy and happy! Outside of just primary care, we have an
                expert team of providers from varying disciplines, including:.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-6 col-d-4 col-lg-6 col-md-12"
              id="houroperation"
            >
              <div className="fancybox-item weekbx" data-aos="fade-up">
                <div className="fancybox-body d-flex">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/nutritionist.png"
                      alt="nutritionist"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="weeklist">
                    <h4 className="fancybox-title">Nutrition Consultation</h4>
                    <p className="box-text">
                      With the rise of obesity and accessibility of processed
                      foods, at Lorem Clinic, we know that it is important to
                      maintain a well balanced meal in conjunction with an
                      active lifestyle. Our registered dietitian provides
                      one-on-one consultations as well as group visits to
                      provide a personalized health plan for you to achieve and
                      maintain the healthy lifestyle you desire!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-d-4 col-lg-6 col-md-12">
              <div className="fancybox-item" data-aos="fade-up">
                <div className="fancybox-body  d-flex">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/pulmonology.png"
                      alt="pulmonology"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="weeklist">
                    <h4 className="fancybox-title">Pulmonology </h4>
                    <p>
                      Partnering with the Methodist Hospital System, Lorem
                      Clinic combines the expertise of providers from the
                      medical center with the convenience of the Lorem Clinic
                      location to help manage patients in need of a
                      pulmonologist.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area pt-100 pb-100" id="aboutus">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left pos-rel mb-30" data-aos="fade-up">
                <div className="about-author d-flex align-items-center">
                  <div className="about-author-Image">
                    <Image
                      src="/aboutus.webp"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                    {/* <div className="circle-Image"> <Image src="/circle-logo.png" alt="circle-logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-right pt-15 mb-30" data-aos="fade-right">
                <div className="section-title-2 mb-20">
                  <h2>Why Choose Lorem Clinic</h2>
                </div>
                <div className="about-text pr-5">
                  <p>
                    Lorem Clinic might be a good choice for several reasons,
                    depending on what you&apos;re looking for. Here are some
                    common reasons people choose clinics like Lorem:
                  </p>
                  <ul className="list-item">
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Comprehensive Care
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Experienced Staff
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Patient-Centered Approach
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Affordability
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Community-Focused
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span className="">
                          <Image
                            src="/dna.png"
                            alt="arrow"
                            className="fa-spin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </span>{" "}
                        Convenient Location and Hours
                      </h4>
                    </li>
                  </ul>
                </div>

                <Link href="/about" className="btn-red theme-btn mt-4">
                  <span>VIEW MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-wrap-layout4">
        <div className="item-Image"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="call-to-action-box-layout4" data-aos="zoom-in">
                <h2 className="item-title">
                  For more information about our services or to speak with a
                  representative from our Houston Community Clinic, please feel
                  free to contact us or give us a call today.
                </h2>

                <div className="call-to-action-btn">
                  <Link href="#" className="btn-red theme-btn">
                    <span>Book an Appointment</span>
                  </Link>
                  <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>{" "}
                  <Link
                    href="tel:+17137730803"
                    className="item-btn-phone btn-blue theme-btn"
                  >
                    <span>Call Us: (713) 773-0803</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-wrap-layout5 bg-light-accent100">
        <div className="container">
          <div className="row">
            <h2 className="item-title text-center mb-60">Program</h2>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Comprehensive Initial Assessment </h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Detailed review of medical history
                      <br />
                      Analysis of current symptoms and triggers
                      <br />
                      Evaluation of lifestyle factors
                      <br />
                      Assessment of nutritional needs
                      <br />
                      Review of previous treatments and outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Personalized Treatment Protocol</h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Custom-designed meal plans based on your specific symptoms
                      and needs <br />
                      Therapeutic food combinations for optimal nutrient
                      absorption
                      <br /> Anti-inflammatory recipe guide with over 50
                      gut-healing meals
                      <br /> Supplement recommendations when necessary
                      (non-prescribed)
                      <br /> Lifestyle modification strategies for enhanced
                      results
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <h2>Ongoing Support System</h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Weekly one-on-one progress evaluations
                      <br />
                      Daily group support through moderated WhatsApp community
                      <br />
                      Access to our digital resource library
                      <br />
                      Emergency support protocols for symptom flare-ups
                      <br />
                      Post-program maintenance guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
