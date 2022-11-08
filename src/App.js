import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4403ba30';



const App = () => {
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
    <div className='search'>
      <input
        placeholder='Search for movies'
        value="Batman"
        onChange={() => {}}
        />
      <img 
        src={SearchIcon}
        alt="search"
        onClick={() => {}}
      />
    </div>
    <div className='container'>

    </div>
    </div>
  );
}

export default App;