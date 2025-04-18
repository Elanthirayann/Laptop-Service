import React from "react";
import "./footer.css";

const Contact = () => {
  return (
    <section className="footer-distributed" id="contact">
      <div className="footer-left">
        <h3>
          FIXIFY<span>HUB</span>
        </h3>
        <p className="footer-company-name">FIXIFY HUB © 2025</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>No A-3 Thirumalai Nagar,</span> 13th Street Sembakkam,
            Chennai-64
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 73054 67561</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:fixifyhub.services@gmail.com">
              fixifyhub.services@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We provide reliable computer and laptop repair services at your
          doorstep.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
