import React from "react";
import { Container } from "./product.styles";
import { GiDeadWood } from "react-icons/gi";

const product = ({ product, i }) => {
  return (
    <Container>
      <div className="logoContainer">
        <GiDeadWood />
        <div>
          <span className="name">
            {product.rows[0].species}, {product.rows[0].grade}
          </span>
          <div>
            {product.rows[0].id} <span>{product.rows[0].created}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="dimentions">
          <span>1 {product?.rows[0].dimensions[0].thickness}</span>
          <span>2 {product?.rows[0].dimensions[0].width}</span>
          <span>3 {product?.rows[0].dimensions[0].length}</span>
        </div>
      </div>
    </Container>
  );
};

export default product;
