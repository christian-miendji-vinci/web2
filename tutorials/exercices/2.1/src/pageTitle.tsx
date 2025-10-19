interface PageTitleProp {
    title : string ;
}

const PageTitle = (prop : PageTitleProp) => {
    
    return(
    <div>
         <h1>{prop.title}</h1>
    </div>
    );
    
} ;

export default PageTitle ;