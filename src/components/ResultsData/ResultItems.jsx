import React from "react";
import Card from "../UI/Card";
import Link from "next/link";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const ResultItems = ({ results }) => {
  return (
    <Card>
      <Link href={`/movie/${results.id}`}>
        <Image
          className="rounded-t-lg group-hover:opacity-70 transition-opacity duration-200 object-cover fit h-1/2"
          src={`https://image.tmdb.org/t/p/w500${
            results?.backdrop_path || results?.poster_path
          }`}
          width={500}
          height={300}
          // style={{ maxWidth: "100%", maxHeight: "160px" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Image is not available"
        />
        <div className="px-2">
          <p className="mt-2 line-clamp-2">{results?.overview}</p>
          <h2 className="truncate text-lg font-bold text-cyan-500 my-2">
            {results?.title || results?.original_title}
          </h2>
          <div className="flex justify-between items-center flex-wrap">
            <p className="mt-1">{results?.release_date}</p>
            <p className="flex items-center mt-1 mx-1">
              <FaRegThumbsUp className="mr-1 text-cyan-500" />
              {results?.vote_count}
            </p>
            <p className="flex items-center mt-1">
              <AiFillStar className="text-amber-500 mr-1" />
              {Number(results?.vote_average).toFixed(1)}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ResultItems;
