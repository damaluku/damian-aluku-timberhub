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
          {product?.rows.map((row) => {
            return row.dimensions.map((item, i) => (
              <div key={i + 0.2}>
                <span>
                  <span>{i + 1}</span> {item.thickness} x {item.width}
                </span>
              </div>
            ));
          })}
        </div>
      </div>
    </Container>
  );
};

export default product;
