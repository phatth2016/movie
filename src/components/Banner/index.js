import { PlayCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { getUpcomingVideo } from "../../api";
import { BannerStyled, Info, Button } from "./styled";
import { Carousel } from "antd";
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
    <Carousel autoplay>
      {listVideo.map((item, index) => (
        <BannerStyled>
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
            {/* <div className="cast">
              Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.
            </div> */}

            <Button>
              <PlayCircleFilled />
              <div onClick={() => watchVideo(item)}>Watch Now</div>
            </Button>
          </Info>
        </BannerStyled>
      ))}
    </Carousel>
  );
}
