import React, { useEffect } from "react";
import Banner from "../components/Banner";
import CardMovie from "../components/CardMovie";
import { getListMovies } from "../api";
import { ListCard } from "./styled";
import Video from "../components/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import useIO from "../hooks/useIO";
import Loader from "../components/base/Loader";
import useListenNetworkError from "../hooks/useListenNetworkError";
import NetworkError from "../components/base/NetworkError";

export default function Home() {
  const [listMovies, setListMovies] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [pageNow, setPageNow] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const status = useListenNetworkError();

  const [observer, setElements, entries] = useIO({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    if (listMovies.length) {
      let img = Array.from(document.getElementsByClassName("lazy"));
      setElements(img);
    }
  }, [listMovies, setElements]);

  useEffect(() => {
    setIsLoading(true);
    getListMovies(1).then((res) => {
      setListMovies(res.data.results);
      setTotalPage(res.data.total_pages);
      setIsLoading(false);
    });
  }, []);

  const handleSelectVideo = (movie) => {
    setSelectedMovie(movie);
  };

  const handleNextPage = () => {
    if (pageNow < totalPage) {
      setIsLoading(true);
      setPageNow(pageNow + 1);
      getListMovies(pageNow + 1).then((res) => {
        setListMovies(listMovies.concat(res.data.results));
        setIsLoading(false);
      });
    }
  };

  return (
    <div>
      <Banner />
      <h1>Popular movies</h1>

      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={listMovies.length}
        next={handleNextPage}
        hasMore={pageNow <= totalPage}
        loader={pageNow <= totalPage && <h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListCard>
          {listMovies.map((movie, index) => {
            return (
              <CardMovie
                key={index}
                movie={movie}
                onClick={() => handleSelectVideo(movie)}
              />
            );
          })}
        </ListCard>
      </InfiniteScroll>
      <Video selectedMovie={selectedMovie} />
      {isLoading && <Loader />}

      {status === "offline" && <NetworkError />}
    </div>
  );
}
