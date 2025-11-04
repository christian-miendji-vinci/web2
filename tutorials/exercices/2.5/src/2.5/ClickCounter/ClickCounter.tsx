import { useState } from "react";

interface ClickCounterProps {
    title :string ;
    message : string;
    hoverMessage: string ;
}

const ClickCounter10 = ({ title, message , hoverMessage }: ClickCounterProps) => {

  const [count, setCount] = useState(0);
  const [isHovered , setIsHovered] = useState(false) ;
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const ClickCounter = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1) ;
  }

  return (
    <div
      onMouseEnter= {handleMouseEnter}
      onMouseLeave= {handleMouseLeave}
    >
      <h2>{title}</h2>
      {isHovered && <p>{hoverMessage}</p>}
      <button onClick={ClickCounter}>Click me</button>
      <p>Nombre de clics : {count}</p>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter10 ;