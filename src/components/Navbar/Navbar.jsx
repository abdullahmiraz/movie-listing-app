import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-500 text-center text-lg font-semibold flex flex-wrap  max-w-6xl mx-auto p-2">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <NavbarItem title="New" param="fetchNew" />
    </div>
  );
};

export default Navbar;
