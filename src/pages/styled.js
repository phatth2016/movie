import styled from "styled-components";

export const ListCard = styled.div`
  max-width: 1200px;
  flex-wrap: wrap;
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: ${(props) => (props.isGrid ? "row" : "column")};
  justify-content: center;
`;

export const Styled = styled.div`
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    font-size: 24px;
    margin: auto;
    padding: 24px;
  }
  .anticon {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    justify-content: center;
    .anticon {
      display: none;
    }
  }
`;

export const TabStyled = styled.div`
  display: flex;
  > h1 {
    cursor: pointer;
    font-size: 32px;
    color: #fff;
    margin-top: 24px;
    margin-right: 24px;
    text-transform: uppercase;
    &.active {
      color: #e97101;
    }
    :hover {
      color: #e97101;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 14px;
      margin-right: 12px;
    }
  }
`;
