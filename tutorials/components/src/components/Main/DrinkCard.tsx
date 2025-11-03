interface DrinkCardProps {
  title: string;
  image: string;
  children: React.ReactNode /**props.children permet d'encapsuler 
  des détails spécifiques sur chaque boisson (volume, prix, etc.) 
   Nous utilisons React.ReactNode comme type pour children car ça peut
    être tout type d'élément React.*/;
}

const DrinkCard = ({title , image, children}: DrinkCardProps) => {
  return (
    <div className="drink-card">
      <img
        src={image}
        alt={title}
        className="drink-image"
        width="50"
      />
      <h2>{title}</h2>
      <div className="drink-details">{children}</div>
    </div>
  );
};

export default DrinkCard;
