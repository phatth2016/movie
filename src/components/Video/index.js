import React, { useEffect } from "react";
import { VideoStyled } from "./styled";
import { getVideoById } from "../../api";

function Video({ selectedMovie }) {
  const [video, setVideo] = React.useState(null);

  useEffect(() => {
    if (selectedMovie) {
      getVideoById(selectedMovie.id).then((res) => {
        setVideo("https://www.youtube.com/embed/" + res.data.results[0].key);
      });
    }
    return () => {
      setVideo(null);
    };
  }, [selectedMovie]);

  if (!video) return null;

  return (
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
    />
  );
}

export default React.memo(Video);
