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

const login = () => {

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

			{/* login  */}

            <section class="section-height">
      <div class="card">
        <div class="left-side d-none d-md-block col-md-6">
          <h1>HELLO WORLD.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <button class="btn btn-primary">Sign Up</button>
        </div>
        <div class="right-side col-12 col-md-6">
          <div class="card-body">
            <div class="text-center mb-4">
              <i class="fas fa-layer-group fa-3x" style={{color:'#ff4081'}}></i>
            </div>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary">Login</button>
                <a href="#" class="forgot-password">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

			{/* login  */}
			


		</div>

	)
}

export default login;