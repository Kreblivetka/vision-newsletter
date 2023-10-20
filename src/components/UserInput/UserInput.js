import React, { useState, Fragment } from "react";
import SubscribeText from "../Text/SubscribeText.js";
import ThankYouText from "../Text/ThankYouText.js";
import InputField from "./InputField.js";
import TermsOfService from "./TermsService.js";

function UserInput() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track if the form is submitted

  const clickHandler = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email.trim().length === 0) {
      setErrorMessage("Enter an email address!");
    } else if (!checked) {
      setErrorMessage("You must accept the terms of service!");
    } else if (!re.test(email)) {
      setErrorMessage("Provide a valid email address!");
    } else {
      setErrorMessage("");
      setSubmitted(true); // Form submitted successfully
    }
    setTimeout(() => setErrorMessage(""), 1000);
  };

  return (
    <Fragment>
      {!submitted && (
        <Fragment>
          <SubscribeText />
          <InputField
            email={email}
            setEmail={setEmail}
            errorMessage={errorMessage}
            clickHandler={clickHandler}
          />
          <TermsOfService checked={checked} setChecked={setChecked} />
        </Fragment>
      )}

      {submitted && !errorMessage && <ThankYouText />}
    </Fragment>
  );
}

export default UserInput;
