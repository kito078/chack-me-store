import React from "react";
import Test from "../../images/p1.webp";
import Test2 from "../../images/p2.webp";
import Test3 from "../../images/p3.webp";
import "./Testimonial.css";
import { AiTwotoneStar } from "react-icons/ai";
import { Button, Row, Col } from "reactstrap";

const testItems = [
  {
    img: Test,
    title: "Michael Kiger",
    name: "Web Developer",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
    icon: <AiTwotoneStar />,
  },
  {
    img: Test2,
    title: "Robert Gregg",
    name: "Software Developer | England",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
    icon: <AiTwotoneStar />,
  },
  // {
  //   img: Test3,
  //   title: "Robert Gregg",
  //   name: "Software Developer | England",
  //   desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
  //   icon: <AiTwotoneStar />,
  // },
  // {
  //   img: Test2,
  //   title: "Robert Gregg",
  //   name: "Software Developer | England",
  //   desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illoaccusantium perspiciatis itaque voluptas fugit.",
  //   icon: <AiTwotoneStar />,
  // },
];

function Testimonial() {
  return (
    <Row className="testimonial ">
      {testItems.map((item) => {
        return (
          <Col lg className="testimonial__header mb-5 me-lg-5 mb-lg-0">
            <div className="testimonial__avatar d-flex align-items-center  ms-4">
              <div className="test--avatar">
                <img src={item.img} alt="" />
              </div>
              <div className="avatar--names ms-4 mt-3">
                <h5>{item.title}.</h5>
                <p>{item.name}.</p>
              </div>
            </div>
            <div className="testimonial__body mt-3 ms-2 ms-md ps-2 ps-md-2">
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
