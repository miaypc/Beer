import React from "react";
import "./Footer.css";
import Logo from "./Images/Logo.png";
//import Contact from "./Pages/Contact";
//import About from "./Pages/Terms";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Footer() {
  return (
    // I imported the Router, but the pages do not exist yet. I will uncomment it when they are ready.
    //  <Router>
    //    <Switch/>
    //   <Route exact path="/Contact" components={Contact} />
    //   <Route exact path="/Terms" components={Terms}/>
    // </Router>
    <div>
      <section className="footer-container">
        <img src={Logo} alt="Logo" />
        <h3 className="contact">CONTACT US</h3>
        <h3 className="terms">TERMS AND POLICIES</h3>
        <p className="footer-text">
          BEHERE supports the responsible service of alcohol. It is against the
          law to sell or supply alcohol to, or obtain alcohol on behalf of, a
          person under the age of 18 years. License number LIQP14124234.
        </p>
        <p className="behere">© BEHERE. All rights reserved.</p>
      </section>
    </div>
  );
}

export default Footer;
