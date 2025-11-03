import { useState } from "react";

interface ClickCounterProps {
    title :string ;
    message : string;
}

const ClickCounter10 = ({ title, message }: ClickCounterProps) => {

  const [count, setCount] = useState(0);
  const ClickCounter = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1) ;
  }
  
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={ClickCounter}>Click me</button>
      <p>Nombre de clics : {count}</p>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter10 ;