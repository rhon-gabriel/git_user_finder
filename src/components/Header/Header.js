import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <HomeOutlined className={styles.icon} />
        </Link>
        <div className={styles.header}>Github User Finder</div>
        <div className={styles.favorites}>
          <Link to="/favorites">
            <div className={styles.textFavorites}>Favorites</div>
          </Link>
        </div>
      </div>
      <div className={styles.text}>
        Find users within Github or build your team of developers based on the
        sum of followers
      </div>
    </>
  );
};

export default Header;
