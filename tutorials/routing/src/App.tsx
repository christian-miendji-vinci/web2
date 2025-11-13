import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const HomePage = () => (
  <div>
    <NavBar />
    <p>Home Page</p>
  </div>
);
const AboutPage = () => (
  <div>
    <NavBar />
    <p>About Page</p>
  </div>
);
const ContactPage = () => (
  <div>
    <NavBar />
    <p>Contact Page</p>
  </div>
);

const App = () => {
  return <div></div>;
};

export default App;
export { HomePage, AboutPage, ContactPage };
