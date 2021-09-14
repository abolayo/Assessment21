import React from 'react';
import Product from './Product';
import { Row, Col, Card } from "react-bootstrap";

export default function Main(props) {
  const { products, onAdd, onRemove } = props;
  return (
    <main className="Card">
      <h5 className="pick">Cart</h5>
      <Row xs={1} md={3}>
        {products.map((product) => (
          <Col sm={4} md={6} xl={3}>
          <Product
           key={product.id} 
           product={product}
            onAdd={onAdd}>
              <hr></hr>
          </Product>
          </Col>
        ))}
      </Row>
    </main>
  );
}
