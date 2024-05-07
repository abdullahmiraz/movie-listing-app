"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    setFilteredFavorites(storedFavorites); // Initialize filteredFavorites with all favorites
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    setFilteredFavorites(updatedFavorites); // Update filteredFavorites after deletion
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = favorites.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredFavorites(filtered); // Update filteredFavorites based on search query
  };

  // Sort favorites alphabetically by title
  const sortedFavorites = [...filteredFavorites].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        {loading ? (
          <p className="text-xl">Loading...</p>
        ) : (
          <>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-1"
                placeholder="Search by title..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            {sortedFavorites.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold mt-6 mb-2">
                  Favorite Movies:
                </h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {favorites.map((movie) => (
                      <tr key={movie.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {movie.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {movie.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDelete(movie.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p className="text-xl">No movies found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
