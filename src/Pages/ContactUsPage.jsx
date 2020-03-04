import React from "react";
import AskUsAnthing from "../Components/AskUsAnything";
import EmailUs from "../Components/EmailUs";
import Location from "../Components/Location";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import "./ContactUsPage.scss";

function ContactUsPage() {
  return (
    <div className="contactus">
      <Navbar theme="dark" />
      <AskUsAnthing />
      <EmailUs />
      <Location />
      <Footer />
    </div>
  );
}
export default ContactUsPage;
