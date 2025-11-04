import ChangeColor from "../ChangeColor/ChangeColor";
import './App.css' ;

const ColorsDefaults = ["red" , "green" ,"yellow" , "blue" , "pink" ] ;
const App = () => {
  return (
    <>
    <div>
      <ChangeColor colors={ColorsDefaults}/>
    </div>
    </>
    
  );
}

export default App ;
