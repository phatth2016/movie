import { PlayCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { getUpcomingVideo } from "../../api";
import { BannerStyled, Info, Button, Styled } from "./styled";
import GlobalModal from "../GlobalModal";
import Video from "../Video";

export default function Banner() {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    getUpcomingVideo().then((res) => {
      setListVideo(res.data.results);
    });
  }, []);

  const watchVideo = (video) => {
    GlobalModal.show(<Video selectedMovie={video} />);
  };

  return (
    <Styled>
      {listVideo.map((item, index) => (
        <BannerStyled key={item.id}>
          <div className="overlay"></div>
          <Image
            className="banner-image"
            width="100%"
            src={process.env.REACT_APP_URL_IMG + item.backdrop_path}
            preview={false}
          />

          <Info>
            <p className="title-movie">{item.title}</p>
            <p>{item.overview}</p>
            <div className="director">Release date: {item.release_date}</div>

            <Button>
              <PlayCircleFilled />
              <div onClick={() => watchVideo(item)}>Watch Now</div>
            </Button>
          </Info>
        </BannerStyled>
      ))}
      {/* <iframe
        className="banner-image"
        style={{ width: "100%", height: "50vh" }}
        src="https://www.youtube.com/embed/lWcD2icgoGs"
        title="video"
        frameborder="0"
        controls="0"
        allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        // id="iframe"
        loading="lazy"
        // loop={1}
      /> */}
    </Styled>
  );
}
