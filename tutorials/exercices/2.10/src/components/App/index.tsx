import { useState, type SyntheticEvent } from "react";
import "./App.css";
import type { Movie } from "../../types";
//import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import Header from "../Header";
import ScreenFilm from "../Pages/MovieListPage";
//import { Outlet } from "react-router-dom";

const AnotherMovies = [
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
  {
    id: 5,
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
    duree: 180,
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [title, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [hours, setHours] = useState<number>();
  const [link, setLink] = useState("https://");
  const [description, setDescription] = useState("...");
  const [budget, setBudget] = useState<number>();
  const [movies, setMovies] = useState(AnotherMovies);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit:", title, director, hours, link, description, budget);

    const newMovie: Partial<Movie> = {
      id: nextMovieId(movies),
      title: title,
      director: director,
      duree: hours,
    };
    if (budget) newMovie.budget = budget.toString();
    if (description) newMovie.description = description;
    if (link) newMovie.lien = link;

    setMovies([...movies, newMovie as Movie]);
  };

  const handleMovieChange = (e: SyntheticEvent) => {
    const movieInput = e.target as HTMLInputElement;
    console.log("change in movieInput:", movieInput);
    setMovie(movieInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput);
    setDirector(directorInput.value);
  };

  const handleLinkChange = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", linkInput);
    setLink(linkInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", descriptionInput);
    setDescription(descriptionInput.value);
  };

  const handleHoursChange = (e: SyntheticEvent) => {
    const hoursInput = e.target as HTMLInputElement;
    console.log("change in DureeInput:", hoursInput);
    setHours(Number(hoursInput.value));
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in DureeInput:", budgetInput);
    setBudget(Number(budgetInput.value));
  };

  const handleHeaderClick = () => {
    setName(name);
  };

  return (
    <main>
      <Header
        Notation="BIENVENUE QUE DESIREZ VOUS REGARDER ?"
        version={1}
        link="Cinema Americains"
        handleHeaderClick={handleHeaderClick}
      />
      <div>
        <p>WELCOME CHOOSING YOUR MOVIES</p>
        <ScreenFilm />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleMovieChange}
            required
          />
          <label htmlFor="director">Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <label htmlFor="duree">Hours</label>
          <input
            value={hours}
            type="number"
            id="hours"
            min="1"
            name="hours"
            onChange={handleHoursChange}
            required
          />
          <label htmlFor="lien">Link</label>
          <input
            value={link}
            type="text"
            id="link"
            name="link"
            onChange={handleLinkChange}
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="number"
            id="budget"
            min="1000000"
            name="budget"
            onChange={handleBudgetChange}
          />
          <button type="submit">Ajouter</button>
        </form>
        <Footer />
      </div>
    </main>
  );
};

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, title) => Math.max(maxId, title.id), 0) + 1;
};

export default App;
