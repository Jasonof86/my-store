import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

import { Product } from "../components/Product";
export const HomeScreen = () => {
  const [products, set_products] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      set_products(data);
    };

    fetchProducts();
  }, []);

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
