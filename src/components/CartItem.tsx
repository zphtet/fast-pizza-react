import React from "react";

const CartItem = () => {
  return (
    <div className="py-4 border-b sm:flex sm:items-center sm:justify-between">
      <p> 4 x Margherita</p>
      <div className="flex items-center justify-between gap-5">
        <p className="price font-semibold">$ 56.00</p>
        <div className="flex gap-4">
          <button className="w-[25px] h-[25px] ring-offset-2 bg-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400 ">
            -
          </button>

          <p>1</p>

          <button className="w-[25px] h-[25px] ring-offset-2 bg-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400">
            +
          </button>
        </div>

        <button className="px-4 py-1 text-sm bg-yellow-400 rounded-3xl transition-all duration-200 hover:bg-yellow-300 hover:scale-95 uppercase">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
