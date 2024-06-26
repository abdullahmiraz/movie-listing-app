import React from "react";
import ResultItems from "./ResultItems";

const Results = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto gap-2 mt-4 items-stretch">
      {results?.map((result) => {
        return <ResultItems key={result.id} results={result} />;
      })}
    </div>
  );
};

export default Results;
