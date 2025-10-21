interface CinemaProp {
  name: string;
  movie1Title: string;
  movie1Director: string;
  movie2Title: string;
  movie2Director: string;
}

const Cinema = (prop: CinemaProp) => {
  return (
    <div>
      {" "}
      <div>
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movie1Title}</strong> - réalisateur :{" "}
            {prop.movie1Director}
          </li>
          <li>
            <strong>{prop.movie1Title}</strong> - realisateur :{" "}
            {prop.movie1Director}
          </li>
        </ul>
      </div>
      <div>
        <h2>{prop.name}</h2>
        <ul>
          <li>
            <strong>{prop.movie2Title}</strong> - réalisateur :{" "}
            {prop.movie2Director}
          </li>
          <li>
            <strong>{prop.movie2Title}</strong> - réalisateur :{" "}
            {prop.movie2Director}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Cinema;
