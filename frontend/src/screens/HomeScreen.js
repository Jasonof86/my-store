import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";

import { Product } from "../components/Product";
export const HomeScreen = () => {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
