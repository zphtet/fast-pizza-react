import React from "react";
import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-800 text-gray-200 uppercase px-5 py-3 sm:py-5 flex items-center justify-between">
      <div className="flex flex-1 gap-5">
        <p className="text-gray-200">1 Pizzas</p>
        <p className="text-gray-200">$18.99</p>
      </div>
      <Link to={"/cart"} className="hover:scale-95 transition-all duration-100">
        Open Cart &rarr;{" "}
      </Link>
    </div>
  );
};

export default CartOverview;
