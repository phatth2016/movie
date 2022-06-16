import { Empty, Image } from "antd";
import React from "react";
import { CardMovie } from "./styled";

export default function index({ movie, onClick, direction, isActive }) {
  return (
    <CardMovie
      image={movie.poster_path}
      onClick={onClick}
      direction={direction}
      className={direction}
    >
      <div className={isActive ? "card active" : "card"}>
        <div className="card-image">
          <div className="overlay"></div>
          {movie.poster_path ? (
            <Image
              className="lazy"
              srcSet={process.env.REACT_APP_URL_IMG + movie.poster_path}
              src="/assets/images/loading.png"
              preview={false}
            />
          ) : (
            <Empty />
          )}
        </div>
        <div className="card-info">
          <h3 className="card-name">{movie.title}</h3>
          <div className="card-desc">{movie.overview}</div>
        </div>
      </div>
    </CardMovie>
  );
}
