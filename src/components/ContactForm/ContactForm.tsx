'use client';

import React, { FC, useState } from "react";
import classes from "./ContactForm.module.css";

interface Errors {
  fullname?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export const ContactForm: FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showFormNotCompleteMessage, setShowFormNotCompleteMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    const tempErrors: Errors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidForm = handleValidation();


    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setShowFormNotCompleteMessage(false);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setShowFormNotCompleteMessage(false);
      setButtonText("Send");
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(false);
      setShowFormNotCompleteMessage(true);
    }
  };



  return (
    <div className={classes.root}>
        <div className={classes.itemWrapper}>

          <form
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <h3 className={classes.formTitle}>Please, fill the form:</h3>

            <label htmlFor="fullname" className={classes.label}>Full name<span className={classes.asterix}>*</span></label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className={classes.input}
            />

            <label htmlFor="email" className={classes.label}>E-mail<span className={classes.asterix}>*</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              className={classes.input}
            />

            <label htmlFor="subject" className={classes.label}>Subject<span className={classes.asterix}>*</span></label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              name="subject"
              className={classes.input}
            />

            <label htmlFor="message" className={classes.label}>Message<span className={classes.asterix}>*</span></label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={classes.input}
            ></textarea>

            <div className={classes.buttonWrapper}>
              <button
                type="submit"
                className={classes.button}
              >
                {buttonText}
                <svg id="Sendgrid" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={classes.sendgrid} fill="currentColor">
                  <path fill="currentColor" d="m21,1h-8c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h6c1.1,0,2,.9,2,2v6c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2V2c0-.55-.45-1-1-1h-9Z"/>
                  <path fill="currentColor" d="m11,31h8c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2h-6c-1.1,0-2-.9-2-2v-6c0-1.1-.9-2-2-2H3c-1.1,0-2,.9-2,2v17c0,.55.45,1,1,1h9Z"/>
                </svg>
              </button>
            </div>
            <div className={classes.messageWrapper}>
              {showSuccessMessage && (
                <p className={classes.successMessage}>
                  Thank you! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className={classes.failureMessage}>
                  Oops! Something went wrong, please try again.
                </p>
              )}
              {showFormNotCompleteMessage && (
                <p className={classes.notCompleteMessage}>
                  Please, fill all the fields.
                </p>
              )}
          </div>
          </form>

        </div>
    </div>
  );
};
