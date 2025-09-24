import express from "express";
import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks" ;
import filmRouter from "./routes/films" ;



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks" , drinkRouter) ;
app.use("/films" , filmRouter ) ; 


// middleware pour compter
let getCompteur = 0 ; 
app.use((req , _res, next) =>{
    if(req.method === 'GET'){
        getCompteur ++ ;
        console.log(`GET counter : ${getCompteur}`);
        
    }
    next() ;
});


export default app;
