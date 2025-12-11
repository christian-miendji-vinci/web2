import type { NewMovie, Movie } from "../types";

const addMovie = async (newMovie: NewMovie) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/films", options);

    if (!response.ok)
      throw new Error(
        `fetch error: ${response.status} : ${response.statusText}`
      );
    const createdPizza = await response.json();
    return createdPizza;
  } catch (err) {
    console.error("AddMoviePage::error", err);
  }
};

const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("/api/films");

    if (!response.ok)
      throw new Error(
        `fetch error : ${response.status} : ${response.statusText}`
      );

    const movies = await response.json();

    return movies;
  } catch (err) {
    console.error("getAllMovies::error: ", err);
    throw err;
  }
};

const deleteMovie = async (movie: Movie): Promise<void> => {
  try {
    const response = await fetch(`/api/films/${movie.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete movie : " + response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchMovies, addMovie , deleteMovie };
