import axios from "axios";
export const getListMovies = (page) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&page=1`
  );
};

export const getVideoById = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
};
