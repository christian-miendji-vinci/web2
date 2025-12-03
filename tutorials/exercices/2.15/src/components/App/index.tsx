import { useState, type SyntheticEvent , useEffect} from "react";
import "./App.css";
import type { Movie , NewMovie , MoviesContext} from "../../types";
//import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import Header from "../Header";
import ScreenFilm from "../Pages/MovieListPage";
import {  useNavigate, Outlet} from "react-router-dom";
import { fetchMovies , addMovie } from "../movies.services";



const App = () => {
  const [name, setName] = useState("");
  const [title, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [hours, setHours] = useState<number>();
  const [link, setLink] = useState("https://");
  const [description, setDescription] = useState("...");
  const [budget, setBudget] = useState<number>();
  const [movies, setMovies] = useState<Movie[]>([]);
   
   const navigate = useNavigate();
   

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    initMovies();
  }, []);

  const onMovieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
      const movieToBeAdded = await addMovie(newMovie);
      console.log("Movie added:", movieToBeAdded);
      await initMovies();
      navigate("/application");
    } catch (error) {
      console.error(error);
    }
  };
  
   const movieContext: MoviesContext = {
    movies,
    onMovieAdded,
  };
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    //moviess({movie: title, Dirctor: director ,Hours: hours , Link: link , Description: description , Budget: budget ,Movies:movies  }); 
    navigate("/list-Movies");
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
        <Outlet context={movieContext}/>
        <p>WELCOME CHOOSING YOUR MOVIES</p>
        <ScreenFilm />
        <br />
        <form onSubmit={handleSubmit}  >
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


export default App;
