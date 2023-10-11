import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  return (
    <div className="px-5 max-w-3xl mx-auto">
      <Link to={"/menu"} className="text-sm text-blue-500">
        &larr; Back to Menu
      </Link>
      <p className="py-3 text-2xl font-bold">Yout Cart , ZPH</p>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className=" mt-5 flex gap-5">
        <button className="uppercase py-2 px-4 bg-yellow-400 rounded-3xl hover:scale-95 hover:bg-yellow-200 transition-all duration-150">
          Order Pizzas
        </button>
        <button className="uppercase py-2 px-4 bg-white rounded-3xl hover:scale-95 hover:bg-gray-50 transition-all duration-150">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
