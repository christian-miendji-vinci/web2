import { Request} from "express" ;

interface AuthenticatedUser {
  username : string ;
  token: string ;
}

interface User {
  id: number ;
  username: string ;
  password : string ;
}

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;
type PotentialUser = Omit<User , "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

interface AuthenticatedRequest extends Request {
   user? : User ;
}

interface jwtPayload {
  username : string ;
  exp: number ;
  iat : number ;
}

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink , User , AuthenticatedUser , PotentialUser ,AuthenticatedRequest , jwtPayload};
