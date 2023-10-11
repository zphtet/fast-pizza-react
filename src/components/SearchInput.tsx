import React from "react";

const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        className="w-40 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order #"
      />
    </form>
  );
};

export default SearchInput;
