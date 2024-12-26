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
import { useState } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="entry-banner entry-banner-after  bg-common aboutimg">
        {/* <ReactPlayer
					url="/video3.mp4"
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
              <h1>About Us</h1>
              {/* <p>HOPE Clinic is reimagining healthcare to empower all patients to thrive. Learn more about how we&apos;re changing lives.</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* new section  */}

      <section className="about-area pt-100 pb-100" id="aboutus">
        <div className="container">
          <div className="row  ">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left pos-rel mb-30" data-aos="fade-up">
                <div className="about-author d-flex align-items-center">
                  <div className="about-author-Image">
                    <Image
                      src="/homebout.webp"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                      src="/homedown.webp"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="homedown"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <div className="circle-Image"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pb-10">
              <div className="about-right pt-15 mb-30  " data-aos="fade-right">
                <div className="section-title-2  mt-5">
                  <h2>About Us </h2>
                </div>
                <div className="about-text  ">
                  <p className="mb-5">
                    At Gut Cleanse, we understand that vibrant health begins in
                    your digestive system. Since 2015, our team of digestive
                    wellness experts has helped thousands of people transform
                    their lives through our science-backed, personalized gut
                    health programs. We don't just mask symptoms – we dig deep
                    to restore your microbiome balance and optimize your
                    digestive function naturally. Drawing from both modern
                    nutritional science and time-tested healing traditions, our
                    gentle yet effective gut cleanse approach helps you overcome
                    bloating, fatigue, and digestive discomfort while boosting
                    your energy and overall wellbeing. Through our signature
                    E.R.R.O.R. Method, we've guided busy professionals, parents,
                    and health-conscious individuals to rediscover the joy of
                    eating without fear or discomfort. Whether you're struggling
                    with occasional digestive issues or looking to enhance your
                    gut health, we're here to support you with practical
                    solutions that fit your lifestyle.
                  </p>
                </div>
                <div className="abutHomebtn">
                  <Link href="/about" className="btn-red theme-btn mt-4">
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values icon-section bg-grey pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-60">
              <h2>Our Values </h2>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content "
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle pulse">
                  <Image
                    src="/integration.png"
                    alt="integration"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Integrity</h3>
                <p>
                  We exert professional and personal integrity in all that we
                  do.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content"
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle pulse">
                  <Image
                    src="/commitment.png"
                    alt="commitment"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Commitment</h3>
                <p>
                  We are committed 100% to closing healthcare gaps in the
                  community.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content"
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle pulse">
                  <Image
                    src="/compassion.png"
                    alt="compassion"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Compassion</h3>
                <p>
                  We value caring and respect of all individuals, especially the
                  underserved.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content"
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle">
                  <Image
                    src="/community.png"
                    alt="community"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Community</h3>
                <p>
                  We are focused on “community” and value community service.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content"
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle pulse">
                  <Image
                    src="/excellence.png"
                    alt="excellence"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Excellence</h3>
                <p>
                  Our services are progressive — effective, comprehensive and of
                  the highest quality.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 serv1">
              <div
                className="services-content"
                data-aos="slide-up"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              >
                <div className="icon-circle pulse">
                  <Image
                    src="/volume.png"
                    alt="volume"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3>Fiscal Soundness</h3>
                <p>
                  Our operations are efficient, our services affordable, and we
                  maximize all resources.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6 serv1">
								<div className="services-content" data-aos="slide-up">
								<div className="icon-circle pulse"><Image src="/collaboration.png" alt="collaboration" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div>
								<h3>Collaboration</h3>
								<p>We value external and internal teamwork, realizing that together, we all achieve more.</p>
							</div>
					</div>	 */}

            {/* <div className="col-lg-4 col-sm-6 serv1">
								<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
								<div className="icon-circle pulse"><Image src="/cultural-activities.png" alt="cultural-activities" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
								<h3>Cultural Competence</h3>
								<p>We strive to understand and adequately serve all patients, regardless of custom, culture or language spoken.</p>
							</div>
					</div>	
					 */}
          </div>
        </div>
      </section>

      <section
        className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-0 bg-Image pb-120 helpingbox"
        id="history"
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-2 col-xl-1">
            <div className="heading-divider mb-3"></div>
          </div> */}
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <div className="heading mb-50">
                {/* <h3 className="heading-title color-white">Helping To Deliver Answers For Health Questions With Fixed
                Commitment To Excellence  Quality Of Our Results.</h3> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-end mb-30">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              {/* <p className="heading-desc color-white mb-20">To provide a comfortable and safe environment for our patients,
              please avoid wearing scented perfumes or creams when visiting us.
            </p> */}
              {/* <div className="certificates-container d-flex align-items-center mb-10">
             
            </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-d-4 col-lg-6" id="houroperation">
              <div className="fancybox-item weekbx" data-aos="slide-up">
                <div className="fancybox-body d-flex align-items-center">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/mission.png"
                      alt="mission"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="weeklist">
                    <h4 className="fancybox-title">Our Mission</h4>
                    <p className="box-text">
                      To provide quality healthcare without any prejudice to all
                      people of Greater Houston in a culturally and
                      linguistically competent manner.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-d-4 col-lg-6">
              <div className="fancybox-item" data-aos="slide-up">
                <div className="fancybox-body d-flex align-items-center">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/shared-vision.png"
                      alt="vision"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="weeklist">
                    <h4 className="fancybox-title">Our Vision </h4>
                    <p>
                      A healthy community with quality, affordable healthcare
                      for all.
                    </p>
                  </div>
                </div>
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
              <div className="call-to-action-box-layout4" data-aos="slide-up">
                <h2 className="item-title">
                  For more information about our services or to speak with a
                  representative from our Houston Community Clinic, please feel
                  free to contact us or give us a call today.
                </h2>

                <div className="call-to-action-btn">
                  <Link href="/appointments" className="btn-red theme-btn">
                    <span>Book an Appointment</span>
                  </Link>
                  <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>{" "}
                  <a
                    href="tel:7137730803"
                    className="item-btn-phone btn-blue theme-btn"
                  >
                    <span>Call Us: (713) 773-0803 </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 mb-5 departments-wrap-layout5 bg-light-accent100 ">
        <div class="container">
          <div class="faq-header">
            <h2>About Gut Health</h2>
          </div>
          <div class="accordion mb-5" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What exactly is gut health?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Gut health refers to the overall balance and function of your
                  digestive system, including the trillions of microorganisms
                  (microbiome) living in your intestines. A healthy gut
                  efficiently processes food, absorbs nutrients, eliminates
                  waste, and maintains a strong immune system. When your gut
                  health is compromised, it can affect everything from your
                  digestion to your mental wellbeing.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I know if I have poor gut health?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Common signs of poor gut health include:
                  <br /> • Frequent bloating, gas, or indigestion
                  <br /> • Irregular bowel movements • Sudden food sensitivities
                  <br /> • Chronic fatigue • Unexplained mood changes
                  <br /> • Skin issues
                  <br /> • Difficulty maintaining healthy weight
                  <br /> • Sleep disturbances
                  <br /> • Frequent headaches
                  <br /> • Autoimmune responses
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What causes gut health problems?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Several factors can contribute to poor gut health:
                  <br /> • Processed food consumption
                  <br /> • High stress levels
                  <br /> • Irregular eating patterns
                  <br /> • Lack of sleep
                  <br /> • Antibiotic use
                  <br /> • Environmental toxins
                  <br /> • Chronic inflammation
                  <br /> • Sedentary lifestyle
                  <br /> • Certain medications
                  <br /> • Excessive alcohol consumption
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThre"
                  aria-expanded="false"
                  aria-controls="collapseThre"
                >
                  What is gut dysbiosis?
                </button>
              </h2>
              <div
                id="collapseThre"
                class="accordion-collapse collapse"
                aria-labelledby="headingThre"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Gut dysbiosis occurs when there's an imbalance between
                  beneficial and harmful bacteria in your digestive system. This
                  imbalance can lead to various health issues, including:
                  <br />• Digestive problems
                  <br /> • Nutrient deficiencies
                  <br /> • Weakened immune system
                  <br /> • Hormonal imbalances
                  <br /> • Mental health challenges
                  <br /> • Skin conditions
                  <br /> • Weight management difficulties
                </div>
              </div>
            </div>{" "}
            {/* <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThee"
                  aria-expanded="false"
                  aria-controls="collapseThee"
                >
                  How long is the Gut Cleanse Program?
                </button>
              </h2>
              <div
                id="collapseThee"
                class="accordion-collapse collapse"
                aria-labelledby="headingThee"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Our core program runs for 2 weeks, with additional support and
                  guidance provided for the reintroduction phase. This timeline
                  is carefully designed to allow for meaningful changes while
                  remaining achievable for most participants.
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTree"
                  aria-expanded="false"
                  aria-controls="collapseTree"
                >
                  What makes your program different from other gut cleanses?
                </button>
              </h2>
              <div
                id="collapseTree"
                class="accordion-collapse collapse"
                aria-labelledby="headingTree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Our program distinguishes itself through:
                  <br /> • Personalized approach based on individual symptoms
                  and needs
                  <br /> • Evidence-based E.R.R.O.R. Method
                  <br /> • Direct access to gut health specialists
                  <br /> • Comprehensive support system including group and
                  individual guidance
                  <br /> • Focus on long-term sustainability rather than quick
                  fixes
                  <br /> • Integration of both dietary and lifestyle
                  modifications
                  <br /> • Careful reintroduction protocol to identify specific
                  triggers
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsehree"
                  aria-expanded="false"
                  aria-controls="collapsehree"
                >
                  Will I need to take any supplements?
                </button>
              </h2>
              <div
                id="collapsehree"
                class="accordion-collapse collapse"
                aria-labelledby="headinghree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  While our program focuses primarily on dietary and lifestyle
                  changes, we may recommend specific supplements based on your
                  individual needs and symptoms. However, any supplement
                  recommendations are optional and non-prescribed.
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTe"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  Can I continue working during the program?
                </button>
              </h2>
              <div
                id="collapseTe"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Yes, our program is designed to integrate into your daily
                  life. While some participants may experience temporary changes
                  in energy levels during the initial days, most people can
                  maintain their regular work schedule. We provide strategies to
                  manage the program while maintaining your professional
                  commitments.
                </div>
              </div>
            </div>{" "} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
