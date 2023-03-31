import React, { useRef, useState } from "react";
import "./NewsletterForm.css";
import { Button, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewsletterForm() {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const emailValueRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailValueRef.current.value;

    if (enteredEmail.trim().length > 6 || enteredEmail.includes("@")) {
      setEmailIsValid(true);
    } else return;

    console.log(enteredEmail);
    emailValueRef.current.value = "";
  };

  const onInvalidEmailHandler = () => {
    setEmailIsValid(null);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="newsletterForm d-flex flex-column flex-lg-row  align-items-center justify-content-center  mt-2 pb-5 mb-3"
    >
      <div className="newsletterForm__group mb-5">
        <input
          ref={emailValueRef}
          className="input mt-lg-5"
          type="email"
          placeholder="Your email address"
        />
      </div>
      <button
        onClick={onInvalidEmailHandler}
        type="submit"
        className="news-btn"
      >
        sign up
      </button>
      <p>
        {emailIsValid &&
          toast.success("🦄 Email Successfully Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })}
      </p>

      <ToastContainer />
    </form>
  );
}

export default NewsletterForm;
