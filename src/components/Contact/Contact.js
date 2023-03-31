import React from "react";
import ContactForm from "./ContactForm";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import "./Contact.css";

const contactItems = [
  {
    icon: <ImLocation2 />,
    title: "Address",
    desc: "20 Somewhere in world",
  },
  {
    icon: <MdEmail />,
    title: "Email",
    desc: "kabamechack@gmail.com",
  },
  {
    icon: <BsFillTelephoneFill />,
    title: "Phone",
    desc: "+27 61 856 2010...............",
  },
];

function Contact() {
  return (
    <Row className="contact">
      <Col lg className="contact__header">
        {contactItems.map((item) => {
          return (
            <div className="contact__adress  my-4 text-lg-start">
              <div className="contact__address_head d-flex align-items-center justify-content-center">
                <div className="address--icon">{item.icon}</div>
                <div className="address__content mt-3">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Col>
      <Col lg>
        <ContactForm />
      </Col>
    </Row>
  );
}

export default Contact;
