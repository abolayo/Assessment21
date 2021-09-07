import illustration_1 from "../images/illustration_1.svg";
import illustration_2 from "../images/illustration_2.svg";
import scooter from "../images/illustration_3.svg";
import "../styles/App.css";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function CardTwo(props) {
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
    <div key={sampleData.id}>
      <h4 className='serve'> How we serve you</h4>

      <Row xs={1} md={4} className="gcards">
        {sampleData.map((data) => (
          <Col xs={12} md={4} xl={4}>
            <Card className="card_2 mb-2">
              <img
                variant="top"
                src={data.logo}
                className="App-logo2"
                alt="logo"
              />
              <Card.Body>
                <Card.Title className= 'card_type'>{data.type}</Card.Title>
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
export default CardTwo;
