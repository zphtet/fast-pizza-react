import React from "react";

const OrderItem = () => {
  return (
    <div className="py-3 ">
      <div className="flex items-center justify-between">
        <p>3 x ItlianPizza</p>
        <p className="font-bold">$ 12.34</p>
      </div>
      <p className="text-sm text-gray-400">Tomato, Mozzarella, Prosciutto</p>
    </div>
  );
};

export default OrderItem;
