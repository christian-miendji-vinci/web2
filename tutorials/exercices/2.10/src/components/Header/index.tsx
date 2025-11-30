import { useState , type SyntheticEvent} from "react";
import "./Header.css";
interface HeaderProps {
    Notation : string;
    version :number ;
    link : string ;
    handleHeaderClick: () => void ;
}

const Header = ({Notation , handleHeaderClick , link}: HeaderProps) => {
    const [notation , setNotation] = useState("");

    const handleClick =(e: SyntheticEvent) => {
        const notationImput = e.target as HTMLInputElement ;
        console.log("Change your appreciation:" , notationImput);
        
        console.log(`Please put your appreciation: ${notation}`);
        setNotation(notationImput.value);
        handleHeaderClick() ;
    }
    return (
    <header onClick={handleClick} className="Presentation">
      <h1 className="Notation">
        {notation ? `${Notation}... I love that i became next day!` : Notation}
       
      </h1>
      <nav>
        <a href="https://www.bing.com/images/search?q=American+state+cinema&form=HDRSC3&first=1">{link}</a>
      </nav>
    </header>
  );
};

export default Header ;