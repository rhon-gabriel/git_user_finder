import React from "react";
import "./AppContainer.module.scss";
import { Layout } from "antd";

import Header from "../../components/Header";
import Main from "../Main/Main"

const AppContainer = () => {
  return (
    <Layout className="container">
      <Layout.Header
        style={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={{ backgroundColor: "#f9f9f9" }}>
        <Main />
      </Layout.Content>
    </Layout>
  );
};

export default AppContainer;