import React from "react";
import OrderItem from "../components/OrderItem";
import { getOrder } from "../utils/helper";
import { useLoaderData } from "react-router-dom";
import { returnOrderType } from "../types/type";
import formatDistance from "date-fns/formatDistance";
import { format } from "date-fns";
const Order = () => {
  const data = useLoaderData() as returnOrderType;
  const {
    customer,
    status,
    cart,
    priority,
    id,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
  } = data;
  return (
    <div className="py-6 px-5 space-y-4 sm:space-y-8 max-w-3xl mx-auto">
      <div className="flex flex-col  gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <p className="text-xl font-semibold ">
          order <span className="text-2xl">{id} </span> status
        </p>
        <div className="flex gap-3 text-sm">
          {priority && (
            <button className="px-4 pb-0.5 bg-red-400 text-white rounded-3xl ">
              {" "}
              Priority
            </button>
          )}

          <button className="px-4 pb-0.5 bg-green-400 text-white rounded-3xl">
            {" "}
            {status} Order
          </button>
        </div>
      </div>
      <div className="bg-stone-200 p-5">
        <p>
          Only {formatDistance(new Date(estimatedDelivery), Date.now())} minutes
          left 😊
        </p>
        <span className="text-sm text-gray-400">
          (Estimated delivery :{" "}
          {format(new Date(estimatedDelivery), "MMM d h:mm:ss aaaaa'm'")})
        </span>
      </div>
      <div className=" divide-y last:border-b">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className="bg-stone-200 p-5 ">
        <p>Price Pizza : ${orderPrice}</p>
        <p>Price Priorite : ${priorityPrice}</p>
        <p className=" font-bold">
          To Pay On Delivery :${orderPrice + priorityPrice}
        </p>
      </div>
      <div className="btn-container pt-5 flex justify-end">
        <button className="uppercase py-2 px-4 bg-yellow-400 rounded-3xl hover:scale-95 hover:bg-yellow-200 transition-all duration-150">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export const loader = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return await getOrder(id);
};

export default Order;
