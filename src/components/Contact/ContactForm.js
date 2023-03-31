import React, { useState } from "react";
import "./ContactForm.css";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [nameValue, setNameValue] = useState("");
  const [nameIsValid, setNameIsValid] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [titleIsValid, setTitleIsValid] = useState();
  const [messageValue, setMessageValue] = useState("");
  const [messageIsValid, setMessageIsValid] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  //email
  const onNameHandler = (event) => {
    setNameValue(event.target.value);

    setNameIsValid(
      event.target.value.trim().length > 6 && emailValue.includes("@")
    );
  };
  //email
  const onEmailHandler = (event) => {
    setEmailValue(event.target.value);

    setEmailIsValid(
      event.target.value.trim().length > 6 && emailValue.includes("@")
    );
  };

  //phone number
  const onPhoneHandler = (event) => {
    setPhoneValue(event.target.value);

    setPhoneIsValid(event.target.value.trim().length === 15);
  };

  //subject
  const onSubjectHandler = (event) => {
    setTitleValue(event.target.value);

    setTitleIsValid(event.target.trim().length > 0);
  };

  //message
  const onMessageHandler = (event) => {
    setMessageValue(event.target.value);

    setMessageIsValid(event.target.value.trim().length > 20);
  };

  // if(emailValue.trim.length > 3 && passwordValue.trim.length > 5 && phoneValue.trim.length === 0 && titleValue)

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      nameIsValid ||
      emailIsValid ||
      phoneIsValid ||
      titleIsValid ||
      messageIsValid
    ) {
      setFormIsValid(true);
    } else {
      return;
    }
  };

  return (
    <Form onSubmit={onSubmitHandler} className="contactForm pt-5 pt-lg-0 mt-5">
      <Row>
        <Col md={6}>
          <FormGroup>
            <Input
              onChange={onNameHandler}
              className="py-3"
              id="exampleEmail"
              name="name"
              placeholder="Your name"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              onChange={onEmailHandler}
              id="examplePassword"
              className="py-3"
              name="Email"
              placeholder="Your Email"
              type="Email"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Input
              onChange={onPhoneHandler}
              className="py-4"
              id="exampleEmail"
              name="number"
              placeholder="Your Phone"
              type="number"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              onChange={onSubjectHandler}
              id="examplePassword"
              className="py-4"
              name="subject"
              placeholder="Subject"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          onChange={onMessageHandler}
          id="exampleAddress"
          className="py-4"
          name="message"
          placeholder="Write your message here"
          type="text"
          style={{
            height: "150px",
          }}
        />
        <p>
          {formIsValid
            ? toast.success("🦄 Wow so easy!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            : ""}
        </p>
      </FormGroup>

      <Button className="news-btn mt-5">Sign in</Button>
    </Form>
  );
}

export default ContactForm;
