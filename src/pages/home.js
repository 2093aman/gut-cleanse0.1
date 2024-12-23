import React from 'react'
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CountUp, { useCountUp } from 'react-countup';
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on youfff.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on youfff.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const home = () => {
    return (

        <div>

            <div className="bar show">
                <div className="bar__grid">
                    <a className="bar__link" href="#aboutus">ABOUT US</a>
                    <a className="bar__link" href="#healthcare">HEALTHCARE</a>
                    <a className="bar__link" href="#services">SERVICES</a>
                    <a className="bar__link" href="#support">SUPPORT</a>

                </div>
            </div>

            <div className="banner-section">
                <ReactPlayer
                    url="home/homevideo.mp4"
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

                            <h1 data-aos="fade-up">Serving Our Community</h1>
                            <p className="mt-3" data-aos="fade-up">Providing quality healthcare in a culturally and linguistically appropriate manner in over 30 languages.</p>
                            <a href="#" className="btn-red mt-4 hombnr" data-bs-toggle="modal" ><span>Get Started</span></a>
                            <a href="#" className="btn-red mt-4 " data-bs-toggle="modal" ><span>Contact Us</span></a>


                        </div>

                    </div>
                </div>

            </div>


            


            <section className="bannerbelow-area">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-xl-4 col-lg-4 bg-darkred text-white p-20 d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="counterbtnHome me-4" data-aos="zoom-in"> <h3><CountUp end={99} enableScrollSpy /></h3></div>
                                <div className="flex-cont">
                                    <h3><Link href="/contactus">Contact Us</Link></h3>
                                    <p className="mb-0">Reach Out for Exceptional Care</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-xl-4 col-lg-4 bg-lightblue text-white p-20">
                            <div className="d-flex align-items-center">
                            <div className="counterbtnHome me-4" data-aos="zoom-in"> <h3><CountUp end={99} enableScrollSpy /></h3></div>
                                <div className="flex-cont">
                                    <h3><Link href="/locations">Locations</Link></h3>
                                    <p className="mb-0">Your Path to Better Health</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 bg-darkred text-white p-20">
                            <div className="d-flex align-items-center">
                            <div className="counterbtnHome me-4" data-aos="zoom-in"> <h3><CountUp end={99} enableScrollSpy /></h3></div>
                                <div className="flex-cont">
                                    <h3><Link href="/services">Services</Link></h3>
                                    <p className="mb-0">Wide Variety of Services</p>
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
                                        <Image src="/hohg.jpg" alt="aboutus" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                        <Image src="/hodown.jpg" alt="aboutus" width={0} height={0} sizes="100vw" className='homedown' style={{ width: 'auto', height: 'auto' }} />
                                        <div className="circle-Image"> <Image src="/circle-logo.png" alt="circle-logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 pb-10">
                            <div className="about-right pt-15 mb-30 homeab" data-aos="fade-right">
                                <div className="section-title-2 mb-20">
                                    <h2>About HOPE Clinic</h2>
                                </div>
                                <div className="about-text pr-5">
                                    <p>Our clinic is exactly what we think healthcare should be in the United States, and that starts with accepting multiple payment options and working with those who are underinsured or uninsured. <br /><br /> We are an affordable  clinic in Houston, TX, because we believe money should never stand between you and the care you deserve.</p>
                                </div>
                                <ul className="counter-list pt-25 mb-4">
                                    <li>
                                    <h3><CountUp end={1000} enableScrollSpy />+</h3>  

                                        <p>Unique Patients</p>
                                    </li>
                                    <li>
                                        <h3><CountUp end={90} enableScrollSpy />+</h3>
                                        <p>Patients Birth Countries</p>
                                    </li>
                                    <li>
                                        <h3><CountUp end={58} enableScrollSpy />+ </h3>
                                        <p>Language Served</p>
                                    </li>
                                </ul>
                                <div className='abutHomebtn'>
                                <Link href="/about" className="btn-red theme-btn mt-4"><span>VIEW MORE</span></Link>
                                </div>
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
                                        <div className="item-content-inner content-light" data-aos="fade-up">
                                            <h2 className="item-title">This Is What Healthcare Should Look Like</h2>
                                            <p>Our clinic is exactly what we think healthcare should be in the United States, and that starts with accepting multiple payment options and working with those who are underinsured or uninsured. </p>
                                            <ul className="list-item">
                                                <li>
                                                    <h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Cultural Competency and Language Access</h4>

                                                </li>
                                                <li>
                                                    <h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Comprehensive and Integrated Care</h4>

                                                </li>
                                                <li>
                                                    <h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Affordable and Accessible Care</h4>

                                                </li>
                                                <li>
                                                    <h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Compassion</h4>

                                                </li>
                                            </ul>
                                            <Link href="/about#history" className="btn-red theme-btn mt-4">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-inner-wrapper" data-aos="fade-up">
                        <Image src="/Health-home.jpg" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} alt="aboutus1" />
                    </div>
                </div>

            </section>

            <section className="departments-wrap-layout5 bg-light-accent100" id="services">
                <div className="container">
                    <div className="row gutters-20">
                        <h2 className="item-title text-center mb-60">How We Serve</h2>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 adtmed">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/primary-care-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="primary-care" /></div>
                                    <h3 className="item-title"><Link href="/adult-medicine">Adult Medicine </Link></h3>
                                    <p>Adult medicine is key to maintaining overall health and managing a wide range of medical conditions throughout adulthood. </p>
                                    <Link href="/adult-medicine" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 pedcare">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/padiatric-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="padiatric" /></div>
                                    <h3 className="item-title"><Link href="/pediatric-care-services">Pediatric Care</Link></h3>
                                    <p>Pediatric care is essential for monitoring and supporting the health and development of children from infancy through adolescence.</p>
                                    <Link href="/pediatric-care-services" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
                            <div className="departments-box-layout4 wmser">
                                <div className="box-content">
                                    <div className="radborder"><Image src="/women-service-icon.png" width={0} height={0} sizes="100vw" style={{ width: '56px', height: 'auto' }} alt="women-service" /></div>
                                    <h3 className="item-title"><Link href="/ob-gyn">Women’s Health (OB/GYN)</Link></h3>
                                    <p>Women&apos;s health care is vital for addressing the unique medical needs of women at every stage, and management of common . </p>
                                    <Link href="/ob-gyn" className="link">Learn More</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="zoom-in">
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
                        </div>

                    </div>
                </div>
            </section>

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
                                    responsive={responsive1}>
                                    <div>
                                        <p>&quot;Dr. Huda Tsihira-Senga did a great job with my baby’s first health exam. She explained everything to me in a very clear manner.  Especially loved how Dr. Huda really took her time to explain my baby’s conditionto me. I had a great visit. The staff and Dr. Huda were all very friendly and helpful, I highly recommend Dr Huda.&quot;</p>
                                        <p><b>Mrs. Yolanda Vasquez</b></p>


                                    </div>
                                    <div>
                                        <p>&quot;The nurse is always so nice.  My son has special needs… She always treats him with so much respect.  DR. KHOA PHAM is awesome.  He treats my son with great respect, and he has a lot of patience. My son is very comfortable.  Thank you, Dr. Pham and his nurse.&quot; </p>
                                        <p><b>Andrea Laskoskie</b></p>
                                    </div>
                                    <div>
                                        <p>&quot;Desde mi primera visita quedé muy a gusto con la clínica pues todo el personal es muy atento y súper amable, dispuestos a ayudar e informar a cada paciente, son un 100 excelente servicio.&quot;</p>
                                        <p><b>M G</b></p>
                                    </div>



                                    <div>
                                        <p>&quot;Stephanie Gonzalez at the front desk was amazing and made sure I took the best care for me and my daughter. Dr. Krenek took her time to see my child and answer all my questions. Everyone was super nice and understanding.&quot;</p>
                                        <p><b>Carolyn Tryon</b></p>
                                    </div>

                                    <div>
                                        <p>&quot;From the front desk to the vitals check to the Lab Tech, and last but not least, the Awesome Provider, this HOPE Clinic staff of friendly professionals is totally fantastic, couldn’t get better in my opinion, Thank you all ladies!&quot;</p>
                                        <p><b>Ashley Tran  </b></p>
                                    </div>

                                    <div>
                                        <p>&quot;It is the second visit I have made, and I am very happy with the service, and the doctor, I plan to change with my family and continue with HOPE Clinic for my visits each year, and my primary doctors, thank you!&quot;</p>
                                        <p><b>Angela Lopez</b></p>
                                    </div>
                                </Carousel>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bannerbelow-area carouselSlider">

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
            </section>

            <section className="call-to-action-wrap-layout4">
                <div className="item-Image">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                            <div className="call-to-action-box-layout4" data-aos="zoom-in">
                                <h2 className="item-title">For more information about our services or to speak with a representative from our Houston Community Clinic, please feel free to contact us or give us a call today.</h2>

                                <div className="call-to-action-btn">
                                     <Link href="/appointments" className="btn-red theme-btn" ><span>Book an Appointment</span></Link>
                                    <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>  <a href="tel:7137730803" className="item-btn-phone btn-blue theme-btn"><span>Call Us: (713) 773-0803 </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default home
