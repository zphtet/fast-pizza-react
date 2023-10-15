import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="w-40 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
