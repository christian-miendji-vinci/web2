import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { type MovieItemContext } from "../../types";


const MovieItem = () => {
  const {
    title,
    director,
    description,
    name,
    movies,
  }: MovieItemContext = useOutletContext();

  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    //console.log(`value before click: ${showDescription}`);
    setShowDescription(!showDescription);
  };

  return (
    <div onClick={handleClick}>
      <h3>{title}</h3>
      <p>
        <strong>Réalisé par :</strong> {director}
      </p>
      {showDescription && <p>{description}</p>}
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <p>Notre budget est :{movie.budget}</p>
            <p>La durée du film{movie.duree}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieItem;
