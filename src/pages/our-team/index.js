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
import Gallery from "@/componants/Gallery";
import { portfolioItems } from "@/componants/data";
import Link from 'next/link';

export default function Home({ items }) {
	
	   useEffect(()=>{
		  AOS.init();
	  
	 },[])
  return (
    <div>
	 
      <div className="entry-banner entry-banner-after  bg-common bg-Image teamimage">
			<div className="inner-page-banner breadcrumbs-off">	
			<div className="container">
				<div className="entry-banner-content breadcrumbs-area">
					<h1>OUR TEAM</h1>
				

				</div>
			</div>
		</div>
		</div>
		
		<section className="about-area teamsection pt-120 pb-120">
			
                <div className="container">
                    <div className="row align-items-center">
						
						<Gallery items={items} />
                    </div>
                </div>
            </section>
			
		<section className="call-to-action-wrap-layout4">
            <div className="item-Image">
           </div> 
           
            {/* jjjjk fregmtkhmk */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="call-to-action-box-layout4"  data-aos="zoom-in">
                            <h2 className="item-title">For more information about our services or to speak with a representative from our Houston Community Clinic, please feel free to contact us or give us a call today.</h2>
                            
                            <div className="call-to-action-btn"> 
                              
                               {/* hfdjhgfdghjd */}
                                 <Link href="/appointments" className="btn-red theme-btn" ><span>Book an Appointment</span></Link>
								 <span class="or">&nbsp; &nbsp;or&nbsp;&nbsp;</span>  <a href="tel:+17137730803" className="item-btn-phone btn-blue theme-btn"><span>Call Us: (713) 773-0803</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
	
	
	
	
  );
}

export async function getStaticProps() {
  return {
    props: {
      items: portfolioItems,
    },
  };
}