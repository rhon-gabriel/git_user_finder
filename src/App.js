import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AppContainer from "./containers/AppContainer/AppContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="users" element={<AppContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
