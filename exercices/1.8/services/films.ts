import path from "node:path" ;
import {Film} from "../types";
import { NewFilm } from "../routes/films";
import {parse , serialize} from "../utils/json" ;
const jsonDbpath = path.join(__dirname , "/../data/films.ts") ;

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    description: "https://www.imdb.com/title/tt1375666/"
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "https://www.imdb.com/title/tt0816692/"
  },
  {
    id:4,
    title : "Guerrier du Noir",
    director : "Alpha Production",
    duration : 129,
    budget: 13,
    description:"https://e-vinci.github.io/js2/part1/refactoring/"
  },
  {
    id:5,
    title: "Miendji In the Virtual World",
    director : "Samy Powers Production Sarl" ,
    duration : 151,
    budget : 187 ,
    description :"https://randommer.io/random-movies" 
  }
];

export function readAllFilms(minimunDuration : number): Film[] {
    const films = parse(jsonDbpath ,defaultFilms) ;
    if(!minimunDuration){
        return films ;
    }
    const minimunDurationNumber = Number(minimunDuration) ;
    const filteredFilms = films.filter((film) =>{
        return film.duration <= minimunDurationNumber ;
    }) ;
    return filteredFilms ;

}

export function readOneFilm(id :number) : Film | undefined{
    const films = parse(jsonDbpath , defaultFilms) ;
    const film = films.find((film) => film.id === id) ;

    if(!film){
        return undefined ;
    }
    return film ;
}

export function createOneFilm(newFilm : NewFilm) : Film {
    const films = parse(jsonDbpath , defaultFilms) ;

    const nextId = films.reduce((maxId ,film) => (film.id > maxId ? film.id : maxId) , 0) + 1 ;
    const createFilm = {
        id : nextId ,
        ...newFilm ,
    }
    films.push(createFilm) ;
    serialize(jsonDbpath , films) ;
    return createFilm ;
}
export function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbpath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
        return undefined;
    }
    const [deletedFilm] = films.splice(index, 1);
    serialize(jsonDbpath, films);
    return deletedFilm;
}

export function updateOneFilm (
   filmId : number , newFilm : Partial<NewFilm>
) : Film | undefined {
    const films = parse(jsonDbpath , defaultFilms) ;
    const film = films.find((film) => film.id === filmId) ;
    
    if(!film){
        return undefined ;
    }
    if(newFilm.title !== undefined){
        film.title = newFilm.title! ;// the router already checks for the presence of title

    }
    if(newFilm.director !== undefined){
        film.director = newFilm.director! ;
    }
    if(newFilm.duration !== undefined){
        film.duration = newFilm.duration! ;
    }
    if(newFilm.budget !== undefined){
        film.budget = newFilm.budget! ;
    }
    if(newFilm.imageUrl !== undefined){
        film.imageUrl = newFilm.imageUrl! ;
    }
    if(film.description !== undefined){
        film.description = newFilm.description ;
    }
    serialize(jsonDbpath , films) ;
    return film ;
}
