import React from "react";
import AskUsAnthing from "../Components/AskUsAnything";
import EmailUs from "../Components/EmailUs";
import Location from "../Components/Location";
import Navbar from "../Components/Navbar";
import LogoForDarkTheme from "../Components/Logo/logoForDark.svg";

import "./ContactUsPage.scss";

function ContactUsPage() {
  return (
    <div className="contactus">
      <Navbar img={LogoForDarkTheme} />
      <AskUsAnthing />
      <EmailUs />
      <Location />
    </div>
  );
}
export default ContactUsPage;
