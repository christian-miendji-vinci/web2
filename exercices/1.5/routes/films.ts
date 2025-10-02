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

// router.get("/" ,(_req ,res) =>{
//   return res.json(films) ;
// })

router.get("/:id" ,(req,res) => {
  const id = Number(req.params.id) ;
  if(isNaN(id)){
    return res.sendStatus(400) ;
  }
  const film = films.find((film) => film.id === id) ;
  if(!film){
    return res.sendStatus(404);
  }
  return res.json(film) ;
})

type NewFilm = Omit<Film , "id"> ;
export type {NewFilm} ;

router.post("/" , (req ,res) =>{
   const body : unknown = req.body ;
   if(
    !body ||
    typeof body !== "object" ||
    !("title" in  body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration  !== "number" ||
    ! body.title.trim() ||
    ! body.director.trim() ||
     body.duration <= 0
   ){
     return res.sendStatus(400) ;
   }
   const {title , director , duration } = body as NewFilm ;
   const nextId = films.reduce((maxId , film) => (film.id > maxId ? film.id : maxId) , 0) + 1;
   const newFilm : Film = {
       id : nextId,
       title ,
       director ,
       duration ,
       
   }
   films.push(newFilm) ;
   return res.json(newFilm) ;
})

router.get("/",(req , res) =>{
  if(!req.query["minimun-duration"]){
    return res.json(films) ;
  }
  const minDuration = Number(req.query["minimun-duration"]) ;
  console.log(minDuration);
  
  const filteredFilm =films.filter((film) =>{
    return film.duration <= minDuration ;
  });
  return res.json(filteredFilm) ;
})

router.get("/" , (req,res) =>{

  const {"starts-with" : prefix} = req.query ;
  let result = films ;
  console.log(prefix);
  
  if(typeof prefix === "string" &&  prefix.trim() ){
     result = result.filter(film => film.title.toLowerCase().startsWith(prefix.toLowerCase())) ;
    console.log(result);
    
    
  }
  return res.json(result) ;
})

router.get("/" , (req,res) =>{

   const {"sort-by" : sortBy , order } = req.query ;
   let result  = [...films] ;

   if(typeof sortBy === "string" && sortBy in films[0]){
     result.sort((a, b) =>{
      const valA = a[sortBy as keyof typeof a] ;
      const valB = b[sortBy as keyof typeof b] ;
      if(typeof valA === "string" && typeof valB ==="string"){
        return order=== "desc"
        ? (valB).localeCompare(valA)
        : (valA).localeCompare(valB);
      } 
      if (typeof valA === "number" && typeof valB === "number") {
        return order === "desc" ? valB - valA : valA - valB;   
      }

      return 0;  
    });
   }

  return res.json(result); 
})




export default router 
