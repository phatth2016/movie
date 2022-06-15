import styled from "styled-components";
import React from "react";

export default function NetworkError(props) {
  return (
    <NetworkErrorStyled {...props}>
      <div className="loader"></div>
      Network error <br /> Connecting ....
    </NetworkErrorStyled>
  );
}

const NetworkErrorStyled = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .loader {
    margin-right: 12px;
    border: 4px solid rgb(0 0 0 / 85%);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
