import styled from "styled-components";

export const SeachStyled = styled.div`
  position: relative;
  width: 60px;
  .icon-search {
    position: absolute;
    right: 10px;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    color: #fafafa82;
  }
  input {
    color: #fff;
    background-color: #3e3e3e66;
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 8px 24px;
    padding-right: 40px;
    :focus {
      outline: none;
    }
  }
  :hover {
    width: 260px;
    transition: all 0.3s ease-in-out;
  }
`;

export const SearchModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0px;
  width: 600px;
  max-height: 400px;
  overflow: scroll;
  background-color: #00000030;
  border-radius: 16px;
  color: #fff;
  padding: 30px;
  .group {
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 24px;
    &.song {
      border-bottom: 1px solid rgb(62 62 62);
    }
    .group-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 24px;
    }
  }
`;
