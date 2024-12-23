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
	 
      <div className="entry-banner entry-banner-after  bg-common bg-Image">
			<div className="inner-page-banner breadcrumbs-off">	
			<div className="container">
				<div className="entry-banner-content breadcrumbs-area">
					<h1>February Progress on Our New Location</h1>
				

				</div>
			</div>
		</div>
		</div>
		
		<section className="about-area newsdetail pt-120 pb-120">
			
                <div className="container">
                    <div className="row ">
					
						
                        <div className="col-xl-8 col-lg-8 col-md-8">
                              <h2>February Progress on Our New Location</h2>
							  <p className="author-position">by Crystal Galvan | Mar 8, 2022</p>
							  <p>Take a look at aerial footage on the progress that has been made at our new location, T.T. and W.F. Chao Foundation HOPE Health and Wellness Center. They are starting work on our third story as we write this! We can’t believe how quickly it is taking shape. </p>
							  <iframe src="https://www.youtube.com/embed/ggmbu4a-sZQ?feature=oembed" ></iframe>
							
                        </div>
                        
						
						<div className="col-xl-4 col-lg-4 col-md-6">
						  <div class="widget">
                            <h3>Latest News</h3>
							<ul>
							  <li><Image src="/news1.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>February Progress on Our New Location</h4></li>
							  <li><Image src="/news2.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>Brother and Sister Donate to Leave Your Legacy Campaign</h4></li>
							  <li><Image src="/news3.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>January Progress on Our New Location</h4></li>
							  <li><Image src="/news4.jpg" alt="news1" className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
							  <h4>Progress at Our New Construction Site</h4></li>
							  
							</ul>
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