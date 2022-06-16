import styled from "styled-components";

export const CardMovie = styled.div`
  &.vertical {
    width: 25%;
    padding: 20px;
    min-width: 300px;

    .card {
      cursor: pointer;
      /* padding: 20px; */
      border-radius: 5px;
      box-shadow: 0 0 2px #e97101;
      background: #000000;
      color: #fff;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      min-height: 390px;
      justify-content: center;

      .overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      .card-info {
        bottom: -100%;
        position: absolute;
        z-index: 2;
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
      }
      :hover {
        .card-info {
          bottom: 12px;
          transition: all 0.5s ease-in-out;
          .overlay {
            display: none;
          }
        }
        &.active {
          background: #e97101;
          color: #fff;
        }
      }
    }
  }
  &.horizontal {
    width: 100%;
    text-align: left;
    padding: 20px;

    .card {
      display: flex;
      cursor: pointer;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 2px #e97101;
      background: #000000;
      color: #fff;
      position: relative;

      .card-image {
        min-width: 200px;
        margin-right: 20px;
        min-height: 390px;
      }
      .card-name {
        margin-bottom: 24px;
      }
    }
  }
  :hover {
    .card {
      box-shadow: 0 0 10px #e97101;
      /* .overlay {
        display: none;
      } */
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
