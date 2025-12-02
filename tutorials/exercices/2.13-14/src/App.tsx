import { useState, useEffect } from "react";

interface Joke {
  category: string;
  joke: string;
}

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  
  // redisplay a joke every 10 seconds
  useEffect(() => {
    const fetchJoke = () => {
      console.log("here");
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          
          setJoke({
            joke: data.joke ?? "No joke found",
            category: data.category ?? "Unknown",
          });
        })
        .catch((err) => console.error(err));
    };
    // fetchJoke();
    const interval = setInterval(fetchJoke, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!joke) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Ramdom joke</h3>
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>{joke.joke}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
};

export default App;
