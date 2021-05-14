import React from "react";
import "./card.css";
const MovieCard = ({ items }) => {
  return (
    <div className="MovieContainer">
      <div className="div1">
        <img src={items.poster} alt="poster" />
      </div>
      <div className="div2">
        <h1>{items.title}</h1>
        <p>{items.director}</p>
        <p>{items.genre}</p>
        <p>{items.stars}</p>
      </div>
    </div>
  );
};
export default MovieCard;
