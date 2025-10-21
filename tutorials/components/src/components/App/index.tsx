
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
//import sound from "./assets/sounds/Infecticide-11-Pizza-Spinoza.mp3" ;
//import logo from "./assets/images/js-logo.png" ;
//import pizzaBackground from "./assets/images/pizza.jpg" ;



function App() {
  return(
    <div className="page">
      <Header title="We love Pizza" version={1} />
      <Main />
      <Footer />
    </div>
  );
}
export default App ;
