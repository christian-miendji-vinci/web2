

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
          src={props.url}
          alt={props.image} 
          className="intro-image"
          width="150"
        />
      </div>
      <div className="details">{props.children}</div>
    </header>
 );
};

export default Header ;