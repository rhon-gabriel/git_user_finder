import React from "react";
import { Card, Avatar } from "antd";
import styles from "./SmallCard.module.scss";

const SmallCard = (props) => {
  const { user } = props;
  return (
    <div>
      <Card hoverable className={styles.card} key={user.id}>
        <Card.Meta
          avatar={<Avatar src={user.avatar_url} className={styles.avatar} />}
          title={<span className={styles.title}>{user.login}</span>}
          description={`Score: ${user.score}`}
        />
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          More...
        </a>
      </Card>
    </div>
  );
};

export default SmallCard;
