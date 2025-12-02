//import { useState } from "react";
import RamdomDog from "./Ramdog";

const App = () => {
  //const [refresh, setRefresh] = useState(false);

  return (
    <>
      <h1>CHOOSE YOURS DOGS </h1>
     
      <div style={{ display: "flex", flexDirection: "column", gap: 200 }}>
        <RamdomDog  />
        <RamdomDog  />
        <RamdomDog  />
      </div>
    </>
  );
};

export default App;
