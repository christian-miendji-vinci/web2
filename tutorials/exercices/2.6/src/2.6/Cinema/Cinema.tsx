import MovieItem from "../MovieItem/MovieItem";

interface Movie{
  title: string;
  director: string ;
  description : string ;
}

interface CinemaProp{
    name: string;
    movies: Movie[];
}

const Cinema = ({name, movies}: CinemaProp) =>{

 return(
    <div> 
        <h2>{name}</h2>
        <ul>
          {movies.map((movie , index) => (
            <li key={index}>
             <MovieItem
               title={movie.title}
               director={movie.director}
               description={movie.description}
             />
            </li>
          ))}
        </ul>
    </div>
 );  
};
export default Cinema ;