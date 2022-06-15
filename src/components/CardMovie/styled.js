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
    .card-desc {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.active {
      background: #e97101;
      color: #fff;
    }
  }
  &.horizontal {
    width: 100%;
    text-align: left;
    .card {
      display: flex;
      .card-image {
        min-width: 200px;
        max-width: 200px;
        margin-right: 20px;
      }
      .card-name {
        margin-bottom: 24px;
      }
    }
  }
  :hover {
    .card {
      box-shadow: 0 0 10px #e97101;
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
