import { useState , useEffect } from "react";

interface Dog {
    message : string ;
    status : string ;
}

const RamdomDog = () => {
    const[dog , setDog] = useState<Dog | undefined>(undefined);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            setDog({
                message: data.message ?? "Dog does not exit",
                status: data.status ?? "lose",
            });
        });
    }, []);

    if(!dog){
        return <p>Loading...</p>
    }

    return(
        <div>
            <h2>DOG IMAGE</h2>
            <img src={dog.message} alt="Ramdom Dog" style={{maxHeight :200 , color:"pink"}} />
        </div>
    );
};

export default RamdomDog ;