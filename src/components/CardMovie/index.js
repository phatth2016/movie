import { Image } from "antd";
import React from "react";
import { CardMovie } from "./styled";

export default function index({ movie, onClick }) {
  return (
    <CardMovie image={movie.poster_path} onClick={onClick}>
      <div className="card">
        <div className="card-image">
          <Image
            className="lazy"
            srcSet={process.env.REACT_APP_URL_IMG + movie.poster_path}
            src="/assets/img/loading.png"
            preview={false}
          />
        </div>
        <div className="card-info">
          <h3 className="card-name">{movie.title}</h3>
          <div className="card-desc">{movie.overview}</div>
        </div>
      </div>
    </CardMovie>
  );
}
