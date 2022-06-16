import { PlayCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { getUpcomingVideo, getVideoById } from "../../api";
import { BannerStyled, Info, Styled } from "./styled";

export default function Banner() {
  const [listVideo, setListVideo] = useState([]);
  const [video, setVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getUpcomingVideo().then((res) => {
      setListVideo(res.data.results);
      getVideoById(res.data.results[0].id).then((res) => {
        setVideo(res.data.results[0].key);
      });
    });
  }, []);

  useEffect(() => {
    getVideoById(listVideo[currentSlide]?.id).then((res) => {
      setVideo(res.data.results[0].key);
    });
  }, [currentSlide]);

  const onChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <Styled afterChange={onChange}>
      {listVideo.map((item, index) => (
        <BannerStyled key={item.id}>
          <div className="overlay"></div>
          <iframe
            className="banner-image"
            src={`https://www.youtube.com/embed/${video}?autoplay=1&loop=1&mute=1&controls=0&modestbranding=0&rel=0&showinfo=0&autohide=1`}
            frameborder="0"
            allow="accelerometer; loop ; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture;modestbranding; showinfo; autohide"
            loading="lazy"
          />
          <Info>
            <p className="title-movie">{item.title}</p>
            <p>{item.overview}</p>
            <div className="director">Release date: {item.release_date}</div>
          </Info>
        </BannerStyled>
      ))}
    </Styled>
  );
}
