import React from "react";
import styles from "./Main.module.scss";
import SearchInput from "../Users/SearchUsers/SearchInput"

const Main = () => {
  return (
    <div className={styles.container}>
        <SearchInput />
    </div>
  );
};

export default Main;
