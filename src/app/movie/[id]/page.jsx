"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";

const Page = ({ params }) => {
  const paramsId = params.id;
  const [isFavorite, setIsFavorite] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${paramsId}?api_key=${
            process.env.API_KEY || "0bc8acac0b7cef20423f33edcb6c7fae"
          }`
        );

        if (response.status !== 200)
          throw new Error("Can not fetch movie data!");

        setMovieData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [paramsId]);

  if (!movieData) return <p>Loading...</p>; // Display loading message while data fetches

  if (!movieData || Object.keys(movieData).length === 0) {
    return <p>No movie movieData found!</p>; // Handle empty data case
    
  }

  

  return (
    <div className="p-6 flex flex-col lg:flex-row items-center content-center mt-12 max-w-6xl h-full mx-auto ">
      <Image
        className="rounded-lg mb-4 sm:mr-4"
        src={`https://image.tmdb.org/t/p/w500${
          movieData.backdrop_path || movieData.poster_path
        }`}
        width={500}
        height={400}
        style={{ maxWidth: "100%", height: "100%" }}
        placeholder="blur"
        blurmovieDataURL="/spinner.svg"
        alt="Movie Image"
      />
      <div className="sm:w-9/12">
        <h2 className="text-2xl font-bold text-cyan-500 mb-2">
          {movieData.title || movieData.original_title}
        </h2>
        <p className="mt-2">
          <span className="text-xl font-semibold text-cyan-500 mr-1">
            Overview:
          </span>
          {movieData.overview}
        </p>
        <p className="mt-2">
          <span className="text-xl font-semibold text-cyan-500 mr-1">
            Production country:
          </span>
          {movieData.production_countries[0]?.name || "Not available"}
        </p>
        <p className="mt-2">
          <span className="text-xl font-semibold text-cyan-500 mr-1">
            Date Released:
          </span>
          {movieData.release_date}
        </p>
        <p className="mt-2">
          <span className="text-xl font-semibold text-cyan-500 mr-1">
            Budget($):
          </span>
          {movieData.budget}
        </p>
        <div className="flex items-center mt-2 flex-wrap">
          <p className="flex items-center mr-8 mb-2">
            <AiFillStar className="text-amber-500 mr-1 text-xl" />
            {Number(movieData.vote_average).toFixed(1)}
          </p>
          {movieData.revenue !== 0 && (
            <p className="mr-8 flex items-center mb-2">
              <BsCurrencyDollar className="mr-1 text-xl text-green-500" />
              {movieData.revenue.toLocaleString("en-Us")}
            </p>
          )}
          <p className="mr-8 flex items-center mb-2">
            <BiTimeFive className="mr-1 text-xl text-cyan-500" />
            {movieData.runtime} Minutes
          </p>
        </div>

        {isFavorite ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleRemoveFromFavorites}
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
