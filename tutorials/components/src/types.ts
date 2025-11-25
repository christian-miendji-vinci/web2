interface Pizza {
    title : string;
    id:number;
    content: string;
}


type NewPizza = Omit<Pizza , "id"> ;

export type {Pizza , NewPizza};

 