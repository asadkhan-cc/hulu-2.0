/* eslint-disable import/no-anonymous-default-export */
const API_Key = "cdbf45dcd63904784d53f579cbf9ecbd";
// const API_Key = process.env.API_KEY;

export default {
  fetchingTrending: {
    title: "Trending",
    url: `/discover/movie?api_key=${API_Key}`,
  },
  fetchTopRated: {
    title: "Top Rated", //https://api.themoviedb.org/3/movie/top_rated?api_key=
    url: `/movie/top_rated?api_key=${API_Key}`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  },
  fetchRomanceMovies: {
    //error
    title: "Romance",
    urt: `/discover/movie?api_key=${API_Key}&with_genres=25`,
  },
  fetchMystery: {
    //error
    title: "Mystery",
    urt: `/discover/movie?api_key=${API_Key}&with_genres=32`,
  },
  fetchSciFi: {
    title: "Sci-F1",
    url: `/discover/movie?api_key=${API_Key}&with_genres=878`,
  },
  fetchwestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_Key}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_Key}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_Key}&with_genres=12`,
  },
};
