import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp, { useCountUp } from "react-countup";
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

const home = () => {
  return (
    <div>
      <div className="banner-section">
        <ReactPlayer
          url="home/homevideoiuu.mp4"
          playing={true}
          autoplaying={true}
          loop={true}
          muted={true}
          playsinline={true}
          width={"100%"}
          height={"100%"}
          webkit-playsinline={true}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 data-aos="fade-up">
                Restore Your Digestive Balance, Reclaim Your Vitality{" "}
              </h1>
              <p className="mt-3" data-aos="fade-up">
                Experience the transformative power of evidence-based gut
                healing through our clinically-informed programs & workshops,
                designed by digestive health specialists
              </p>
              <a
                href="/about"
                className="btn-red mt-4 hombnr"
                data-bs-toggle="modal"
              >
                <span>About Us </span>
              </a>
              <a href="#" className="btn-red mt-4 " data-bs-toggle="modal">
                <span>Enroll now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="bannerbelow-area">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-4 col-lg-4 bg-darkred text-white p-20 d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="counterbtnHome me-4" data-aos="zoom-in">
                                    {" "}
                                    <h3>
                                        <CountUp end={1200} enableScrollSpy />+
                                    </h3>
                                </div>
                                <div className="flex-cont">
                                    <h3>
                                        <Link href="/our-process">Our Process</Link>
                                    </h3>
                                    <p className="mb-0">People healed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 bg-lightblue text-white p-20">
                            <div className="d-flex align-items-center">
                                <div className="counterbtnHome me-4" data-aos="zoom-in">
                                    {" "}
                                    <h3>
                                        <CountUp end={21} enableScrollSpy />+
                                    </h3>
                                </div>
                                <div className="flex-cont">
                                    <h3>
                                        <Link href="/our-program"> Our Program</Link>
                                    </h3>
                                    <p className="mb-0">Countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 bg-darkred text-white p-20">
                            <div className="d-flex align-items-center">
                                <div className="counterbtnHome me-4" data-aos="zoom-in">
                                    {" "}
                                    <h3>
                                        <CountUp end={99} enableScrollSpy />% +
                                    </h3>
                                </div>
                                <div className="flex-cont">
                                    <h3>
                                        <Link href="/contactus">Contact Us</Link>
                                    </h3>
                                    <p className="mb-0">Language Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
                    <Image src="/harticon.png" alt="circle-logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                    </div>
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
                <ul className="counter-list pt-25 mb-4">
                  <li>
                    <h3>
                      <CountUp end={1200} enableScrollSpy />+
                    </h3>

                    <p>People healed</p>
                  </li>
                  <li>
                    <h3>
                      <CountUp end={21} enableScrollSpy />+
                    </h3>
                    <p>Countries</p>
                  </li>
                  <li>
                    <h3 >
                      <CountUp  end={99} enableScrollSpy />
                      %+{" "}
                    </h3>
                    <p>Satisfaction</p>
                  </li>
                </ul>
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
      <section className="departments-wrap-layout5 bg-light-accent100">
        <div className="container  ">
          <div className="row ">
            <div className="col-md-6">
              <Image
                src="/digestive.jpeg"
                alt="arrow"
                className="digestive"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="col-md-6 digestive-text">
              <div className="section-title-2 mb-20">
                <h2>Understanding Your Digestive Health Journey</h2>
              </div>
              <div className="about-text pr-5">
                <p className="mb-3">
                Living with chronic digestive issues isn't just about physical discomfort—it impacts every aspect of your life. From the anxiety of planning meals to the frustration of unpredictable symptoms like bloating, gas, and indigestion, gut health challenges can feel overwhelming. We understand. That's why our integrated approach focuses on more than just masking symptoms; we delve into the root causes of your digestive distress to help you improve gut health naturally. Through our specialized gut cleanse programs, we address imbalances in your gut microbiome, supporting optimal digestive health and helping you reclaim control of your well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-wrap-layout1" id="healthcare ">
        <div className="features-box-layout1 d-lg-flex  ">
          <div className="item-inner-wrapper leftbxImage">
            <div className="item-content d-flex align-items-center">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div
                      className="item-content-inner content-light"
                      data-aos="fade-up"
                    >
                      <h2 className="item-title">
                        The Hidden Impact of Gut Dysbiosis
                      </h2>
                      <p>
                        Recent clinical research has revealed that gut health
                        influences far more than digestion. Your digestive
                        system houses over 70% of your immune system and
                        produces 90% of your body's serotonin – the "happiness
                        hormone." When gut bacteria fall out of balance
                        (dysbiosis), it can trigger a cascade of health issues:
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
                            </span>{" "}{" "}{" "}
                            Chronic inflammation and bloating
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
                            </span>{" "}{" "}{" "}
                            Compromised nutrient absorption
                          </h4>
                        </li>{" "}{" "}{" "}
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
                            </span>{" "}{" "}{" "}
                            Irregular bowel movements
                          </h4>
                        </li>{" "}
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
                            </span>{" "}{" "}{" "}
                            Mood fluctuations and anxiety
                          </h4>
                        </li>{" "}
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
                            </span>{" "}{" "}{" "}
                            Hormonal imbalances
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
                            </span>{" "}{" "}{" "}
                            Unexplained weight changes
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
                            </span>{" "}{" "}{" "}
                            Skin problems and inflammation{" "}
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
                            Autoimmune responses{" "}{" "}{" "}
                          </h4>
                        </li>
                      </ul>
                      <Link
                        href="/about#history"
                        className="btn-red theme-btn mt-4"
                      >
                        Enroll now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-inner-wrapper imageset-hom" data-aos="fade-up">
            <Image
              src="/intestine-problem.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              alt="aboutus1"
            />
          </div>
        </div>
      </section>

      <section
        className="departments-wrap-layout5 bg-light-accent100"
        id="services"
      >
        <div className="container">
          <div className="row gutters-20">
            <h2 className="item-title text-center mb-60">Our Programs</h2>

            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="zoom-in"
            >
              <div className="departments-box-layout4 pedcare">
                <div className="box-content">
                  <div className="radborder">
                    <Image
                      src="/padiatric-icon.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "56px", height: "auto" }}
                      alt="padiatric"
                    />
                  </div>
                  <h3 className="item-title">
                    <Link href="/our-program">Gut Reset Revolution™</Link>
                  </h3>
                  <p>
                    Transform your relationship with health through our
                    signature wellness program, crafted from over a decade of
                    clinical success stories. We don't just address symptoms –
                    we help you unlock lasting vitality by harmonizing your gut
                    health, hormone balance, and mindful eating practices.
                  </p>
                  <Link href="/our-program" className="link">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="zoom-in"
            >
              <div className="departments-box-layout4 wmser">
                <div className="box-content">
                  <div className="radborder">
                    <Image
                      src="/behavior-health-icon.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "56px", height: "auto" }}
                      alt="women-service"
                    />
                  </div>
                  <h3 className="item-title">
                    <Link href="/our-program">Gut & Glory™</Link>
                  </h3>
                  <p>
                    Stop letting digestive issues control your life. Our Gut &
                    Glory™ program helps you break free from constant bloating,
                    weird food reactions, and that frustrating afternoon energy
                    crash. In just 14 days, you'll discover how amazing you can
                    feel when your gut works with you, not against you.
                  </p>
                  <Link href="/our-program" className="link">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="zoom-in"
            >
              <div className="departments-box-layout4 wmser">
                <div className="box-content">
                  <div className="radborder">
                    <Image
                      src="/primary-care.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "56px", height: "auto" }}
                      alt="women-service"
                    />
                  </div>
                  <h3 className="item-title">
                    <Link href="/our-program">Gut Intelligence Workshop</Link>
                  </h3>
                  <p>
                  Your gut is more than just a digestive system - it's your body's second brain and command center for total wellness. In this transformative workshop, dive deep into the fascinating world of your microbiome and discover how it orchestrates everything from your immune response to your emotional wellbeing.
                  </p>
                  <Link href="/our-program" className="link set-btm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 behealth">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/behavior-health-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="behavior-health" /></div>
                                    <h3 className="item-title"><Link href="/behavioral-health-services">Behavioral Health</Link></h3>
                                    <p>Our specialized services include treatment and medication management, along with counseling, all provided in multiple languages.</p>
                                    <Link href="/behavioral-health-services" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 dencare">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/dental-care-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="dental" /></div>
                                    <h3 className="item-title"><Link href="/dental-services">Dental Care</Link></h3>
                                    <p>Dental care includes routine check-ups, cleanings, and preventive treatments to maintain optimal oral health.</p>
                                    <Link href="/dental-services" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 eyecare">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/eye-care-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="education-icon" /></div>
                                    <h3 className="item-title"><Link href="/vision-care">Vision Care</Link></h3>
                                    <p>Our vision care services include thorough eye exams to assess vision and eye health, prescription eyewear fittings.</p>
                                    <Link href="/vision-care" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 lbr">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/blood-test.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="eye-care" /></div>
                                    <h3 className="item-title"><Link href="/laboratory-services">Laboratory Services </Link></h3>
                                    <p>Our clinic’s laboratory services offer accurate and timely diagnostic testing to support your health and wellness.</p>
                                    <Link href="/laboratory-services" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 phrm">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/pharmacy-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="pharmacy" /></div>
                                    <h3 className="item-title"><Link href="/pharmacy">Pharmacy</Link></h3>
                                    <p>Our pharmacy offers comprehensive services to meet your medication needs. We provide prescription fulfillment.</p>
                                    <Link href="/pharmacy" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>

      {/* here is the Health Journey */}

      {/* here is the Health Journey */}
      <section className="banner-wrap-layout1 parallaxie" id="support">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-7 col-lg-4 col-md-10 col-12"></div> */}
            <div className="col-xl-12 col-lg-8 col-md-10 col-12">
              <div className="banner-box-layout1" data-aos="fade-up">
                <h2 className="item-title">What Our Clients Are Saying</h2>
                <Carousel
                  autoPlay={true}
                  draggable={true}
                  infinite={true}
                  autoPlaySpeed={6000}
                  responsive={responsive1}
                >
                  <div>
                    <p>
                      I recently went through a surgery and my gut was
                      completely out of wack. Nancy was instrumental in helping
                      heal my gut issues. The diet plan and recipes shared by
                      her are super easy to follow. In addition to that I lost 3
                      kgs. I feel way better, less bloated and over all
                      energetic. Thank you Nancy for being such an awesome and
                      empathetic health coach !
                    </p>
                    <p>
                      <b>Sowmya</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      I had a major bloating issue since a few years… nothing
                      seemed to be working till the time I joined Nancy for the
                      gut cleansing diet and that is when the magic happened… it
                      was a very doable diet which helped me find out that milk
                      was not suiting me at all which led to severe bloating…
                      with Nancy’s diet I got rid of this problem… since then I
                      never had bloating again and now I can easily enjoy my
                      cold coffee everyday… thank you Nancy… you’ve been a
                      saviour 🙏❤️🙏
                    </p>
                    <p>
                      <b>Kannu</b>
                    </p>
                  </div>
                  <div>
                    <p>
                      Nancy's gut cleanse is the best thing that i did. I was
                      extremely bloated with breathing issues. Had gone to
                      multiple doctors who prescribed many medicines which
                      didn't seem right. After 3 months of trying I tried
                      Nancy's gut cleanse and to my surprise the problem I was
                      facing reduced 90%. I highly recommend her 2 week gut
                      cleanse practice to every one
                    </p>
                    <p>
                      <b>Ankur </b>
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bannerbelow-area carouselSlider">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 bg-darkblue text-center text-white p-20">
                            <div className="awardsflex" data-aos="zoom-in">
                                <h2 className="item-title text-center text-white">Awards & Accreditations</h2>
                                <Carousel
                                    autoPlay={true}
                                    draggable={true}
                                    infinite={true}
                                    autoPlaySpeed={2500}
                                    responsive={responsive}>



                                    <div><Image src="/award4.png" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '158px', height: 'auto' }} className="img-fluid" /></div>

                                    <div className="whitebx"><Image src="/FQHC-logo_transparent.png" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '158px', height: 'auto' }} className="img-fluid" /></div>

                                    <div><Image src="/PCMH-logo.png" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '188px', height: 'auto' }} className="img-fluid" /></div>

                                    <div className="whitebx seal"><Image src="/FTCA-Seal.jpg" alt="logo" width={0} height={0} sizes="100vw" style={{ width: '158px', height: 'auto' }} className="img-fluid" /></div>
                                </Carousel>
                            </div>

                        </div>

                    </div>
                </div>
            </section>           */}

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
    </div>
  );
};

export default home;
