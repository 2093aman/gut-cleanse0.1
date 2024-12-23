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

const Service = () => {

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
							<h1>Services</h1>
							{/* <p>At HOPE Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience.</p> */}
							{/* <Link href="#" className="btn-red theme-btn  mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get Started</span></Link> */}

						</div>
					</div>
				</div>
			</div>





			{/* <section className="departments-wrap-layout5 bg-light-accent100 services-area serviceWrapper"  id="services">
            <div className="container">
                <div className="row gutters-20">
					<h2 className="item-title text-center ">How We Serve</h2>
					 <p className="font-36 mb-60">HOPE Clinic is a full-service Federally Qualified Health Center (FQHC) offering evidence-based and data-driven healthcare to the Greater Houston community. Our comprehensive services include pediatric and adult primary care, women’s health, behavioral health, dental care, vision services, and preventive care, as well as chronic disease management. Additionally, we provide specialty care, including nutrition counseling, maternal health, immunizations, lab services, and social support programs. HOPE Clinic is dedicated to serving all individuals, regardless of their ability to pay, and takes pride in delivering culturally competent care in over 30 languages, ensuring everyone has access to quality healthcare.</p>
						
                    <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-left">
							<div className="services-Image">
								<Link href="/adult-medicine">
									<Image src="/telehealth-new.jpg" alt="primarycare" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/adult-medicine">Adult Medicine  </Link></h3>
								<p>Adult medicine is key to maintaining overall health and managing a wide range of medical conditions throughout adulthood. Timely and thorough care is crucial for preventing illness, managing chronic conditions, and addressing acute health issues. </p>
								<Link href="/adult-medicine" className="link">Learn More</Link>
							</div>
						</div>
					</div>
					 <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-right">
							<div className="services-Image">
								<Link href="/pediatric-care-services">
									<Image src="/Wellness Check-Upsyyt.jpg" alt="primarycare" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/pediatric-care-services">Pediatric Care </Link></h3>
								<p>Pediatric care is essential for monitoring and supporting the health and development of children from infancy through adolescence. Timely evaluations and interventions are crucial for addressing growth milestones, managing common illnesses, and providing preventive care.  </p>
								<Link href="/pediatric-care-services" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
                    <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-up">
							<div className="services-Image">
								<Link href="/ob-gyn">
									<Image src="/Centering-ygt.jpg" alt="primarycare" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/ob-gyn">Women&apos;s Health (OB/GYN)</Link></h3>
								<p>Women&apos;s health care is vital for addressing the unique medical needs of women at every stage of life. Timely and comprehensive care is essential for managing reproductive health, prenatal care, and conditions specific to women.</p>
								<Link href="/ob-gyn" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-up">
							<div className="services-Image">
								<Link href="/behavioral-health-services">
									<Image src="/medication-management.jpg" alt="primarycare" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/behavioral-health-services">Behavioral Health </Link></h3>
								<p>Our specialized services include treatment and management by medications and counselling services - care provided in multiple languages. </p>
								<Link href="/behavioral-health-services" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
                   <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-right">
							<div className="services-Image">
								<Link href="/dental-services">
									<Image src="/dental-fillng.jpg" alt="dental-ser" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/dental-services">Dental Care  </Link></h3>
								<p>Dental care includes routine check-ups, cleanings, and preventive treatments to maintain optimal oral health. Our services also encompass restorative procedures, such as fillings and crowns, as well as cosmetic enhancements to improve the appearance of your smile.</p>
								<Link href="/dental-services" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
					
					
                    <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-left">
							<div className="services-Image">
								<Link href="/vision-care">
									<Image src="/visionqw.jpg" alt="primarycare" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/vision-care">Vision Care </Link></h3>
								<p>Our vision care services include thorough eye exams to assess vision and eye health, prescription eyewear fittings, and management of common eye conditions. We offer a range of corrective lenses, including glasses and contact lenses, as well as treatments for conditions such as glaucoma and cataracts </p>
								<Link href="/vision-care" className="link">Learn More</Link>
							</div>
						</div>
					</div>
                   
                   
					 <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-right">
							<div className="services-Image">
								<Link href="/urinalysis.jpg">
									<Image src="/diagnostic-panel.jpg" alt="dental-ser" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/laboratory-services">Laboratory Services   </Link></h3>
								<p>Our clinic’s laboratory services offer accurate and timely diagnostic testing to support your health and wellness. We provide a range of services including routine blood tests, urinalysis, and specialized diagnostic tests.</p>
								<Link href="/laboratory-services" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
					
					 <div className="col-lg-4 col-sm-6 serv1">
						<div className="single-services aos-init aos-animate" data-aos="slide-right">
							<div className="services-Image">
								<Link href="/pharmacy">
									<Image src="/pharmacyhh.jpg" alt="dental-ser" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
								</Link>
							</div>

							<div className="services-content">
								<h3><Link href="/pharmacy">Pharmacy  </Link></h3>
								<p>Our pharmacy offers comprehensive services to meet your medication needs. We provide prescription fulfillment, medication refills, and transfers, along with personalized medication counseling and convenient immunizations.</p>
								<Link href="/pharmacy" className="link">Learn More</Link>
								
							</div>
						</div>
					</div>
                
                   
                </div>
            </div>
        </section> */}

			{/* servicess  */}

			<section className="fancybox-layout1  bg-overlay-primary-gradient pt-120 pb-120  otherserv" >


			<div class="container d-flex justify-content-center align-items-center">
				<div class="row">
					<div class="col-12">
					<h2 className="item-title text-center ">How We Serve</h2>

					</div>
					<div class="col-md-6 mt-5 d-flex align-items-center ps-5 mob">
						<div class="event-card ms-5">
							<div class="row align-items-center">
								<div class="col-md-3"><div class="event-date">13</div></div>
								<div class="col-md-9">
									<div class="month">NOVEMBER, 2018</div>
									<div class="name">The Plaza Center</div>
								</div>
							</div>

							<div class="event-title">
								<a href="#">Information Technology in The Banking Sector</a>
							</div>
							<div class="upcoming-course-adr">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<p>
									768 Fifth Avenue New York, <br />NY 10019 <span>|</span> The
									Plaza Center
								</p>
							</div>
							<button class="register-btn">Register</button>
						</div>
					</div>
					<div class="right col-md-6 z-3 d-flex align-items-center">
						<img
							alt="Person holding a smartphone with a laptop, documents, and a cup on a desk"
							class="img-fluid event-image me-5"
							height="400"
							src="https://storage.googleapis.com/a1aa/image/6lLlf1l59iQcRqAPWnVI1dOOe9CAztKdZerVXHf8tMWuDh0PB.jpg"
							width="600"
						/>
					</div>
				</div>
			</div>

			<div class="container d-flex justify-content-center align-items-center">
				<div class="row direction mt-5">
					<div class="left col-md-6 z-3 d-flex align-items-center">
						<img
							alt="Person holding a smartphone with a laptop, documents, and a cup on a desk"
							class="img-fluid event-image ps-5 ms-5"
							height="400"
							src="https://storage.googleapis.com/a1aa/image/6lLlf1l59iQcRqAPWnVI1dOOe9CAztKdZerVXHf8tMWuDh0PB.jpg"
							width="600"
						/>
					</div>

					<div class="col-md-6 mt-5 d-flex align-items-center mob pe-5">
						<div class="event-card rightbox me-5">
							<div class="row align-items-center">
								<div class="col-md-3"><div class="event-date">12</div></div>
								<div class="col-md-9">
									<div class="month">NOVEMBER, 2018</div>
									<div class="name">The Plaza Center</div>
								</div>
							</div>

							<div class="event-title">
								<a href="#"
								>Ultimate Skills For an Explosive Start in IT Recruiting</a
								>
							</div>
							<div class="upcoming-course-adr">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<p>
									768 Fifth Avenue New York, <br />NY 10019 <span>|</span> The
									Plaza Center
								</p>
							</div>
							<button class="register-btn">Register</button>
						</div>
					</div>
				</div>
			</div>
			</section>

			{/* servicess  */}




			<section className="fancybox-layout1 bg-overlay bg-overlay-primary-gradient pt-120 pb-120 bg-Image otherserv" >

				<div className="container">
					<div className="row">
						<div className="col-2 col-xl-1">
							<div className="heading-divider mb-3"></div>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
							<div className="heading mb-50" data-aos="fade-top">
								<h3 className="heading-title color-white">Other Services</h3>
							</div>
						</div>
					</div>
					<div className="row justify-content-end mb-30">
						<div className="col-sm-12 col-md-12 col-lg-8 col-xl-12" data-aos="fade-up">
							<p className="heading-desc color-white mb-20 fw-bold">HOPE Clinic provides a wide variety of services to help meet your needs and provide a one-stop-shop! At HOPE Clinic, we go above and beyond the clinical aspect and provide services that help you gain the most out of your healthcare experience. We want to make sure that you have access to as many benefits and programs as possible so that you and your family can stay healthy and happy! Outside of just primary care, we have an expert team of providers from varying disciplines, including:.</p>

						</div>
					</div>
					<div className="row">

						<div className="col-sm-6 col-d-4 col-lg-6 col-md-12" id="houroperation">
							<div className="fancybox-item weekbx" data-aos="fade-up">

								<div className="fancybox-body d-flex">
									<div className="icon zoom-in-zoom-out"><Image src="/nutritionist.png" alt="nutritionist" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div>


									<div className="weeklist">
										<h4 className="fancybox-title">Nutrition Consultation</h4>
										<p className="box-text">With the rise of obesity and accessibility of processed foods, at HOPE Clinic, we know that it is important to maintain a well balanced meal in conjunction with an active lifestyle. Our registered dietitian provides one-on-one consultations as well as group visits to provide a personalized health plan for you to achieve and maintain the healthy lifestyle you desire!  </p>
									</div>

								</div>

							</div>
						</div>

						<div className="col-sm-6 col-d-4 col-lg-6 col-md-12">
							<div className="fancybox-item" data-aos="fade-up">

								<div className="fancybox-body  d-flex">
									<div className="icon zoom-in-zoom-out"><Image src="/pulmonology.png" alt="pulmonology" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div>
									<div className="weeklist">
										<h4 className="fancybox-title">Pulmonology </h4>
										<p>Partnering with the Methodist Hospital System, HOPE Clinic combines the expertise of providers from the medical center with the convenience of the HOPE Clinic location to help manage patients in need of a pulmonologist. </p>
									</div>
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
										<Image src="/aboutus.webp" alt="aboutus" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
										<div className="circle-Image"> <Image src="/circle-logo.png" alt="circle-logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></div>
									</div>

								</div>

							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="about-right pt-15 mb-30" data-aos="fade-right">
								<div className="section-title-2 mb-20">
									<h2>Why Choose HOPE Clinic</h2>
								</div>
								<div className="about-text pr-5">
									<p>HOPE Clinic might be a good choice for several reasons, depending on what you&apos;re looking for. Here are some common reasons people choose clinics like Hope:</p>
									<ul className="list-item">
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Comprehensive Care</h4>

										</li>
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Experienced Staff</h4>

										</li>
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Patient-Centered Approach</h4>

										</li>
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Affordability</h4>

										</li>
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Community-Focused</h4>

										</li>
										<li>
											<h4><span className=""><Image src="/dna.png" alt="arrow" className="fa-spin" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} /></span> Convenient Location and Hours</h4>

										</li>
									</ul>
								</div>


								<Link href="/about" className="btn-red theme-btn mt-4"><span>VIEW MORE</span></Link>
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

export default Service;