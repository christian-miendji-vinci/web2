interface Movie{
  title: string;
  director: string ;
  description : string ;
}

interface CinemaProp{
    name: string;
    movies: Movie[];
}

const Cinema = (prop: CinemaProp) =>{

 return(
    <div> <div> 
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movies[0].title}</strong> - réalisateur :{" "}
            {prop.movies[0].director}
          </li>
          <li>
            <strong>{prop.movies[1].title}</strong> - realisateur :{" "}
            {prop.movies[1].director}
          </li>
        </ul>
    </div>

    <div>
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movies[2].title}</strong> - réalisateur :{" "}
            {prop.movies[2].director}
          </li>
          <li>
           <strong>{prop.movies[3].title}</strong> - réalisateur :{" "}
           {prop.movies[3].director}
          </li>
        </ul>
    </div>
 </div>
 );  
};
export default Cinema ;