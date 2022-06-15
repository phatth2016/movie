import styled from "styled-components";

export const VideoStyled = styled.iframe`
  width: 1280px;
  height: 600px;
  @media (max-width: 1024px) {
    width: 800px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: 600px) {
    width: 380px;
    height: 200px;
  }
`;
