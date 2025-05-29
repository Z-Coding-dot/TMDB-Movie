import React from 'react'
import star from '../assets/star.svg';
import NoMovie from '../assets/No-Poster.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Card = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`} className='group'>
    <div className="px-10 py-5 text-white">
      <div
       className="mx-auto rounded-2xl p-5 shadow-inner bg-dark-100
       transition-transform duration-300 group-hover:scale-105">
        <img
          className="w-full h-auto rounded-lg "
          alt={movie.title}
          loading='lazy'
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `${NoMovie}` }/>

        <div className="text-base font-bold line-clamp-1 mt-2">
          <h3>{movie.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={star} alt="Start Icon" />
            <p className="text-sm font-medium">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </p>
          </div>
          <span className="text-sm text-gray-500">●</span>
          <p className="capitalize font-medium text-base">
            {movie.original_language}
          </p>
          <span className="text-sm text-gray-500">●</span>
          <p className="text-sm font-medium">{movie.release_date ? movie.release_date.split("-",[1]) : 'N/A'}</p>
        </div>
      </div>
    </div>
     </Link>
  );
}

export default Card
