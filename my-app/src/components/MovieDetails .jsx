import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { infinity } from 'ldrs'
infinity.register();

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Match your App.js authentication style
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}` // Consistent with your working code
  }
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        
        // Using headers auth like your App.js
        const response = await fetch(
          `${BASE_URL}/movie/${id}`, // ← No api_key in URL
          API_OPTIONS // ← Uses headers auth
        );

        if (!response.ok) throw new Error('Failed to fetch movie details');
        
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="text-center my-50 p-4">
        <h2 className="text-red-500 text-xl mb-5">Error: {error}</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          <FaArrowCircleLeft className="inline mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <l-infinity size="80" stroke="8" stroke-length="0.15" bg-opacity="0.1" speed="1.3" color="white"></l-infinity>
        </div>
      )}
      
      {!loading && (
        <>
            {/* Backdrop Image */}
            <div className='mb-10 hidden sm:block'>
            {movie.backdrop_path && (
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`${movie.title} backdrop`}
                className="object-cover w-full h-[500px]  rounded-t-xl"/>
                <div className="absolute bg-gradient-to-t from-dark-100 to-transparent w-full h-full top-0"></div>

            </div>
          )}
          </div>
          
          <div className="flex sm:flex-row flex-col items-center my-5 justify-between px-4 sm:px-20 gap-10">
            {/* Poster Image */}
            {movie.poster_path && (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            )}
            
            {/* Movie Details */}
            <div className="w-full text-light-100 text-left">
              <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
              <p className="text-light-200 mb-4">{movie.tagline}</p>
              
              <div className="mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {movie.release_date?.split('-')[0]}
                </span>
                <span className="ml-2 bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                  {movie.runtime} minutes
                </span>
              </div>
              
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-light-200">{movie.overview}</p>
              </div>
              
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Genres</h2>
                <div className="flex flex-wrap gap-2">
                  {movie.genres?.map(genre => (
                    <span key={genre.id} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Rating</h2>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{movie.vote_average?.toFixed(1)}</span>
                  <span className="text-gray-500 ml-2 text-2xl font-bold">/10</span>
                </div>
              </div>

               <div className='text-light-200 mt-10 flex gap-2 items-center hover:text-blue-900'>
                  <Link to={'/'}><h2><FaArrowCircleLeft className="inline mr-2" />Back to Home</h2></Link>
                </div>
            </div>
          </div>
          
        
        </>
      )}
    </div>
  );
};

export default MovieDetails;


