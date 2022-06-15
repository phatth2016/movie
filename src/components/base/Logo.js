import React from "react";

import styled from "styled-components";

export default function Logo() {
  return <LogoComponent>Movie</LogoComponent>;
}

const LogoComponent = styled.div`
  background: #f5f5f5;
  background: linear-gradient(to right, #f5f5f5 0%, #12e667 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin: 30px auto;
  text-align: center;
`;
