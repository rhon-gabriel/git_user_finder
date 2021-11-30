import React, { useState } from "react";
import { Input, InputNumber, Button, message } from "antd";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const [searchedUser, setSearchedUser] = useState(null);
  const [searchedSum, setSearchedSum] = useState(null);
  const dispatch = useDispatch();

  const onSearch = () => {
    const params = {
      user: searchedUser,
      followers: searchedSum,
    };
    searchedUser
      ? dispatch(actions.getUsers(params))
      : message.error("Please, add a login, email or name input");
  };

  const onInputNumber = (value) => setSearchedSum(value);

  return (
    <div style={{ marginBottom: 50 }}>
      <Input.Group compact>
        <Input
          className={styles.input}
          styles={{width: '60%'}}
          placeholder="login, email, and name"
          allowClear
          onChange={(e) => setSearchedUser(e.target.value)}
        />
        <InputNumber
          className={styles.inputNumber}
          styles={{width: '20%'}}
          placeholder="no. followers e.g. 2000"
          onChange={onInputNumber}
        />
        <Button
          type="primary"
          className={styles.button}
          onClick={onSearch}
        >
          Search
        </Button>
      </Input.Group>
    </div>
  );
};

export default SearchInput;
