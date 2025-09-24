import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
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
  }
];
const router = Router() ;
router.get("/" ,(_req ,res) =>{
  return res.json(films) ;
})

export default router 
