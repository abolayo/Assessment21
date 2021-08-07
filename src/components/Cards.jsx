import logo from "../images/fast-food.svg";
import veg from "../images/vegetables_drinks.svg";
import resturant from "../images/resturant.svg";
import drinks from "../images/drinks_cocktails.svg";
import "../styles/App.css";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Cards(props) {
  const sampleData = [
    {
      id: 1,
      logo: logo,
      type: "Fast food",
      comment: "All sorrow are less with bread.",
    },
    {
      id: 2,
      logo: veg,
      type: "Vegetable & Fruits",
      comment: "May not want it, but good for you.",
    },
    {
      id: 3,
      logo: drinks,
      type: "Drinks & Cocktails",
      comment: "I feel sad for those who don't drink.",
    },
    {
      id: 4,
      logo: resturant,
      type: "Restuarants",
      comment: "All sorrow are less with bread.",
    },
  ];
  return (
    <div className="allCard" key={sampleData.id}>
      <h4> Pick an interest</h4>

      <Row xs={1} md={3} className="gcards">
        {sampleData.map((data) => (
          <Col xs={12} md={6} xl={3} >
            <Card className='shadow-sm mb-2 bg-white rounded'>
              <img
                variant="top"
                src={data.logo}
                className="App-logo"
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
export default Cards;
