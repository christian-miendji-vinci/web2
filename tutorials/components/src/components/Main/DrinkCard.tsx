interface DrinkCardProps {
  title: string;
  image: string;
  children: React.ReactNode /**props.children permet d'encapsuler 
  des détails spécifiques sur chaque boisson (volume, prix, etc.) 
   Nous utilisons React.ReactNode comme type pour children car ça peut
    être tout type d'élément React.*/;
}

const DrinkCard = (props: DrinkCardProps) => {
  return (
    <div className="drink-card">
      <img
        src={props.image}
        alt={props.title}
        className="drink-image"
        width="50"
      />
      <h2>{props.title}</h2>
      <div className="drink-details">{props.children}</div>
    </div>
  );
};

export default DrinkCard;
