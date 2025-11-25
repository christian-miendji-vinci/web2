import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar =() => {
    const navigate = useNavigate();
    return(
        <nav>
            <button onClick={() => navigate("/")}>Acceuil</button>
            <button onClick={() => navigate("/list-Movies")}>Movies</button>
            <button onClick={() => navigate("/add")}>Ajouter</button>
        </nav>
    );
};

export default NavBar ;