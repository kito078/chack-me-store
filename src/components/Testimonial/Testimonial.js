import React from "react";
import Test from "../../images/01.jpg";
import "./Testimonial.css";
import { AiTwotoneStar } from "react-icons/ai";
import { Button, Row, Col } from "reactstrap";

const testItems = [
  {
    img: Test,
    title: "Lorem, ipsum dolor",
    name: "Lorem, ipsum dolor",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
    icon: <AiTwotoneStar />,
  },
  {
    img: Test,
    title: "Lorem, ipsum dolor",
    name: "Lorem, ipsum dolor",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
    icon: <AiTwotoneStar />,
  },
];

function Testimonial() {
  return (
    <Row className="testimonial ">
      <div className="testimonial__text text-center my-0                                                                         my-lg-2 py-0 py-lg-5">
        <h5 className="mb-5">OUR TESTIMONIAL</h5>
        <h2>WE ELEVATE THE BEAUTY OF YOUR HOME</h2>
      </div>

      {testItems.map((item) => {
        return (
          <Col lg className="testimonial__header mb-5 mb-lg-0">
            <div className="testimonial__avatar d-flex align-items-center ">
              <div className="test--avatar">
                <img src={item.img} alt="" />
              </div>
              <div className="avatar--names ms-4 mt-3">
                <h5>{item.title}.</h5>
                <p>{item.name}.</p>
              </div>
            </div>
            <div className="testimonial__body mt-3 ms-2 ms-md-5 ps-2 ps-md-5">
              <p> {item.desc}</p>
              <div className="test-icons d-flex align-items-center ">
                <span className="test-icon mx-1 mx-md-2">{item.icon}</span>
                <span className="test-icon mx-1 mx-md-2">{item.icon}</span>
                <span className="test-icon mx-1 mx-md-2">{item.icon}</span>
                <span className="test-icon mx-1 mx-md-2">{item.icon}</span>
                <span className="test-icon mx-1 mx-md-2">{item.icon}</span>

                <span>
                  <p className="text-exl mt-4 ms-3">Execllent!!</p>
                </span>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Testimonial;
