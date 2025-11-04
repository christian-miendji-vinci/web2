import { useState } from "react";
//import boxColor from'./ChangeColor.css';

interface ColorBoxProps{
    colors :string[];
}

const ChangeColor = ({ colors }: ColorBoxProps) => {

   const [currentIndex , setCurrentIndex] = useState(0) ;
    const currentColor = colors[currentIndex];
   
   const nextIndex = (currentIndex + 1) % colors.length ;
   const nextColor = colors[nextIndex] ;

   const handleClick = () => {
     setCurrentIndex(nextIndex) ;
   }
  
   
   return(
     <div style={{background: currentColor}}>
        <button onClick={handleClick}>{nextColor}</button>
        <p style={{color: "black" , textTransform: "capitalize"}}>{currentColor}</p>
     </div>
   );
}
export default ChangeColor ;


