import styled from "styled-components";

export const SiderComponent = styled.div`
  background: #f0f0f00d;
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 10px;
  position: fixed;
  top: 0px;
  height: max-content;
  z-index: 1000;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;

  border-radius: 4px;
  padding: 24px 16px;

  font-family: "Open Sans";
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: #999999;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  margin: 12px 0px;

  > span {
    margin-left: 12px;
  }
  :hover {
    color: #ffffff;
  }
  &.active {
    background: #282828;
  }
`;

export const GroupMenu = styled.div`
  padding: 24px 0xp;
  margin-bottom: 24px;
  :not(:last-child) {
    border-bottom: 2px solid #999999;
  }
`;
