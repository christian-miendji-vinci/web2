import type { Movie } from "../../types";
//import { useOutletContext } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const ScreenFilm = () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      duree: 140,
    },
    {
      id: 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      duree: 96,
    },
    {
      id: 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
      duree: 130,
    },
    {
      id: 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
      duree: 158,
    },
  ];

  return (
    <>
      <NavBar />
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
    </>
  );
};

export default ScreenFilm;
