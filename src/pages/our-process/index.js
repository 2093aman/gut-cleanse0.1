import React from 'react'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from 'next/link';

const ourProcess = () => {

	useEffect(() => {
		AOS.init();

	}, [])

	return (

		<div>

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
                                        <h1>Our Process</h1>
                                        {/* <p>At HOPE Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
                                        {/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}
            
                                    </div>
                                </div>
                            </div>
                        </div>

			{/* servicess  */}

            <section className='departments-wrap-layout5 bg-light-accent100 services-area serviceWrapper'>

                <div className='row'>
                    <div className='col'>
                    <h2 className="item-title text-center  ">Our Process</h2>
                    </div>
                </div>
            </section>

			<section classNameName="fancybox-layout1  departments-wrap-layout5 bg-light-accent100 services-area serviceWrapper pt-120 pb-120  otherserv" >
			</section>
            <section className="our-blog p-0 m-0 bg-silver">
        <div className="container work-process pb-5 pt-5 mt-5 mb-5">
          <div className="title mb-5 text-center">
          

          </div>
          {/* <!-- ============ step 1 =========== --> */}
          <div className="row processc">
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">01</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small
                        >Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right"></div>
            </div>
          </div>
          {/* <!-- ============ step 2 =========== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div className="process-point-left"></div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div
                className="process-box process-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">02</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small
                        >Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          {/* <!-- ============ step 3 =========== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">03</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small
                        >Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right"></div>
            </div>
          </div>
          {/* <!-- ============ step 4 =========== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div className="process-point-left"></div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div
                className="process-box process-right"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">04</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small
                        >Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          {/* <!-- ============ step 3 =========== --> */}
          <div className="row">
            <div className="col-md-12 col-lg-5 col-sm-12 col-xm-12">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">05</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right process-last"></div>
            </div>
          </div>
          
        </div>
      </section>

			{/* servicess  */}
			


			<section className="call-to-action-wrap-layout4">
				<div className="item-Image">
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-12">
							<div className="call-to-action-box-layout4" data-aos="zoom-in">
								<h2 className="item-title">For more information about our services or to speak with a representative from our Houston Community Clinic, please feel free to contact us or give us a call today.</h2>

								<div className="call-to-action-btn">
									<Link href="#" className="btn-red theme-btn"><span>Book an Appointment</span></Link>
									<span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>  <Link href="tel:+17137730803" className="item-btn-phone btn-blue theme-btn"><span>Call Us: (713) 773-0803</span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

	)
}

export default ourProcess;