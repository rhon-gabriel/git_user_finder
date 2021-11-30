import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, message } from "antd";
import { HeartFilled } from "@ant-design/icons";
import styles from "./UsersTable.module.scss";

const UsersTable = () => {
  const { results } = useSelector((state) => state.users);
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const columns = [
    {
      title: "",
      dataIndex: "avatar_url",
      width: 80,
      render: (avatar) => <img width={90} alt="avatar" src={avatar} className={styles.avatar}/>,
    },
    {
      title: "Login",
      dataIndex: "login",
    },
    {
      title: "Score",
      dataIndex: "score",
      width: 60,
      sorter: (a, b) => a.score - b.score,
    },
    {
      title: "",
      dataIndex: "html_url",
      width: 150,
      render: (url) => (
        <a href={url} target="_blank" rel="noreferrer">
          Learn More
        </a>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      selectedRows.length > 0
        ? setIsSelectedRow(true)
        : setIsSelectedRow(false);
      setFavorites(selectedRows);
    },
  };

  const addToFavorites = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    message.success('Added');
  };

  return (
    <div className={"usersTable"}>
      {isSelectedRow && (
        <Button
          type="primary"
          shape="round"
          icon={<HeartFilled />}
          onClick={addToFavorites}
        >
          Add to favorites
        </Button>
      )}
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        pagination={{ pageSize: 4 }}
        rowKey="id"
        columns={columns}
        rowClassName={"usersTableRow"}
        dataSource={results?.items}
      />
    </div>
  );
};

export default UsersTable;
