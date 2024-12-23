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


const Registeration = () => {
 useEffect(()=>{
		  AOS.init();
	  
	 },[])
 
  return (
 
    <div>
	
     <div className="entry-banner entry-banner-after  bg-common appointment">
	  <ReactPlayer
					url="/appointment-doctor.mp4"
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
					<h1>REGISTRATION FORMS</h1>
				


				</div>
			</div>
		</div>
		</div>
		
		
		<section className="about-area pt-120 pb-120">
			
                <div className="container">
                    <div className="row align-items-center" >
					
					
                        <div className="col-xl-8 col-lg-8">
                            <div className="about-right pt-15 mb-30"  data-aos="slide-up">
                                <div className="section-title-2 mb-20">
                                   <h1>REGISTRATION FORMS
</h1>
                                </div>
                                <div className="about-text pr-5">
                                    <p>To help with the registration process, you may download the <a target="_blank" href="/Patient-Registration-Aug-2023.pdf">Patient Registration</a> Form and fill it out prior to your visit. To see if you qualify for discounted health care based on our sliding fee scale, please fill out this <a target="_blank" href="/Presumptive-Form-Fillable.pdf">Eligibility Form</a>.</p>
									<p><b>Please bring with you to your initial appointment:</b></p>
									<ul className="list-item">
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> One form of ID with current address (Driver’s License, Passport, Green Card, etc)</h4></li>
										 <li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> Insurance card if applicable</h4></li>
										 <li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> Any medications you take including vitamins</h4>
											
										</li>
										 <li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> Immunization record if applicable</h4></li>
										 <li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> For Pediatric patients, if you are not the parent, please bring proof of legal guardianship</h4>
											
										</li>
									</ul> 
									<p>For behavioral health visits, please fill out the Behavioral Health Assessment in English or Spanish to speed the intake process.</p>	
                                </div>
                                
                            </div>
                        </div>
						
						
                        <div className="col-xl-4 col-lg-4">
                            <div className="position-relative pr-50"  data-aos="slide-up">
								<ul className="list-item pdfbtn">
									<li>
										<Link target="_blank" href="/Patient-Registration-Aug-2023.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span>  PATIENT REGISTRATION FORM</Link></li>
									 <li>
										<Link target="_blank" href="/Presumptive-Form-Fillable.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span>  SLIDING FEE SCALE ELIGIBILITY FORM</Link></li>
									 <li>
										<Link target="_blank" href="/Behavioral-Health-Assessment-ENGLISH.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> BEHAVIORAL HEALTH ASSESSMENT – ENGLISH</Link>
										
									</li>
									 <li>
										<Link target="_blank" href="/Behavioral-Health-Assessment-ENGLISH.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> BEHAVIORAL HEALTH ASSESSMENT – ENGLISH</Link>
										
									</li>
									 <li>
										<Link target="_blank" href="/Consent-Forms-English-Aug-2023.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> CONSENT FORMS (ESPANOL)</Link></li>
									
									<li>
										<Link target="_blank" href="/HOPE-Clinic-Telemedicine-Consent-Form-Fillable.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span>   TELEHEALTH CONSENT FORM (ARABIC – SPANISH – URDU – VIETNAMESE)</Link>
										
									</li>
									
									<li>
										<Link target="_blank" href="/Parent-Legal-Guardian-Information-Pediatrics-Only.pdf"><span className=""><Image src="/pdf-white.png" alt="arrow" className="zoomicon" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></span> PARENT-LEGAL GUARDIAN INFORMATION (PEDIATRICS ONLY)</Link>
										
									</li>
									 
								</ul> 
							  
							</div>
                        </div>
						
                    </div>
                </div>
            </section>
			
			
		<section className="contact-wrap-layout ">
            <div className="container">
                
                <div className="row align-items-center">
                    <div className="col-lg-8">
                         <div className="position-relative pr-50"  data-aos="slide-up">
								 <Image src="/website staff 2.png" alt="about" className="img-fluid radisuImage" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								  
								</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-box-layout1" data-aos="slide-left">
                            <h3 className="title title-bar-primary4">We Embrace Linguistic Diversity</h3>
                            <p>We provide support in many languages. Let us know if you require an interpreter.</p>
							<a href="#" className="btn-red theme-btn mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		
			
		
			
			<section className="call-to-action-wrap-layout4 bg-grey">
            <div className="item-Image">
           </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="call-to-action-box-layout4"  data-aos="zoom-in">
                            <h2 className="item-title">For more information about our services or to speak with a representative from our Houston Community Clinic, please feel free to contact us or give us a call today.</h2>
                            
                            <div className="call-to-action-btn">
                                 <Link href="/appointments" className="btn-red theme-btn" ><span>Book an Appointment</span></Link>
								 <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>  <a href="tel:+17137730803" className="item-btn-phone btn-blue theme-btn"><span>Call Us: (713) 773-0803</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	
	
	
			
	  
    </div>
	
  )
}

export default Registeration