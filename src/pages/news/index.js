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

const News = () => {
   useEffect(()=>{
		  AOS.init();
	  
	 },[])
 
  return (
 
    <div>
	
      <div className="entry-banner entry-banner-after  bg-common bg-Image newsss">
			<div className="inner-page-banner breadcrumbs-off">	
			<div className="container">
				<div className="entry-banner-content breadcrumbs-area">
					<h1>NEWS</h1>
				

				</div>
			</div>
		</div>
		</div>
		
		<section className="about-area teamsection pt-120 pb-120">
			
                <div className="container">
                    <div className="row align-items-center">
					
						
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news1.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>February Progress on Our New Location</h4>
							  <p className="author-position">by Crystal Galvan | Mar 8, 2022</p>
							  <p>Take a look at aerial footage on the progress that has been made at our new location, T.T. and W.F. Chao Foundation HOPE Health and Wellness Center. </p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
							</div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news2.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>Brother and Sister Donate to Leave Your Legacy Campaign</h4>
							  <p className="author-position">byLorem Ipsum | Feb 21, 2022</p>
							  <p>Construction is underway atLorem Ipsum&apos;s new location, the T.T. and W.F. Chao Foundation HOPE Health and Wellness Center! The `&quotLeave Your Legacy`&quot brick. </p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
							</div>
                        </div>
						<div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news3.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>January Progress on Our New Location</h4>
							  <p className="author-position">by Crystal Galvan | Feb 4, 2022</p>
							  <p>Enjoy the current progress on our new location, T.T. and W.F. Chao Foundation HOPE Health and Wellness Center that is scheduled to open in November of this</p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
							</div>
                        </div>
						<div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news4.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>Progress at Our New Construction Site</h4>
							  <p className="author-position">by Crystal Galvan | Jan 19, 2022</p>
							  <p>We are still on schedule for November 2022 grand opening. The construction site shared this time-lapse of the tilt wall panels going up at our </p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
							</div>
                        </div>
						<div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news5.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>Dr. Kristen Roeder LeavingLorem Ipsum</h4>
							  <p className="author-position">byLorem Ipsum | Jan 4, 2022</p>
							  <p>Thank you for choosingLorem Ipsum West as the provider for your family’s health and wellness needs. As in any career or business</p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
							</div>
                        </div>
						<div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="teaminfo" data-aos="slide-up">
							 <Image src="/news4.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>HOPE Clinic on VIETV</h4>
							  <p className="author-position">byLorem Ipsum | Dec 3, 2021</p>
							  <p>RecentlyLorem Ipsum&apos;s Outreach Specialist Yen Ly joined VIETV to discuss the services offered atLorem Ipsum, the COVID vaccine, and the upcoming T.T. </p>
							  <Link class="btn-red " href="/news-detail">Read More</Link>
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

export default News