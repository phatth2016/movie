import axios from "axios";
export const getListMovies = (page, tab) => {
  console.log("page: ", page);
  console.log("tab: ", tab);
  return axios.get(
    `https://api.themoviedb.org/3/movie/${tab}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US`
  );
};

export const getVideoById = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};

export const getUpcomingVideo = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};
