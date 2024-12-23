import React from 'react'
import Image from 'next/image';
import ReactPlayer from 'react-player'
import style from './index.module.css'
import Navbar from "@/componants/Navbar";
import Footer from "@/componants/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Link from 'next/link';
import { useState } from 'react';

const About = () => {

 useEffect(()=>{
		  AOS.init();
	 
	 },[])
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
		
		<section className="about-area pt-120 pb-120">
			
                <div className="container">
                    <div className="row align-items-center" >
					
						
                        <div className="col-xl-7 col-lg-7">
                            <div className="position-relative pr-50"  data-aos="slide-up">

							 <Image src="/abouttt.jpg" alt="about" className="img-fluid radisuImage" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>						  
							</div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="about-right pt-15 mb-30"  data-aos="slide-up">
                                <div className="section-title-2 mb-20">
                                   <h1>AboutLorem Ipsum</h1>
                                </div>
                                <div className="about-text pr-5">
                                    <p><b>HOPE Clinic is a full-time Federally Qualified Health Center (FQHC), serving over 20,000 unique patients with over 100,000 patient visits per year.Lorem Ipsum provides health care services to all people, regardless of the patient’s ability to pay. In particular,Lorem Ipsum serves the uninsured, under-insured, those with limited English proficiency, and low-income patients. </b></p>
									<p>A unique characteristic ofLorem Ipsum is its capacity to provide services in 30 different languages, including: Mandarin, Cantonese, Vietnamese, Korean, Burmese, Arabic, and Spanish.Lorem Ipsum’s mission is to provide quality healthcare without any prejudice to all people of Greater Houston in a culturally and linguistically competent manner.
																		
									</p>
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
						<div className="services-content " data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}> 
							<div className="icon-circle pulse"><Image src="/integration.png" alt="integration" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
							<h3>Integrity</h3>
							<p>We exert professional and personal integrity in all that we do.</p>
						</div>
					</div>	
					
					<div className="col-lg-4 col-sm-6 serv1">
							<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
							<div className="icon-circle pulse"><Image src="/commitment.png" alt="commitment" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
							<h3>Commitment</h3>
							<p>We are committed 100% to closing healthcare gaps in the community.</p>
						</div>
					</div>			
					
					<div className="col-lg-4 col-sm-6 serv1">
							<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
							<div className="icon-circle pulse"><Image src="/compassion.png" alt="compassion" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
							<h3>Compassion</h3>
							<p>We value caring and respect of all individuals, especially the underserved.</p>
						</div>
					</div>			
					
					<div className="col-lg-4 col-sm-6 serv1">
								<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
								<div className="icon-circle"><Image src="/community.png" alt="community" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
								<h3>Community</h3>
								<p>We are focused on “community” and value community service.</p>
							</div>
					</div>	
					
					<div className="col-lg-4 col-sm-6 serv1">
								<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
								<div className="icon-circle pulse"><Image src="/excellence.png" alt="excellence" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
								<h3>Excellence</h3>
								<p>Our services are progressive — effective, comprehensive and of the highest quality.</p>
							</div>
					</div>	
					
					<div className="col-lg-4 col-sm-6 serv1">
								<div className="services-content" data-aos="slide-up" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}>
							 	<div className="icon-circle pulse"><Image src="/volume.png" alt="volume" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
								<h3>Fiscal Soundness</h3>
								<p>Our operations are efficient, our services affordable, and we maximize all resources.</p>
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
			
	<section className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-0 bg-Image pb-120 helpingbox" id="history">
      
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
            <div className="fancybox-item weekbx"  data-aos="slide-up">
             
              <div className="fancybox-body d-flex align-items-center">
				<div className="icon zoom-in-zoom-out"><Image src="/mission.png" alt="mission" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
                
                
				<div className="weeklist">
				<h4 className="fancybox-title">Our Mission</h4>
					<p className="box-text">To provide quality healthcare without any prejudice to all people of Greater Houston in a culturally and linguistically competent manner. </p>
				</div>
                
              </div>
              
            </div>
          </div>
          
          <div className="col-sm-6 col-d-4 col-lg-6">
            <div className="fancybox-item"  data-aos="slide-up">
             
              <div className="fancybox-body d-flex align-items-center">
			   <div className="icon zoom-in-zoom-out"><Image src="/shared-vision.png" alt="vision" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></div>
			   <div className="weeklist">
                <h4 className="fancybox-title">Our Vision </h4>
				<p>A healthy community with quality, affordable healthcare for all.</p>
                </div>
              </div>
             
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
                        <div className="call-to-action-box-layout4" data-aos="slide-up" >
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

export default About