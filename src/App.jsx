import React, { useState } from "react";
import "./components/index.css";
import FilmList from "./components/FilmList";
import FilmDetails from "./components/FilmDetails";

export default function App() {
  const [film, setFilm] = useState(null);

  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      <FilmList setter={setFilm} />
      <FilmDetails film={film} />
    </div>
  );
}
