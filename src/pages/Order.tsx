import React from "react";
import OrderItem from "../components/OrderItem";
import { useLoaderData, useFetcher } from "react-router-dom";
import { returnOrderType } from "../types/type";
import formatDistance from "date-fns/formatDistance";
import { format } from "date-fns";
import type { MenuType } from "../types/type";
import UpdateOrder from "../components/UpdateOrder";
const Order = () => {
  const data = useLoaderData() as returnOrderType;
  const fetcher = useFetcher();
  const {
    status,
    cart,
    priority,
    id,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
  } = data;

  React.useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  const isLoading = fetcher.state === "loading";

  return (
    <div className="py-6 px-5 space-y-4 sm:space-y-8 max-w-3xl mx-auto">
      <div className="flex flex-col  gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <p className="text-xl font-semibold ">
          order <span className="text-2xl">#{id} </span> status
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
          Only {formatDistance(new Date(estimatedDelivery), Date.now())}
          left 😊
        </p>
        <span className="text-sm text-gray-400">
          (Estimated delivery :{" "}
          {format(new Date(estimatedDelivery), "MMM d h:mm:ss aaaaa'm'")})
        </span>
      </div>
      <div className=" divide-y last:border-b">
        {cart.map((item) => {
          const find = fetcher?.data?.find(
            (menu: MenuType) => menu.id === item.pizzaId
          );
          return (
            <OrderItem
              key={item.pizzaId}
              data={item}
              isLoading={isLoading}
              ingredients={find?.ingredients || []}
            />
          );
        })}
      </div>
      <div className="bg-stone-200 p-5 ">
        <p>Price Pizza : ${orderPrice}</p>
        <p>Price Priorite : ${priorityPrice}</p>
        <p className=" font-bold">
          To Pay On Delivery :${orderPrice + priorityPrice}
        </p>
      </div>
      <div className="btn-container pt-5 flex justify-end">
        {!priority && <UpdateOrder />}
      </div>
    </div>
  );
};

export default Order;
