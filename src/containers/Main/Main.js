import React from "react";
import styles from "./Main.module.scss";
import SearchInput from "../Users/SearchUsers/SearchInput";
import Users from "../Users/Users/Users";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchInput />
      </div>
      <div className={styles.usersContainer}>
          <Users />
      </div>
    </div>
  );
};

export default Main;
