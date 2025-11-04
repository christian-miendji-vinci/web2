import { useState } from "react";

interface MovieItemProps {
  title: string;
  director: string;
  description: string;
}

const MovieItem = ({ title, director, description }: MovieItemProps) => {
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
    </div>
  );
};

export default MovieItem;
