import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Alert } from "antd";
import styles from "./Users.module.scss";
import SpinLoader from "../../../components/SpinLoader/SpinLoader";
import UsersTable from "./UsersTable";
import SmallCard from "../../../components/Card/SmallCard";

const Users = () => {
  const { results, loading, error, sumFollowers } = useSelector(
    (state) => state.users
  );
  const sumSize = 3;

  return (
    <div className={styles.cardWrapper}>
      {error && (
        <Col span={24}>
          <Alert message="Something went wrong" type="error" />
        </Col>
      )}
      {loading ? (
        <SpinLoader />
      ) : sumFollowers ? (
        <>
          <span className={styles.text}>Optimal 3 Developer Team: </span>
          <Row gutter={16}>
            {results?.items?.slice(0, sumSize).map((user, i) => {
              return (
                <Col span={8} key={user.id}>
                  <SmallCard key={i} user={user} />
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        results && <UsersTable />
      )}
    </div>
  );
};

export default Users;
