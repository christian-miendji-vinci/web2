

interface HeaderProps {
  image: string ;
  url: string ;
  children: React.ReactNode ;
}

const Header = (props : HeaderProps) =>{
 return(
   <header>
      <div  className=" Introduction">
         <img
          src={props.image}
          alt={props.url} 
          className="intro-image"
          width="60"
        />
      </div>
      <div className="details">{props.children}</div>
    </header>
 );
};

export default Header ;