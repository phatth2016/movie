import styled from "styled-components";

export const BannerStyled = styled.div`
  position: relative;
  @media (max-width: 768px) {
    .banner-image {
      min-height: 50vh;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  max-width: 500px;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  font-size: 14px;
  padding: 24px;
  > p {
    margin-bottom: 24px;
  }
  .time-movie {
    color: #747474;
  }
  > div {
  }
  @media (max-width: 768px) {
    font-size: 14px;
    > p {
      margin-bottom: 12px;
    }
  }
`;

export const Button = styled.div`
  cursor: pointer;
  background: #080808;
  border: 0.954145px solid #ff4e4e;
  border-radius: 40.0741px;
  color: #ff4e4e;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  font-size: 16px;
  margin-top: 24px;
  transition: all 0.3s ease-in-out;
  > div {
    margin-left: 10px;
  }
  :hover {
    background: #ff4e4e;
    color: #fff;
  }
`;
