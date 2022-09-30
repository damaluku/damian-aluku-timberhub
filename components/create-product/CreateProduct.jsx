import React, { useState, useEffect } from "react";
import styles from "../../styles/createProduct.module.css";
import { GiDeadWood } from "react-icons/gi";

const CreateProduct = ({ setIsCreateOpen }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [usage, setUsage] = useState("");
  const [specie, setSpecie] = useState("");
  const [drying, setDrying] = useState("");
  const [grade, setGrade] = useState("");
  const [treatment, setTreatment] = useState("");
  const [thickness, setThickness] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const fetchProducts = async () => {
    const response = await fetch(`api/woodProducts`);
    const data = await response.json();
    setProducts(data);
    console.log(products);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchProducts();

    const response = await fetch(`api/woodProducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
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
            <GiDeadWood />

            <div className={styles.inputsContainer}>
              <div className={styles.subHeading}>
                <h5>sawn timber</h5>
              </div>
              <div className={styles.inputsBox}>
                <div>
                  <label htmlFor="">usage</label>
                  <select
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                  >
                    <option>usage1</option>
                    <option>usage2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">specie</label>
                  <select
                    value={specie}
                    onChange={(e) => setSpecie(e.target.value)}
                  >
                    <option>specie1</option>
                    <option>specie1</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">drying</label>
                  <select
                    value={drying}
                    onChange={(e) => setDrying(e.target.value)}
                  >
                    <option>drying1</option>
                    <option>drying2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">grade</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option>grade1</option>
                    <option>grade2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">treatment</label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                  >
                    <option>treatment1</option>
                    <option>treatment2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">thickness</label>
                  <select
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                  >
                    <option>thickness1</option>
                    <option>thickness2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">width</label>
                  <select
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  >
                    <option>width1</option>
                    <option>width2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">length</label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  >
                    <option>length1</option>
                    <option>length2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => setIsCreateOpen(false)}>close</button>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
