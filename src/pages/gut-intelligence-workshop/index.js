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

const Intelligence = () => {
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
              <h1>gut intelligence workshop</h1>
              {/* <p>At Lorem Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
              {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}
            </div>
          </div>
        </div>
      </div>



      <section className="about-area pt-100 pb-100" id="aboutus">
        <div className="container">
          <div className="row  ">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left pos-rel mb-30" data-aos="fade-up">
                <div className="about-author d-flex align-items-center">
                  <div className="about-author-Image mt-2">
                    <Image
                      src="/gutoo.jpg"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />

                    <div className="circle-Image"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pb-10">
              <div className="mb-30  " data-aos="fade-right">
                <div className="section-title-2">
                  <h2> Master Your Microbiome, Transform Your Health</h2>
                </div>
                <div className="about-text  ">
                  <p className="mb-5">
                    Discover how a thriving gut ecosystem shapes your physical and mental wellbeing through this transformative online workshop.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="fancybox-layout1  bg-overlay-primary-gradient pt-120 pb-120  ">
        <div class="container d-flex align-items-center">

          <div class="row">
            <div class="col-12 mb-4">
              <h2 className="item-title text-center ">Do you need Gut Cleansing?</h2>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/starving_12817603.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Indigestion</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/obesity_11292175.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Bloating</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/gut-microbiota_12034683.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>IBS</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/stomach_12034700.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Acid Reflux</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/witness_15578367.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Belching</h4>
              </div>


            </div>

            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/insomnia_18633648.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Brain Fog / Fatigue</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/conflict_12340750.gif"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>Anxiety / Mood Swings</h4>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3 col-md-4">
              <div className="icon-box program">
                <Image
                  src="/hormonal.jpeg"
                  alt="nutritionist"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                <h4>PCOS</h4>
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
                      src="/IMG_9684.jpg"
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
                  <h2>What is included in this Workshop? </h2>
                </div>
                <div className="about-text pr-5">
                  {/* <p>
                    Lorem Clinic might be a good choice for several reasons,
                    depending on what you&apos;re looking for. Here are some
                    common reasons people choose clinics like Lorem:
                  </p> */}
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
                        2 Hour Live Zoom Session With  Gut Health expert Nancy
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
                        A guide to identify n address gut dysfunction
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
                        Supplements & tips to improve gut health
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
                        List of gut healing foods
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
                        Understanding stool testing
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
                        Guide to manage gut issues without medication
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
                        Enriched Indian meal plans, healthy for your GUT.
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
                        Q&A on the topics discussed.  Investment in Your Health
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

                        Understanding SIBO - (small intestine bacterial overgrowth) and managing it
                      </h4>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="section-title-5 mb-20">
                    <h4><b>At ₹299 (less than your favorite pizza!), unlock:</b> </h4>
                  </div>
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
                        Live expert-led workshop
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
                        Comprehensive gut health resources
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

                        Exclusive bonuses worth ₹6,000
                      </h4>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* servicess  */}

      <section className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-120 bg-Image otherserv services-tre services-project">
        <div className="container">

          <div className="row justify-content-end mb-30">
            <div
              className="col-sm-12 col-md-12 col-lg-8 col-xl-12"
              data-aos="fade-up"
            >

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
                      src="/jjjytq.png"
                      alt="nutritionist"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="weeklist">
                    <h4 className="fancybox-title">Why Start With Gut Health?</h4>
                    <p className="box-text">
                      Your gut isn't just about digestion – it's your body's command center. When you optimize your gut health, you're laying the foundation for total wellness, from improved energy to better mood and clearer thinking.{" "}
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
                      src="/worws.svg"
                      alt="pulmonology"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="weeklist">
                    <h4 className="fancybox-title">Limited Time Offer </h4>
                    <p>
                      Transform your health journey with expert guidance and practical solutions at just ₹299. Secure your spot today and receive exclusive bonuses worth ₹6,000.<br />
                      Remember: True health transformation begins with gut healing. Join us to learn how to reprogram your gut and automate your path to wellness.
                      {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="row pt-50 main-pay paysection">

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">

              <h3 className=" text-center">Reserve your spot now at ₹299 and begin your journey to optimal health. </h3>

              <div class="call-to-action-btn paybtn">
                <a href="https://wa.me/9779994422" target="_blank" class="item-btn-phone btn-blue theme-btn"><span>Byu Now</span></a>
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
                  Explore Our Natural Gut Cleanse Programs and Improve Your
                  Digestive Health! Begin your journey to optimal digestive
                  wellness
                </h2>

                <div className="call-to-action-btn">
                  <Link href="/our-program" className="btn-red theme-btn">
                    <span>OUR PROGRAMS</span>
                  </Link>
                  <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>{" "}
                  <a
                    href="https://wa.me/9779994422"
                    target="_blank"
                    className="item-btn-phone btn-blue theme-btn"
                  >
                    <span>Call: 9779994422 </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="departments-wrap-layout5 bg-light-accent100">
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
      </section> */}
    </div>
  );
};

export default Intelligence;
