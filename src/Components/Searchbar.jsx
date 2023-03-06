import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="rounded-md shadow-sm w-full mx-auto flex justify-center">
      <input
        className="w-1/2 border-2 border-indigo-500 text-center py-2 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm transition duration-500"
        type="search"
        name="search"
        placeholder="Search freelancers"
      >
        <BiSearchAlt />
      </input>
    </div>
  );
};

export default Searchbar;
