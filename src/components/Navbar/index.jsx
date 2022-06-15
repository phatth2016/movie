import React from "react";
import styled from "styled-components";
import ConnectButton from "../ButtonConnect";
import Search from "../Search";

export const NAV_HEIGHT = "100px";

const NavWrapper = styled.div`
  width: 100%;
  padding: 0 0 0 2rem;
  z-index: 1000;
  height: ${NAV_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  color: #999999;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;


const Navbar = () => {
  return (
    <NavWrapper>
      <Search />
      <ConnectButton/>
      
    </NavWrapper>
  );
};

export default Navbar;
