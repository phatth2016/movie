import styled from "styled-components";
import { Carousel } from "antd";

export const Styled = styled(Carousel)`
  .slick-dots li {
    width: 30px;
  }
`;

export const BannerStyled = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .banner-image {
    max-height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .banner-image {
      min-height: 70vh;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  max-width: 500px;
  top: 50%;
  left: 200px;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  font-size: 14px;
  padding: 24px;
  z-index: 2;
  > p {
    margin-bottom: 24px;
  }
  .title-movie {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
  }
  > div {
  }
  @media (max-width: 768px) {
    font-size: 14px;
    left: 80px;
    > p {
      margin-bottom: 12px;
    }
  }
  @media (max-width: 425px) {
    font-size: 14px;
    left: 24px;
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
