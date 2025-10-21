interface FooterText{
    footerText : string ;
}

const Footer = (props: FooterText) =>{
    return(
      <footer>{props.footerText}</footer> 
    );
};

export default Footer ;