interface Movie{
  title: string;
  director: string ;
}


interface CinemaProp{
    name: string;
    movie1: Movie ;
    movie2 : Movie ;
    
}

const Cinema = (prop: CinemaProp) =>{

 return(
    <div> <div> 
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movie1.title}</strong> - réalisateur :{" "}
            {prop.movie1.director}
          </li>
          <li>
            <strong>{prop.movie2.title}</strong> - realisateur :{" "}
            {prop.movie2.director}
          </li>
        </ul>
    </div>

    <div>
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movie1.title}</strong> - réalisateur :{" "}
            {prop.movie1.director}
          </li>
          <li>
           <strong>{prop.movie2.title}</strong> - réalisateur :{" "}
           {prop.movie2.director}
          </li>
        </ul>
    </div>
 </div>
 );  
};
export default Cinema ;