import React, { useState, useEffect } from "react";

import CustomSwitch from "../../components/custom-switch/custom-switch.component";

import "./schedule-call.styles.css";
import CustomInput from "../../components/custom-textinput/custom-textinput.component";
import CustomCheckbox from "../../components/custom-checkbox/custom-checkbox.component";
import ErrorMessage from "../../components/error-message/error-message.component";
import Message from "../../components/thank-you-message/thank-you-message.component";

export default function ScheduleCall({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState({
    awareness: false,
    invite: false,
    usability: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    phone_number: "",
  });
  const [thankYouMessage, setThankYouMessage] = useState("");

  const updateCheckboxValue = (attr) => {
    setSelectedCheckboxValues({
      ...selectedCheckboxValues,
      [attr]: !selectedCheckboxValues[attr],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clearErrors();

    setErrors(() => {
      const errorsObj = {
        email: "",
        phone_number: "",
      };

      if (!email) {
        errorsObj["email"] = "Email field is required";
      } else if (email && (!email.includes("@") || !email.includes("."))) {
        errorsObj["email"] = "Email is not in proper format";
      }
      if (phoneNumber && !phoneNumber.match(/\d{3}-\d{3}-\d{4}/)) {
        errorsObj["phone_number"] = "Phone number is not in proper format";
      }

      if (!errorsObj["email"] && !errorsObj["phone_number"]) {
        setThankYouMessage(
          "Thank you for your interest in Empower Ability Labs. We will be in touch with you shortly."
        );
      }

      return errorsObj;
    });
  };

  const clearErrors = () => {
    setErrors({
      email: "",
      phone_number: "",
    });
    setThankYouMessage("");
  };

  return (
    <>
      <div className="headingContent">
        <div className="container">
          <h1>Schedule a Call</h1>
          <div className="d-flex">
            <p>
              At Empower Ability Labs, we are dedicated to cultivating empathy
              and driving positive change through immersive experiences. Fill
              out the form below and we’ll get back to you as soon as we can to
              schedule a call with our sales team.
            </p>
            <div className="col-md-1">
              <img
                className="image"
                src="https://joesanthosh24.github.io/accessible_page/images/scheduleacall.png"
                alt="Person Scheduling a Call"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
      <ErrorMessage errors={errors} />
      <Message message={thankYouMessage} />
      <div className="container message"></div>
      <div className="container form-container">
        <form className="form">
          <CustomInput
            label="Business Name"
            forAttr="business-name"
            val={businessName}
            handleChange={(e) => setBusinessName(e.target.value)}
            name="business_name"
          />
          <CustomInput
            label="Phone Number"
            forAttr="phone-number"
            val={phoneNumber}
            handleChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            name="phone_number"
            otherAttributes={{
              placeholder: "Format: ###-###-####",
            }}
          />
          <CustomInput
            label="Email"
            forAttr="email"
            val={email}
            handleChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <fieldset className="fieldset">
            <legend className="legend">
              <h2 id="topic-to-talk-about">
                What would you like to talk about
              </h2>
            </legend>
            <div role="group" aria-labelledby="topic-to-talk-about">
              <ul>
                <CustomCheckbox
                  label="Awareness Lab Days and Workshops"
                  forAttr="awareness"
                  handleChecked={updateCheckboxValue}
                />
                <CustomCheckbox
                  label="Invite a speaker with disabilities to your event"
                  forAttr="invite"
                  handleChecked={updateCheckboxValue}
                />
                <CustomCheckbox
                  label="Usability Testing"
                  forAttr="usability"
                  handleChecked={updateCheckboxValue}
                />
              </ul>
            </div>
          </fieldset>
          {selectedCheckboxValues.invite && (
            <div className="d-flex flex-column items-center">
              <label htmlFor="event-desc">Tell us about your Event</label>
              <textarea id="event-desc"></textarea>
            </div>
          )}
          <div className="form-group d-flex items-center">
            <CustomSwitch
              toggleChecked={setReceiveEmails}
              toggleStatus={receiveEmails}
              labelText="Receive emails about updates and services"
            />
          </div>
          <button className="scheduleCallBtn" onClick={handleSubmit}>
            Schedule a Call
          </button>
        </form>
        <hr />
      </div>
    </>
  );
}
