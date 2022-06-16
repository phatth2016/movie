import React, { useEffect } from "react";
import Banner from "../components/Banner";
import CardMovie from "../components/CardMovie";
import { getListMovieByKeyword, getListMovies } from "../api";
import { ListCard, Styled } from "./styled";
import Video from "../components/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import useIO from "../hooks/useIO";
import Loader from "../components/base/Loader";
import useListenNetworkError from "../hooks/useListenNetworkError";
import NetworkError from "../components/base/NetworkError";
import GlobalModal from "../components/GlobalModal";
import {
  OrderedListOutlined,
  TableOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import Tab from "./Tab";

import { BackToTop } from "../components/base/BackToTop";

export default function Home({ searchText }) {
  const [listMovies, setListMovies] = React.useState([]);
  const [pageNow, setPageNow] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGrid, setIsGrid] = React.useState(true);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const [tab, setTab] = React.useState("popular");

  const status = useListenNetworkError();

  const [observer, setElements, entries] = useIO({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    setIsLoading(true);
    if (searchText) {
      getListMovieByKeyword(searchText, 1).then((res) => {
        setListMovies(res.data.results);
        setTotalPage(res.data.total_pages);
        setIsLoading(false);
      });
    } else {
      getListMovies(1, tab).then((res) => {
        setListMovies(res.data.results);
        setTotalPage(res.data.total_pages);
        setIsLoading(false);
      });
    }
  }, [tab, searchText]);

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

  const handleSelectVideo = (movie) => {
    setSelectedMovie(movie);
    GlobalModal.show(<Video selectedMovie={movie} />);
  };

  const handleNextPage = () => {
    if (pageNow < totalPage) {
      setIsLoading(true);
      setPageNow(pageNow + 1);
      if (searchText) {
        getListMovieByKeyword(searchText, pageNow + 1).then((res) => {
          setListMovies([...listMovies, ...res.data.results]);
          setIsLoading(false);
        });
      } else {
        getListMovies(pageNow + 1, tab).then((res) => {
          setListMovies(listMovies.concat(res.data.results));
          setIsLoading(false);
        });
      }
    }
  };

  const handleChangeTab = (tab) => {
    setTab(tab);
  };

  return (
    <Styled>
      <Banner />
      <div className="label">
        {!searchText && <Tab handleChangeTab={handleChangeTab} tab={tab} />}
        <div onClick={() => setIsGrid(!isGrid)}>
          {isGrid ? <OrderedListOutlined /> : <TableOutlined />}
        </div>
      </div>

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
        <ListCard isGrid={isGrid}>
          {listMovies.map((movie, index) => {
            return (
              <CardMovie
                direction={isGrid ? "vertical" : "horizontal"}
                key={index}
                movie={movie}
                onClick={() => handleSelectVideo(movie)}
                isActive={selectedMovie?.id === movie.id}
              />
            );
          })}
          <BackToTop visibilityHeight={500}>
            <ToTopOutlined />
          </BackToTop>
        </ListCard>
      </InfiniteScroll>
      {isLoading && <Loader />}

      {status === "offline" && <NetworkError />}
    </Styled>
  );
}
