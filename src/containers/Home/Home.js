import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <Row className={styles.container}>
      <Col span={24}>
        <Link to="/users">
          <div className={styles.btnContainer}>
            <Button type="text">Start</Button>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Home;