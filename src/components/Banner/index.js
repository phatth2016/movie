import { PlayCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import React from "react";
import { BannerStyled, Info, Button } from "./styled";
export default function Banner() {
  return (
    <BannerStyled>
      <Image
        className="banner-image"
        width="100%"
        src="/assets/images/fallback-img.png"
      />
      <Info>
        <p className="time-movie">Adventure, Fantasy | 2019 | 136 Min.</p>
        <p>
          When a tornado hits through City of Peaceville, Samantha (Jenny
          Loifer) and her dog, Ricko, are whisked away in their house to an
          amazing journey.
        </p>
        <div className="director">Director: Todd Burns</div>
        <div className="cast">
          Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.
        </div>

        <Button>
          <PlayCircleFilled />
          <div>Watch Now</div>
        </Button>
      </Info>
    </BannerStyled>
  );
}
