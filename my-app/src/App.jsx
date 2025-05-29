import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {useDebounce} from 'react-use'
import Hero from './components/Hero';
import Search from './components/Search';
import Card from './components/Card';
import { infinity } from 'ldrs'
import MovieDetails from './components/MovieDetails ';
infinity.register()


const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const SEARCH_BASE_URL = "https://api.themoviedb.org/3/search/movie?query=";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [debounce, SetDebounce] = useState('');
 

  const fetchMovies = async(query = '') =>{
    setIsLoading(true)
    setError('');
    try{
      const endpoint = query
      ? `${SEARCH_BASE_URL} + ${encodeURIComponent(query)}`
      : `${API_BASE_URL}`
      
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok){throw new Error('Error fetching movies!')}
      const data = await response.json();
      if(data.response === 'false'){
        setError(data.message);
        console.log(data.message);
        setMovies([]);
        return;
      }

      setMovies(data.results);
      setIsLoading(true);

    }catch(error){
      console.log(`Error fetching movies please try again later: ${error}`)
      setError(`Error fetching movies please try again later: ${error}`);
    }finally{
      setIsLoading(false);
    }
  }

  useDebounce(() => SetDebounce(search), 700, [search])

  useEffect(() => {
    fetchMovies(debounce);
  },[debounce])

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={
    <>
     <Hero/>
     <Search search={search} setSearch={setSearch} />
     <div className='text-center my-5 px-10'>
     {isLoading && <l-infinity size="80" stroke="8" stroke-length="0.15" bg-opacity="0.1" speed="1.3"  color="white" ></l-infinity> }
      {error && <h1 className='text-red-500 text-center text-2xl mt-10'>{error}</h1>}
     </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-auto'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
      } />
      <Route path='/movie/:id' element={<MovieDetails/>}/>
     </Routes>
    </HashRouter>
  );
}

export default App
