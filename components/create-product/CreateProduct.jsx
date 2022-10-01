import React, { useState } from "react";
import styles from "../../styles/createProduct.module.css";

import { GiDeadWood } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { GiWoodPile } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

const CreateProduct = ({ setIsCreateOpen }) => {
  const [products, setProducts] = useState([]);
  const [usage, setUsage] = useState("usage1");
  const [specie, setSpecie] = useState("specie1");
  const [drying, setDrying] = useState("drying1");
  const [grade, setGrade] = useState("grade1");
  const [treatment, setTreatment] = useState("treatment1");
  const [thickness, setThickness] = useState(16);
  const [width, setWidth] = useState(49);
  const [length, setLength] = useState(850);

  const fetchProducts = async () => {
    const response = await fetch(`api/woodProducts`);
    const data = await response.json();
    setProducts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchProducts();
    console.log(products);

    const response = await fetch(`/api/woodProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    <div className={styles.createContainer}>
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
                <label htmlFor="usage">usage*</label>
                <select
                  id="usage"
                  name="usage"
                  required
                  onChange={(e) => setUsage(e.target.value)}
                >
                  <option value={usage}>usage1</option>
                </select>
              </div>
              <div>
                <label htmlFor="specie">wood specie*</label>
                <select
                  id="specie"
                  name="specie"
                  required
                  onChange={(e) => setSpecie(e.target.value)}
                >
                  <option value={specie}>specie1</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.sawnTimber}>
            <div className={styles.subheading}>
              <GiWoodPile />
              <h5>Specifications</h5>
            </div>
            <div className={styles.inputBoxes}>
              <div>
                <label htmlFor="drying">drying*</label>
                <select
                  id="drying"
                  name="drying"
                  required
                  onChange={(e) => setDrying(e.target.value)}
                >
                  <option value={drying}>drying1</option>
                </select>
              </div>
              <div>
                <label htmlFor="grade">grade*</label>
                <select
                  id="grade"
                  name="grade"
                  required
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value={grade}>grade1</option>
                </select>
              </div>
              <div>
                <label htmlFor="treatment">treatment*</label>
                <select
                  id="treatment"
                  name="treatment"
                  required
                  onChange={(e) => setTreatment(e.target.value)}
                >
                  <option value={treatment}>treatment1</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.sawnTimber}>
            <div className={styles.subheading}>
              <GiPerspectiveDiceSixFacesOne />
              <h5>Dimensions</h5>
            </div>
            <div className={styles.inputBoxes}>
              <div>
                <label htmlFor="thickness">Thickness*</label>
                <input
                  value={thickness}
                  type="number"
                  name="thickness"
                  id="thickness"
                  required
                  onChange={(e) => setThickness(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="width">width*</label>
                <input
                  value={width}
                  type="number"
                  name="width"
                  id="width"
                  required
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="length">length*</label>
                <input
                  value={length}
                  type="number"
                  name="length"
                  id="length"
                  required
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>
            </div>
            <span className={styles.addButton} disabled>
              <AiOutlinePlus />
              <span>Add another set</span>
            </span>
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
