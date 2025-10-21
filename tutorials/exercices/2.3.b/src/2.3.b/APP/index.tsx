import CarteUsers from "../CarteUser";
import Footer from "../Footer";
import Title from "../Title";
import "./App.css";

const App = () => {
  const cartesTables = [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    },
  ]; 

  return (
    <div>
      <Title title="Welcome to My App" />

      <CarteUsers cartes={cartesTables} />

      <Footer footerText="© 2023 My App" />
    </div>
  );
};

export default App;
