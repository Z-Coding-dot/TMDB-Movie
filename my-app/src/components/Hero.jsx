import React from 'react' 
import heroImage from '../assets/hero-img.png';
import Search from './Search';

const Hero = () => {
  return (
    <div className="backgroundImg px-10">
      <div className='flex justify-center items-center lg:-mt-10'>
        <img src={heroImage} alt="hero image" className="size-auto" />
      </div>
      <div className="flex flex-wrap justify-center items-center lg:-mt-12">
        <h2
          className="text-white text-3xl font-bold mx-auto max-w-4xl
           text-center sm:text-[64px] sm:leading-[76px] leading-tight tracking-[-1%]">
          Find{" "}
          <span className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] text-transparent bg-clip-text">
            Movies
          </span>{" "}
          You'll Enjoy <br /> Without the Hassle</h2>
      </div>
    </div>
  );
}

export default Hero
