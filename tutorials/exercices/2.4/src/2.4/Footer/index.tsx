import Header from "../Header";
import type { ReactElement } from "react";

interface FooterTextProps{
    footerText : string ;
    children : ReactElement<typeof Header>| ReactElement<typeof Header>[] ;

}

const Footer = (props: FooterTextProps) =>{
    return(
      <footer>
        <div className="footer-text">
          <p>{props.footerText}</p>
          <div className="same-things">{props.children}</div>
        </div>
      </footer> 
    );
};

export default Footer ;