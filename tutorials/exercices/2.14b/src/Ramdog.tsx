import { useState, useEffect } from "react";
import type { Dog } from "./type";

const RamdomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const [isHovered , setIsHovered]= useState(false) ;

  useEffect(() => {
    fetchDogs();
    const interval = setInterval(() => {
      if(!isHovered){
          fetchDogs() ;
      }
    } , 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  
  const fetchDogs = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      const dogs = await response.json();
      setDog(dogs);
    } catch (err) {
      console.log("RamDog ::error :", err);
    }
  };

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>DOG IMAGE</h2>
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        src={dog.message}
        alt="Ramdom Dog"
        style={{ maxHeight: 200}}
      />
    </div>
  );
};

export default RamdomDog;
