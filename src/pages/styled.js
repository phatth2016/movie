import styled from "styled-components";

export const ListCard = styled.div`
  max-width: 1200px;
  flex-wrap: wrap;
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: ${(props) => (props.isGrid ? "row" : "column")};
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
    .tab {
      display: flex;
      > h1 {
        cursor: pointer;
        font-size: 32px;
        color: #fff;
        margin-top: 24px;
        margin-right: 24px;
        &.active {
          color: #e97101;
        }
        :hover {
          color: #e97101;
        }
      }
    }
    @media (max-width: 768px) {
      .tab {
        h1 {
          font-size: 16px;
        }
      }
    }

    > .anticon {
      cursor: pointer;
    }
  }
`;
