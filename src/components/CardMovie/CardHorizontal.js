import { Empty, Image, Popover } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CardHorizontalStyled } from "./styled";

export default function CardHorizontal({ movie, onClick }) {
  return (
    <CardHorizontalStyled image={movie.poster_path} onClick={onClick}>
      <div className="card">
        <div className="overlay"></div>
        {movie.poster_path ? (
          <>
            <div className="card-image">
              <Image
                className="lazy"
                srcSet={process.env.REACT_APP_URL_IMG + movie.poster_path}
                src="/assets/images/loading.png"
                preview={false}
              />
            </div>
            <div className="card-info">
              <h3 className="card-name">{movie.title}</h3>
              <div className="card-desc">{movie.overview}</div>
              <p>
                <i>Vote: {movie.vote_count}</i>
              </p>
              <p>
                <i>Vote averanger: {movie.vote_average}</i>
              </p>
              {movie.adult && <p>18+</p>}
            </div>
          </>
        ) : (
          <Empty />
        )}
      </div>
    </CardHorizontalStyled>
  );
}
