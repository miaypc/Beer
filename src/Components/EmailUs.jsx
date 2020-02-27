import React from "react";
import "./EmailUs.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function EmailUs() {
  return (
    <div className="emailus">
      <h1 className="emailus-title">Email Us </h1>
      <p className="emailus-description">
        Maybe we’re weird. But we love email. So shoot us one anytime and we’ll
        get back to you asap. Usually within the hour on weekdays, but we’ll
        also try our best on the weekend.
      </p>
      <a href="mailto:me@behere.com?subject=SendMail&body=Description">
        <Button
          size="m"
          color={Colors.mainYellow}
          textColor={Colors.mainDark}
          name="me@behere.com"
        />
      </a>
    </div>
  );
}

export default EmailUs;
