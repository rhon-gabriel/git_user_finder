import React, { useState } from "react";
import { Input, InputNumber, Button, message } from "antd";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";

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
          style={{ width: "65%" }}
          placeholder="login, email, and name"
          size="large"
          allowClear
          onChange={(e) => setSearchedUser(e.target.value)}
        />
        <InputNumber
          style={{ width: "25%" }}
          placeholder="Sum of followers e.g. 2000"
          size="large"
          onChange={onInputNumber}
        />
        <Button
          type="primary"
          size="large"
          style={{ width: "10%" }}
          onClick={onSearch}
        >
          Search
        </Button>
      </Input.Group>
    </div>
  );
};

export default SearchInput;
