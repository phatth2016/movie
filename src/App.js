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
  const [searchText, setSearchText] = React.useState("");
  console.log("searchText: ", searchText);

  return (
    <div className="App">
      <GlobalModal />
      <Router>
        {/* <Sider /> */}
        <Header>
          <Search searchText={searchText} setSearchText={setSearchText} />
        </Header>
        <Layout>
          <Main>
            <Routes>
              <Route path="/" element={<Home searchText={searchText} />} />
            </Routes>
          </Main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
