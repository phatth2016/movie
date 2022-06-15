import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages";
import { Sider, Main, Layout, Header } from "./components/Layout";

import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import GlobalModal from "./components/GlobalModal";

function App() {
  return (
    <div className="App">
      <GlobalModal />
      <Router>
        <Sider />
        <Header>
          <Search />
        </Header>
        <Layout>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
