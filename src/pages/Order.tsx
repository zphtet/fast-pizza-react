import React from "react";
import OrderItem from "../components/OrderItem";
const Order = () => {
  return (
    <div className="py-6 px-5 space-y-4 sm:space-y-8 max-w-3xl mx-auto">
      <div className="flex flex-col  gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <p className="text-xl font-semibold ">
          order <span className="text-2xl">#RCPHQ2 </span> status
        </p>
        <div className="flex gap-3 text-sm">
          <button className="px-4 pb-0.5 bg-red-400 text-white rounded-3xl ">
            {" "}
            Priority
          </button>
          <button className="px-4 pb-0.5 bg-green-400 text-white rounded-3xl">
            {" "}
            Preparing Order
          </button>
        </div>
      </div>
      <div className="bg-stone-200 p-5">
        <p>Only 44 minutes left 😊</p>
        <span className="text-sm text-gray-400">
          (Estimated delivery : Oct 11 , 03 : 22 PM)
        </span>
      </div>
      <div className=" divide-y last:border-b">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className="bg-stone-200 p-5 ">
        <p>Price Pizza : $12.33</p>
        <p>Price Priorite : $2.5</p>
        <p className=" font-bold">To Pay On Delivery : $123.34</p>
      </div>
      <div className="btn-container pt-5 flex justify-end">
        <button className="uppercase py-2 px-4 bg-yellow-400 rounded-3xl hover:scale-95 hover:bg-yellow-200 transition-all duration-150">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export const loader = async () => {};

export default Order;
