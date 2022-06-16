import { Empty, Image, Popover } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CardMovieStyled } from "./styled";
import { getVideoById } from "../../api";

export default function CardVertical({ movie, onClick, direction }) {
  const ref = useRef();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    if (ref.current) {
      //add eventlistener hover element
      let timer = null;
      ref.current.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
          timer = setTimeout(() => {
            ref.current.classList.add("play");
            getVideoById(movie.id).then((res) => {
              setVideo(
                "https://www.youtube.com/embed/" +
                  res.data.results?.[0]?.key +
                  "?autoplay=1&mute=1"
              );
            });
          }, 1500);
        }
      });
      ref.current.addEventListener("mouseleave", () => {
        setVideo(null);
        ref.current.classList.remove("play");
        clearTimeout(timer);
      });
    }
    return () => {
      setVideo(null);
    };
  }, []);

  const Content = () => (
    <iframe
      width="100%"
      height="100%"
      src={video}
      title={video?.title}
      frameborder="0"
      allow="autoplay"
      allowFullScreen
      id="iframe"
      loading="lazy"
    />
  );
  return (
    <CardMovieStyled
      image={movie.poster_path}
      onClick={window.innerWidth < 768 ? onClick : null}
      className={direction}
      ref={ref}
    >
      <div className="card">
        {video ? (
          <>
            <Content />
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
        )}
      </div>
    </CardMovieStyled>
  );
}
