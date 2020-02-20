import React from "react";
import "./Footer.css";
import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";
//import Contact from "./Pages/Contact";
//import About from "./Pages/Terms";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    // I imported the Router, but the pages do not exist yet. I will uncomment it when they are ready.
    //  <Router>
    //    <Switch>
    // <Route exact path="/" components={MainPage} />
    //   <Route exact path="/Contact" components={Contact} />
    // </Switch
    // </Router>
    <section className="footer-container">
      <img className="image" src={Logo} alt="Logo" />
      <div>
        <div className="footer-heading">
          <h3 className="contact">CONTACT US</h3>
          <h3 className="terms">TERMS AND POLICIES</h3>
        </div>
        <p className="footer-text">
          BEHERE supports the responsible service of alcohol. It is against the
          law to sell or supply alcohol to, or obtain alcohol on behalf of, a
          person under the age of 18 years. License number LIQP14124234.
        </p>
        <p className="behere">© BEHERE. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
