import React, { useState, useEffect } from "react";
import styles from "../../styles/createProduct.module.css";
import { GiDeadWood } from "react-icons/gi";

const CreateProduct = ({ setIsCreateOpen }) => {
  const [products, setProducts] = useState([]);
  const [usage, setUsage] = useState("usage1");
  const [specie, setSpecie] = useState("specie1");
  const [drying, setDrying] = useState("drying1");
  const [grade, setGrade] = useState("grade1");
  const [treatment, setTreatment] = useState("treatment1");
  const [thickness, setThickness] = useState("thickness1");
  const [width, setWidth] = useState("width1");
  const [length, setLength] = useState("length1");

  const fetchProducts = async () => {
    const response = await fetch(`api/woodProducts`);
    const data = await response.json();
    setProducts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchProducts();
    console.log(products);
    console.log(usage);

    const response = await fetch(`api/woodProducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usage,
        specie,
        drying,
        grade,
        treatment,
        thickness,
        width,
        length,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h4>Create product</h4>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.sawnTimber}>
            <div className={styles.subheading}>
              <GiDeadWood />
              <h5>sawn timber</h5>
            </div>
            <div className={styles.inputBoxes}>
              <div>
                <label htmlFor="">usage*</label>
                <select onChange={(e) => setUsage(e.target.value)}>
                  <option value={usage}>usage1</option>
                </select>
              </div>
              <div>
                <label htmlFor="">wood specie*</label>
                <select onChange={(e) => setSpecie(e.target.value)}>
                  <option value={specie}>specie1</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.sawnTimber}>
            <div className={styles.subheading}>
              <GiDeadWood />
              <h5>Specifications</h5>
            </div>
            <div className={styles.inputBoxes}>
              <div>
                <label htmlFor="">drying*</label>
                <select onChange={(e) => setDrying(e.target.value)}>
                  <option value={drying}>drying1</option>
                </select>
              </div>
              <div>
                <label htmlFor="">grade*</label>
                <select onChange={(e) => setGrade(e.target.value)}>
                  <option value={grade}>grade1</option>
                </select>
              </div>
              <div>
                <label htmlFor="">treatment*</label>
                <select onChange={(e) => setTreatment(e.target.value)}>
                  <option value={treatment}>treatment1</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.sawnTimber}>
            <div className={styles.subheading}>
              <GiDeadWood />
              <h5>Dimensions</h5>
            </div>
            <div className={styles.inputBoxes}>
              <div>
                <label htmlFor="">thickness*</label>
                <select onChange={(e) => setThickness(e.target.value)}>
                  <option value={thickness}>thickness1</option>
                </select>
              </div>
              <div>
                <label htmlFor="">width</label>
                <select onChange={(e) => setWidth(e.target.value)}>
                  <option value={width}>width1</option>
                </select>
              </div>
              <div>
                <label htmlFor="">length*</label>
                <select onChange={(e) => setLength(e.target.value)}>
                  <option value={length}>length1</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit">create Product</button>
        </form>
        <span className={styles.close} onClick={() => setIsCreateOpen(false)}>
          close
        </span>
      </div>
    </div>
  );
};

export default CreateProduct;
