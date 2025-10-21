interface TitleProps {
    title : string ;
}

const Title = (props: TitleProps) =>{
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
         
    )
}

export default Title ;