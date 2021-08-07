import illustration_1 from "../images/illustration_1.svg";
import illustration_2 from "../images/illustration_2.svg";
import scooter from "../images/scooter1.svg";
import "../styles/App.css";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Card_two(props) {
  const sampleData = [
    {
      id: 1,
      logo: illustration_1,
      type: "Tell use where you are",
      comment: "Select a location you want us to deliver",
    },
    {
      id: 2,
      logo: illustration_2,
      type: "Tell us what you want",
      comment: "Browse type of food that intrest you.",
    },
    {
      id: 3,
      logo: scooter,
      type: "We'll come running",
      comment: "Your order will be delivered in no time.",
    },
  ];
  return (
    <div className="allCard" key={sampleData.id}>
      <p> How we serve you</p>

      <Row xs={1} md={4} className="gcards">
        {sampleData.map((data) => (
          <Col xs={12} md={4} xl={4}>
            <Card className="shadow-sm mb-2 bg-white rounded">
              <img
                variant="top"
                src={data.logo}
                className="App-logo2"
                alt="logo"
              />
              <Card.Body>
                <Card.Title>{data.type}</Card.Title>
                <Card.Text>
                  <p className="comment">{data.comment}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Card_two;
