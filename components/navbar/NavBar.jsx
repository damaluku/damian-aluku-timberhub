import React from "react";
// import { Container } from "./navbar.styles";
import styles from "../../styles/NavBar.module.css";

import { FaAddressBook } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <FaAddressBook /> <span>Timberhub</span>
      </div>
    </nav>
  );
};

export default NavBar;
