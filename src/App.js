import { useEffect, useState } from "react";
import "./App.css";
import search from "./search.svg";
import MovieCard from "./MovieCard";

// API KEy: 60715b35

const API_URL = "https://www.omdbapi.com?apikey=60715b35";


function App() {
  const [movies, SetMovies] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");

  const SearchMOvies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    SetMovies(data.Search);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="app">
      <h1>Movie Hunter</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => SetSearchTerm(e.target.value)}
        />
        <img src={search} alt="search" onClick={() => SearchMOvies(searchTerm)} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
