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
                      src="/hoab.jpg"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />

                    {/* <Image
                      src="/Portrait.jpg"
                      alt="aboutus"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="homedown"
                      style={{ width: "auto", height: "auto" }}
                    /> */}
                    <div className="circle-Image">
                      <Image
                        src="/harticon.png"
                        alt="circle-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pb-10">
              <div className="about-right height-aabout " data-aos="fade-right">
                <div className="section-title-2  ">
                  <h2>Our Philosophy</h2>
                </div>
                <div className="about-text  ">
                  <p>
                    At Gut Cleanse, we bridge the gap between traditional
                    medical approaches and holistic wellness. Our program
                    integrates current research in microbiome science with
                    practical, sustainable lifestyle modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-100 pb-100 bg-light-accent100">
        <div className="container">
          <div className="row">
            <h2 className="item-title text-center mb-2 ">
              Clinical Foundation
            </h2>

            <p className=" text-center mb-5 pb-4">
              Our approach is built on three core principles:
            </p>

            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <div className="radborder">
                      {" "}
                      <Image
                        src="/blood-test.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "45px", height: "auto" }}
                        alt="pharmacy"
                      />
                    </div>
                    <h2>Evidence-Based Methodology</h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      Every aspect of our program is grounded in peer-reviewed
                      research and clinical experience. We continuously update
                      our protocols based on the latest findings in gut health
                      and microbiome science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <div className="radborder">
                      {" "}
                      <Image
                        src="/primary-care.webp"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "45px", height: "auto" }}
                        alt="pharmacy"
                      />
                    </div>{" "}
                    <h2>Personalized Care </h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      We know very well that your gut tells a different story.
                      Our comprehensive program takes into account your unique
                      nutritional requirements and everyday stress factors, yet
                      it also matches your symptom trends, medical history,
                      lifestyle requirements, and cultural habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <div className="radborder">
                      {" "}
                      <Image
                        src="/cultural-activities.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "45px", height: "auto" }}
                        alt="pharmacy"
                      />
                    </div>{" "}
                    <h2>Sustainable Results </h2>
                  </div>
                  <div class="flip-box-back">
                    <p>
                      We focus on genuine, long-lasting transformation to go
                      beyond superficial remedies. By means of hands-on
                      training, skill development, and flawless lifestyle
                      integration, we lay the foundation for long-term wellness.
                      Our strategic thinking and ongoing assistance ensure that
                      your growth will last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100 pb-100 about-area">
        <div className="container">
          <div className="row gut-margin">
            <h2 className="item-title text-center mb-5 ">
              Understanding Gut Health
            </h2>
            <div className="col-lg-6 col-sm-6 mt-4">
              <div className="gut-health">
                <div className="radborder">
                  <Image
                    src="/behavior-health-icon.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "45px", height: "auto" }}
                    alt="pharmacy"
                  />
                </div>

                <h2>The Microbiome Connection </h2>

                <ul>
                  <li class="gut-health-list">Nutrient absorption </li>
                  <li class="gut-health-list">Immune system function</li>
                  <li class="gut-health-list">Hormone regulation</li>
                  <li class="gut-health-list">Neurotransmitter production</li>
                  <li class="gut-health-list">Inflammation levels </li>
                  <li class="gut-health-list">Energy metabolism </li>
                  <li class="gut-health-list">Mental health stability</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mt-4">
              <div className="gut-health">
                <div className="radborder">
                  {" "}
                  <Image
                    src="/padiatric-icon.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "45px", height: "auto" }}
                    alt="pharmacy"
                  />
                </div>

                <h2>Common Disrupting Factors</h2>
                <ul>
                  <li class="gut-health-list">Chronic stress</li>
                  <li class="gut-health-list">Processed food consumption </li>
                  <li class="gut-health-list">Antibiotic use </li>
                  <li class="gut-health-list">Neurotransmitter production</li>
                  <li class="gut-health-list">Inflammation levels </li>
                  <li class="gut-health-list">Energy metabolism </li>
                  <li class="gut-health-list">Mental health stability</li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <section className="values icon-section bg-grey pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
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
                  We are 100% committed to closing gut health gaps in the
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
                  Our Program are progressive — effective, comprehensive and of
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
                  Our operations are efficient, our program affordable, and we
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
        className="departments-wrap-layout5 bg-light-accent100"
        id="history"
      >
        <div className="container">
          {/* <div className="row">
            <div className="col-2 col-xl-1">
            <div className="heading-divider mb-3"></div>
          </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <div className="heading mb-50">
                <h3 className="heading-title color-white">Helping To Deliver Answers For Health Questions With Fixed
                Commitment To Excellence  Quality Of Our Results.</h3>
              </div>
            </div>
          </div> */}
          {/* <div className="row justify-content-end mb-30">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p className="heading-desc color-white mb-20">To provide a comfortable and safe environment for our patients,
              please avoid wearing scented perfumes or creams when visiting us.
            </p>
              <div className="certificates-container d-flex align-items-center mb-10">
             
            </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-6 col-d-4 col-lg-6" id="houroperation">
              <div className="fancybox-item weekbx" data-aos="slide-up">
                <div className="fancybox-body d-flex align-items-center">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/mission1.png"
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
                      Our goal is to transform gut health by empowering people
                      with evidence-based remedies that bring digestive harmony
                      back and release maximum wellbeing. By means of education,
                      specific guidance, and natural methods we enable
                      individuals to get past persistent health issues and
                      regain energy from within.
                      <br />
                      <br />{" "}
                    </p>
                    <p>{""}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-d-4 col-lg-6">
              <div className="fancybox-item" data-aos="slide-up">
                <div className="fancybox-body d-flex align-items-center">
                  <div className="icon zoom-in-zoom-out">
                    <Image
                      src="/vission22.png"
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
                      Be the global leader in gut health revolution, building a
                      society in which digestive wellness is seen as the basis
                      of human life. We see societies flourishing with balanced
                      microbiomes, where natural healing blossoms and drug
                      reliance falls. Our method will establish new benchmarks
                      in holistic wellness instruction, thus allowing everyone
                      to have gut-oriented wellbeing at reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className=" departments-wrap-layout5  ">
        <div class="container">
          <div class="faq-header">
            <h2 class=" ">About Gut Health</h2>
          </div>
          <div class="accordion mt-8 mb-5" id="faqAccordion">
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
            <div class="accordion-item">
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
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  What kind of support is available?
                </button>
              </h2>
              <div
                id="collapse1"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  We provide multiple layers of support:
                  <br /> • WhatsApp support
                  <br /> • Emergency support protocols for one on one programs.
                  <br /> • Written guides and resources
                  <br /> • Recipe database access
                  <br /> • Post-program maintenance support
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  Are the dietary changes difficult to maintain?
                </button>
              </h2>
              <div
                id="collapse2"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Our program emphasizes gradual, sustainable changes rather
                  than extreme restrictions. We provide:
                  <br /> • Practical meal plans
                  <br /> • Easy-to-follow recipes
                  <br /> • Meal prep tips
                  <br /> • Dining out strategies
                  <br /> • Family-friendly options
                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  What about special dietary requirements?

                </button>
              </h2>
              <div
                id="collapse3"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  We accommodate various dietary needs, including:<br />
                  • Vegetarian/Vegan<br />
                  • Gluten-free<br />
                  • Dairy-free<br />
                  • Cultural food preferences<br />
                  • Common allergies

                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  When will I start seeing results?

                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">

                  While everyone's experience is different:<br />
                  • Many notice reduced bloating within the first week<br />
                  • Energy improvements often begin in days 5-10<br />
                  • Bowel movements typically normalize within the first week<br />
                  • Mood improvements often occur by week 2<br />
                  • Long-term benefits continue to develop over several weeks

                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  How can I maintain results after the program?

                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  We provide comprehensive post-program support:<br />
                  • Detailed maintenance guide<br />
                  • Reintroduction protocols<br />
                  • Long-term dietary guidelines<br />
                  • Lifestyle maintenance strategies<br />
                  • Ongoing group support options<br />
                  • Follow-up consultation opportunities

                </div>
              </div>
            </div>{" "}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapseTe"
                >
                  What if I experience difficulties during the program?

                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  We provide robust support for challenges:
                  <br />
                  • Direct access to specialists
                  <br />
                  • Emergency protocols for symptom flare-ups
                  <br />
                  • Modification options for difficult transitions
                  <br />
                  • Alternative strategies when needed
                  <br />
                  • Emotional support resources
                  <br />
                  • Practical problem-solving guidance

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
                  Is there a best time to start?
                </button>
              </h2>
              <div
                id="collapseTe"
                class="accordion-collapse collapse"
                aria-labelledby="headingTe"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Consider starting when:<br />
                  •
                  You can focus on self-care<br />
                  •
                  Major work projects are manageable<br />
                  •
                  Social commitments are lighter<br />
                  •
                  You have adequate support at home<br />
                  •
                  You're ready for positive change

                </div>
              </div>
            </div>{" "}

          </div>
        </div>
      </section>    <section className="pt-100 pb-100 bg-light-accent100">
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
    </div>
  );
};

export default About;
