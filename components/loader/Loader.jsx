import React from "react";
import styles from "../../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}>Loading</span>
    </div>
  );
};

export default Loader;
