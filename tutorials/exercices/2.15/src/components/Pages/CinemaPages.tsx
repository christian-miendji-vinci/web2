import { useState } from "react";
//import { useOutletContext } from "react-router-dom";
//import { type MovieItemContext } from "../../types";
import NavBar from "../NavBar/NavBar";
//import type { Movie } from "../../types";




const movie = {
    title: "LE PLUS GRAND CINEMA DE BELGIQUE",
    director: "CHRISTIAN TCHUINI BRYAN",
    description: "Un thriller sur les rêves et la réalité.",
    budget: "100000000",
    duree: 148,
  };

const MovieItem = () => {

  

  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    //console.log(`value before click: ${showDescription}`);
    setShowDescription(!showDescription);
  };

  return (
    <>
      <NavBar />
      <div onClick={handleClick}>
        <h3>{movie.title}</h3>
        <p>
          <strong>Cinema construit par :</strong> {movie.director}
        </p>
         Etant basé sur un model par rapport
        {showDescription && <p>{movie.description}</p>}
        <ul>
          
              <p>Avec un buget de  :{movie.budget} millions </p>
              <p>La durée du tout premier film Belge {movie.duree} minutes </p>
            
          
        </ul>
      </div>
    </>
  );
};

export default MovieItem;
