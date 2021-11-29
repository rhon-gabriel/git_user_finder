import React, { useState } from "react";
import { Input, InputNumber, Button } from "antd";

const SearchInput = () => {
  const [searchedUser, setSearchedUser] = useState(null);
  const [searchedSum, setSearchedSum] = useState(null);
  const onSearch = () => console.log(searchedUser, searchedSum);
  const onInputNumber = (value) => setSearchedSum(value)

  return (
    <div>
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
