import { Router } from "express";
import { Film } from "../types";
import { readAllFilms, readOneFilm , createOneFilm , deleteOneFilm ,updateOneFilm } from "../services/films";

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
  }
];
const router = Router() ;

// router.get("/" ,(_req ,res) =>{
//   return res.json(films) ;
// })

router.get("/:id" ,(req,res) => {
  const id = Number(req.params.id) ;
  //const films = parse(jsonDbpath , defaultFilms );
  // if(isNaN(id)){
    //return res.sendStatus(400) ;
  //}
  const film = readOneFilm(id) ;
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
   const {title , director , duration ,budget ,description } = body as NewFilm ;
  // const films = parse(jsonDbpath , defaultFilms) ;
   //const nextId = defaultFilms.reduce((maxId , film) => (film.id > maxId ? film.id : maxId) , 0) + 1;
   //const newFilm : Film = {
     //  id : nextId,
       //title ,
      // director ,
       //duration ,
    //}
   //defaultFilms.push(newFilm) ;
   //serialize(jsonDbpath , films) ;
  
  const newFilm = createOneFilm({title , director , duration ,budget ,description }) ;
   return res.json(newFilm) ;
})



router.get("/",(req , res) =>{
  
 // if(!req.query["minimun-duration"]){
   // return res.json(films) ;
 // }
  const minDuration = Number(req.query["minimun-duration"]) ;
  const films = readAllFilms(minDuration);
  
  //const filteredFilm =defaultFilms.filter((film) =>{
    //return film.duration <= minDuration ;
  //});
  return res.json(films) ;
})



router.get("/" , (req,res) =>{

  const {"starts-with" : prefix} = req.query ;
  let result = defaultFilms ;
  console.log(prefix);
  
  if(typeof prefix === "string" &&  prefix.trim() ){
     result = result.filter(film => film.title.toLowerCase().startsWith(prefix.toLowerCase())) ;
    console.log(result);
  }
  return res.json(result) ;
})



router.get("/" , (req,res) =>{

   const {"sort-by" : sortBy , order } = req.query ;
   let result  = [...defaultFilms] ;

   if(typeof sortBy === "string" && sortBy in defaultFilms[0]){
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


router.patch("/:id" , (req ,res ) => {
  const id = Number(req.params.id) ;
  //const films = parse(jsonDbpath , defaultFilms) ;
  //const film = defaultFilms.find((film) => film.id ===  id) ;
  //if(!film){
    //return res.sendStatus(404) ;
  //}
  const body : unknown = req.body ;
  if(
    !body || typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <=0 ))
  ){
    return res.sendStatus(400) ;
  }

  const{title , director ,duration , budget , imageUrl , description } : Partial<NewFilm> = body ;
  const updatedFilm = updateOneFilm(id ,{title , director ,duration , budget , imageUrl , description}) ;

  //if(title){
    //film.title = title ;
  //}
  //if(director){
    //film.director = director ;
  //}
  //if(duration){
    //film.duration = duration ;
  //}
  //serialize(jsonDbpath ,films) ;

  if(!updatedFilm){
    return res.sendStatus(404) ;
  }

  return res.json(updatedFilm) ;

})



router.delete("/:id" ,(req ,res ) =>{
  const id = Number(req.params.id) ;
  const  deletedFilm = deleteOneFilm(id) ;

  //const films = parse(jsonDbpath , defaultFilms) ;
  //const index = defaultFilms.findIndex((film) => film.id === id) ;

  //if(index === -1 ){
    //return res.sendStatus(404) ;
  //}
  //const deleteElements = defaultFilms.splice(index , 1) ;
  //serialize(jsonDbpath , films) ;

  if(!deletedFilm){
    return res.sendStatus(404);

  }

  return res.json(deletedFilm) ;
})


router.put("/:id" ,(req ,res ) =>{
  const id = Number(req.params.id) ;
  const body : unknown = req.body ;
  if(
    !body ||
    typeof body !== "object" ||
    !("title" in body ) ||
    !("director" in body ) ||
    !("duration" in body ) ||
    typeof (body as any).title !== "string" ||
    typeof (body as any).director !== "string" ||
    typeof (body as any).duration !== "number" ||
    !(body as any ).title.trim() ||
    !(body as any ).director.trim() ||
    (body as any).duration <= 0
  ){
    return res.sendStatus(400) ;
  }
  const{title , director ,duration , budget , imageUrl , description } = body as Film ;
  
  const index = defaultFilms.findIndex((film) => film.id === id ) ;
  const newFilm : Film = {
    id ,
    title ,
    director ,
    duration ,
    ...(budget !== undefined && {budget}) ,
    ...(description !== undefined && {description}) ,
    ...(imageUrl !== undefined && {imageUrl}),
  };

  if(index !== -1){
    defaultFilms[index] = newFilm ;
    return res.json(newFilm) ;
  }else{
    const idExists = defaultFilms.some((film) => film.id === id) ;
    if(idExists){
      return res.status(409) ;
    }
  }
  defaultFilms.push(newFilm);
  return res.sendStatus(200);
})

export default router ;
