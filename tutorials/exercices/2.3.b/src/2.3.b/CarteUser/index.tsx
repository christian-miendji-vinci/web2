interface CarteUser {
  name: string;
  age: number;
}

interface PropCarteUser {
  cartes: CarteUser[];
}

const CarteUsers = (props: PropCarteUser) => {
  return (
    <div>
      <div>
        <h2>{props.cartes[0].name}</h2>
        <p>Age: {props.cartes[0].age}</p>
      </div>
      <div>
        <h2>{props.cartes[1].name}</h2>
        <p>Age: {props.cartes[1].age}</p>
      </div>
      <div>
        <h2>{props.cartes[2].name}</h2>
        <p>Age: {props.cartes[3].age}</p>
      </div>
    </div>
  );
};

export default CarteUsers;
