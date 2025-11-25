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

}
export interface MovieItemContext{
  title: string;
  director: string;
  description: string;
  name: string;
  movies: Movie[];
}
