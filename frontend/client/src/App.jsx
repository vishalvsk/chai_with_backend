import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((Response) => {
        setJoke(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: "50%" }}>Vishal with code </h1>
      <p style={{ marginLeft: "50%" }}>jokes :- {joke.length}</p>
      <div className="joke">
        {joke.map((joke, index) => (
          <div key={index}>
            <h5>{joke.content}</h5>
            <p>{joke.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
