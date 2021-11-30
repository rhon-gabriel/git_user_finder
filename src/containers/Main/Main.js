import React from "react";
import styles from "./Main.module.scss";
import SearchInput from "../Users/SearchUsers/SearchInput";
import Users from "../Users/Users/Users";

const Main = () => {
  return (
    <div className={styles.container}>
      <p>
        Search users within Github or find 3 developers that constitute the best
        team based on the sum of followers
      </p>
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
