import React, { useState, useEffect } from "react";

export default function FilmList({ setter }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(r => r.json())
      .then(r => setFilms(r));
  }, []);

  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id} onClick={e => setter(film)}>
              {film.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
