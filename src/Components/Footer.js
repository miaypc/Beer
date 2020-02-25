import React from "react";
import "./Footer.css";
import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-container">
      <img className="image" src={Logo} alt="Logo" />
      <div>
        <div className="footer-heading">
          <Link to="/contact-us" className="contact footer-link">
            CONTACT US
          </Link>
          {/* <h3>Hello</h3> */}
          <Link to="/" className="terms footer-link">
            TERMS AND POLICIES
          </Link>
        </div>
        <div className="footer-text">
          BEHERE supports the responsible service of alcohol. It is against the
          law to sell or supply alcohol to, or obtain alcohol on behalf of, a
          person under the age of 18 years.
          License number LIQP14124234.
          <p className="behere">© BEHERE. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
