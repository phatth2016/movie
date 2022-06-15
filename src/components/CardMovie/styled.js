import styled from "styled-components";

export const CardMovie = styled.div`
  width: 25%;
  padding: 20px;
  min-width: 300px;
  .card {
    cursor: pointer;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 2px #e97101;
    background: #000000;
    color: #fff;
    .card-name {
      color: #fff;
      margin-top: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* .card-image {
      height: 350px;
      background-color: tomato;
      border-radius: 8px;
      background: ${(props) =>
      `url(${process.env.REACT_APP_URL_IMG + props.image})`};
      box-shadow: 0 0 10px 3px #e97101;
      background-size: cover;
      background-position: center;
    } */
    .card-desc {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media (max-width: 1440px) {
    width: 25%;
  }
  @media (max-width: 1024px) {
    width: 33.3%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
