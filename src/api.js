import axios from "axios";

const url = process.env.REACT_APP_URL_API;

export const getListMovies = (page, tab) => {
  return axios.get(
    `${url}/movie/${tab}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US`
  );
};

export const getVideoById = (id) => {
  return axios.get(
    `${url}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};

export const getUpcomingVideo = (id) => {
  return axios.get(
    `${url}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};

export const getListMovieByKeyword = (keyword, page) => {
  console.log("page: ", page);
  return axios.get(
    `${url}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&query=${keyword}&include_adult=false`
  );
};
