import { useEffect } from 'react';
import './App.css';


// API KEy: 60715b35

const API_URL = 'https://www.omdbapi.com?apikey=60715b35';

function App() {

  const SearchMOvies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(()=>{
    SearchMOvies("Spiderman");
  },[]);

  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
}

export default App;
