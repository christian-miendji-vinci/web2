import { useState } from "react";
import RamdomDog from "./Ramdog";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <h1>CHOOSE YOURS DOGS </h1>
     
      <div style={{ display: "flex", flexDirection: "column", gap: 200 }}>
        <RamdomDog key={`${refresh}1`} />
        <RamdomDog key={`${refresh}2`} />
        <RamdomDog key={`${refresh}3`} />
      </div>

      <button
        onClick={() => setRefresh(!refresh)}
         style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
       DOGS
      </button>
    </>
  );
};

export default App;
