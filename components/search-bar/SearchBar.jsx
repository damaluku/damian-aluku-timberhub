import React from "react";
// import { Container } from "./searchBar.styles";
import styles from "../../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <input
      className={styles.searchContainer}
      placeholder="Search"
      type="text"
    />
  );
};

export default SearchBar;
