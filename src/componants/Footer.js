import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    Email: "",
    number: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "", // You can change the recipient email here
        subject: "Get Started",
        text: `Name: ${formData.full_name}\nEmail: ${formData.Email}\nPhone: ${formData.number}\nMessage: ${formData.message}`,
      }),
    });

    const data = await response.json();
    if (data.message === "Email sent successfully!") {
      setFormStatus("Message sent successfully!");
      setFormData({
        full_name: "",
        Email: "",
        number: "",
        message: "",
      });
    } else {
      setFormStatus("Error sending message, please try again later.");
    }
  };

  return (
    <div>
      <div
        className="modal fade requestForm "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog pt-5">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="row gx-3">
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label>Name</label>
                    <input
                      type="text"
                      name="full_name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label>Email</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.Email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label>Phone</label>
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Comment"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button
                      className="btn-red theme-btn"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="btn-title">GET SOLUTION</span>
                    </button>
                  </div>
                </div>
              </form>
              {formStatus && <div className="form-response">{formStatus}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <footer>
        <section className="footer-top-wrap">
          <div className="container">
            <div className="row">
              <div className="single-item col-lg-3 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-header">
                    <a href="/" className="temp-logo mb-3">
                      <Image
                        src="/home/logotic.jpeg"
                        alt="logo"
                        className="img-fluid mb-4"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </a>
                    {/* <h3>FTCA</h3> */}
                  </div>
                  <div className="footer-about">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt arcu in lacinia elementum. Ut bibendum
                      nulla nisl, vitae varius dolor vestibulum rhoncus.
                      <br />
                      <br />
                    </p>
                   
                  </div>
                </div>
              </div>

              <div className="single-item col-lg-3 col-md-6 col-12">
                <div className="footer-box pl-40">
                  <div className="footer-header">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="footer-departments">
                    <ul>
                      <li>
                        <Link href="/about"> About Us</Link>
                      </li>
                      <li>
                        <Link href="/services">Our Services</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="single-item col-lg-3 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-header">
                    <h3>Services</h3>
                  </div>
                  <div className="footer-quick-link">
                    <ul>
                      <li>
                        <Link href=""> Service 1</Link>
                      </li>
                      <li>
                        <Link href="">Service 2</Link>
                      </li>
                      <li>
                        <Link target="" href="">
                          Service 3
                        </Link>
                      </li>
                      <li>
                        <Link href="">Service 4</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="single-item col-lg-3 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-header">
                    <h3>Contact Us</h3>
                  </div>

                  <div>
                    <div class=" Footer-setaddress">
                      <h6>
                        Sign up for our newsletter to get the latest updates
                        from Gut Cleanse.
                      </h6>
                      <div class="Footer-footerform ">
                        <form class="Footer-footerinput d-flex">
                          <input
                            placeholder="Your Email Id"
                            name="email"
                            type="email"
                            class="form-control"
                          />
                          <button
                            type="submit"
                            class="btn btn-primary btn-reds"
                          >
                            {" "}
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="footer-quick-link">
                    <p class="text-white">
                      {" "}
                      To speak to a healthcare provider for assistance outside
                      of clinic hours, please call 713-773-0803. If you are
                      experiencing a medical emergency, <br /> call 911.
                    </p>

                    <ul class="sociallink d-flex">
                      <li>
                        <Link target="_blank" href="">
                          <Image
                            src="/twitter-icon.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="">
                          <Image
                            src="/facebook-icon.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="">
                          <Image
                            src="/instagram-icon.svg"
                            alt="icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex ">
                <a target="_blank" href="Patient-Privacy-Statement.pdf">
                  Privacy Policy{" "}
                </a>{" "}
                &nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;{" "}
                <a href="#">Terms & Conditions </a>
              </div>
              <div className="col-md-6">
                <div className="copyright">
                  {" "}
                  Copyright ©2024 Gut Cleanse. Powered by{" "}
                  <a href="#">Techharbor Partners</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
