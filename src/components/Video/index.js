import React, { useEffect, useRef } from "react";
import { VideoStyled } from "./styled";
import { getVideoById } from "../../api";
import Loader from "../base/Loader";
// import GlobalModal from "../GlobalModal";

function Video({ selectedMovie }) {
  const [video, setVideo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const ref = useRef();

  useEffect(() => {
    if (selectedMovie) {
      setIsLoading(true);
      getVideoById(selectedMovie.id).then((res) => {
        setVideo("https://www.youtube.com/embed/" + res.data.results?.[0]?.key);
        setIsLoading(false);
        // if (ref.current) {
        //   ref.current.addEventListener("error", () => {
        //     console.log("onload");
        //   });
        // }
      });
    }
    return () => {
      setVideo(null);
    };
  }, [selectedMovie]);

  if (!video) return null;

  return (
    <>
      {isLoading && <Loader />}
      <VideoStyled
        width="800"
        height="400"
        src={video}
        title={selectedMovie?.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="iframe"
        loading="lazy"
        ref={ref}
      />
    </>
  );
}

export default React.memo(Video);
