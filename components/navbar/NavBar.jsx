import React from "react";
// import { Container } from "./navbar.styles";
import styles from "../../styles/NavBar.module.css";

import { GiSnakeSpiral } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <GiSnakeSpiral /> <span>Timberhub</span>
      </div>
    </nav>
  );
};

export default NavBar;
