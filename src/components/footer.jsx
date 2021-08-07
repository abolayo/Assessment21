import React from "react";
import "../styles/footer.css";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="footer">
          <Col>
            <p href="#">Terms & Conditions. Pirvacy Policy</p>
          </Col>
          <Col>
            <p href="#">Copyright FoodBag is a registered trademark</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
