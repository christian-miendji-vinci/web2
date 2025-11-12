import type { Movie } from "../../types";

interface MovieProps {
    movies : Movie[] ;
}

const ScreenFilm = ({movies}: MovieProps) => {
  return (
    <table className="movie-presentation">
      <thead>
        <tr>
          <th>Movie</th>
          <th>Director</th>
          <th>Hours(enMinutes)</th>
          <th>Link(LienDuFilm)</th>
          <th>Description(QuelquesMots)</th>
          <th>Budget(EnMillions)</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.duree}</td>
            <td>{movie.lien}</td>
            <td>{movie.description}</td>
            <td>{movie.budget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScreenFilm ; 