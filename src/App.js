import { useEffect, useState } from 'react';
import './App.css';
import search from './search.svg';
import MovieCard from './MovieCard';

// API KEy: 60715b35

const API_URL = 'https://www.omdbapi.com?apikey=60715b35';

const movie1 = {
    "Title": "Mission: Impossible - Dead Reckoning Part One",
    "Year": "2023",
    "imdbID": "tt9603212",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_SX300.jpg"
}


function App() {
  const [movies, SetMovies] = useState([])

  const SearchMOvies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json();
    SetMovies(data.Search);
  };

  useEffect(()=>{
    SearchMOvies("Spiderman");
  },[]);

  return (
    <div className="app">
      <h1>Movie Hunter</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies' 
          value="Spiderman"
          onChange={() =>{}}
        />
        <img 
          src={search} 
          alt="search" 
          onClick={() =>{}}
        />
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>
            {movies.map((movie)=>(<MovieCard movie={movie}/>))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
