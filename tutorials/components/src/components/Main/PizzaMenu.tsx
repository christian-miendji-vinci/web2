import "./PizzaMenu.css";
const pizzas = [
  {
    id: 1,
    title: "4 fromages",
    contient: "Gruyère , Sérac , Appenzel , Gorgonzola , Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    contient: "Tomates , Courgettes , Oignons , Aubergines , Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    contient: "Mozarella , Tomates , Oignons , Poivrons , Champignons , Olives",
  },
  {
    id: 4,
    title: "Alpagne",
    contient: "Gruyère , Mozarella , Lardons , Tomates",
  },
  {
    id: 5,
    title: "Diable",
    contient: "Tomates , Mozarella , Chorizo Piquant , Jalapenos",
  },
];

const PizzaMenu = () => {
  return (
    <table className="pizza-menu">
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => (
          <tr key={pizza.id}>
            <td>{pizza.title}</td>
            <td>{pizza.contient}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PizzaMenu;
