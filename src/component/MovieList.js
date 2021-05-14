import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  async function getMovie() {
    const URL = "movieList";
    const params = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    try {
      const { data } = await axios.post(URL, params);

      if (data) {
        setMovies(data.result);
        console.log(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {movies.map((item) => (
        <MovieCard items={item} />
      ))}
    </div>
  );
};
export default MovieList;
//{
//  headers: {
//  "Access-Control-Allow-Origin": true,
//"Content-Type": "application/x-www-form-urlencoded",
//},
//}
