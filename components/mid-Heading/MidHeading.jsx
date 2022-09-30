import React, { useState } from "react";
// import { Container } from "./midHeading.styles";
import styles from "../../styles/MidHeading.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import CreateProduct from "../create-product/CreateProduct";

const MidHeading = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleClick = () => {
    setIsCreateOpen(true);
  };

  return (
    <div className={styles.container}>
      <h1>All products</h1>
      <button onClick={handleClick}>
        <AiOutlinePlus />
        <span>create products</span>
      </button>

      {isCreateOpen && <CreateProduct setIsCreateOpen={setIsCreateOpen} />}
    </div>
  );
};

export default MidHeading;
