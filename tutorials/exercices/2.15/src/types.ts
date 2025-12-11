 export interface Movie {
     id:number;
     title :string ;
     director : string ;
     duree : number;
     lien?: string ;
     description? : string;
     budget?: string ;
}

export interface MoviesContext{
    movies :Movie[];
    onMovieAdded : (newMovie: NewMovie) => Promise<void> ;
    onMovieDeleted: (movie: Movie) => void;
}

export type NewMovie = Omit<Movie, "id">;

export interface MovieItemContext{
  title: string;
  director: string;
  description: string;
  //ame: string;
  movies: Movie[];
}
