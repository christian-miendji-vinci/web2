import images from "../image/108387402.webp" ;
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";

const HomePage = () =>{
    return(
        <>
        <NavBar />
         <div>
            <h1><i>UGC vous acceuil dans le cinema du siecle</i></h1>
            <section className="Cinema">
             <h2>Choississez votre navigation!</h2>
             <img src={images}  alt="Image d'acceuil" />
            </section>
         </div>
        </>
    );
}

export default HomePage ;