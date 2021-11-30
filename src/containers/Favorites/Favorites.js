import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import styles from "./Favorites.module.scss";
import SmallCard from "../../components/Card/SmallCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  let navigate = useNavigate();

  const getLocalFavorites = () => {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(localFavorites);
  };

  useEffect(() => {
    getLocalFavorites();
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <Button onClick={() => navigate("/users")}>Back</Button>
      {favorites && (
        <>
          <div className={styles.text}>Favorites: </div>
          <Row gutter={16}>
            {favorites &&
              favorites?.map((user, i) => {
                return (
                  <Col span={8} key={user.id}>
                    <SmallCard key={i} user={user} />
                  </Col>
                );
              })}
          </Row>
        </>
      )}
    </div>
  );
};

export default Favorites;
