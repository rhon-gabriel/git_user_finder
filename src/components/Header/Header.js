import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <HomeOutlined className={styles.icon} />
      </Link>
      <div className={styles.header}>Github User Finder</div>
      <div className={styles.favorites}>
        <Link exact to="/favorites">
          <div className={styles.text}>Favorites</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
