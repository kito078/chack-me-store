import React from "react";
import "./Feature.css";
import { ImInsertTemplate, ImLocation2 } from "react-icons/im";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Button,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";
import itemData from "./itemData";

function Feature2() {
  return (
    <div className="feature2 pb-5">
      <Row className="mt-5">
        {itemData.map((item) => {
          return (
            <Col lg>
              <Card
                className="feature2__card text-center"
                body
                inverse
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff ",
                }}
              >
                <div className="feature__icon mb-4">{item.icon}</div>
                <h3 className="mt-4">{item.title}</h3>
                <p className="mt-4 mb-4">{item.desc}</p>
                <a href="" className="feature2__read">
                  Read More
                  <BsArrowRightShort />
                </a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Feature2;
