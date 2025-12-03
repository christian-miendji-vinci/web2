import  type { NewMovie , Movie} from "../types";


const addMovie = async (newMovie : NewMovie) => {
    try{
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:3000/films" , options);

      if(!response.ok)
        throw new Error(
         `fetch error: ${response.status} : ${response.statusText}`
      );
      const createdPizza = await response.json() ;
      return createdPizza ;

    }catch(err){
      console.error("AddMoviePage::error", err);
      
    }
   
  };

const fetchMovies = async() : Promise<Movie[]> => {
    try {
      const response = await fetch("http://localhost:3000/films");

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

  export {fetchMovies , addMovie} ;