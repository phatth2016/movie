import styled from "styled-components";
import Sider from "./Sider";

const Layout = styled.div`
  min-height: 100vh;
`;

const Header = styled.div`
  min-height: 80px;
  padding: 10px 24px;
  position: fixed;
  left: 100px;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: end;
  align-items: center;
  background: #fafafa05;
`;

const Main = styled.div`
  background: #232323;
  min-height: 100vh;
`;

export { Layout, Header, Main, Sider };
