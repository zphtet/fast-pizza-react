import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const OrderNew = () => {
  const user = useSelector((state: RootState) => state.user);
  const [userData, setUserData] = useState({
    name: user.name,
    phone: "",
    address: "",
  });
  const [priority, setPriority] = useState(false);

  const changeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const clickCheckHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log("priority", target.checked);
    setPriority(target.checked);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="px-5 max-w-3xl mx-auto">
      <p className="text-xl py-5 font-bold sm:text-2xl">
        Ready to order ? Let's go !
      </p>

      <form className=" py-2 space-y-2 ">
        <div className="flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input py-2 h-auto w-full rounded-3xl text-sm focus:outline-yellow-400"
            value={userData.name}
            name="customer"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="Type here"
            className="input py-2 h-auto w-full rounded-3xl text-sm focus:outline-yellow-400"
            name="phone"
            value={userData.phone}
            onChange={changeHandler}
          />
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Enter Your Location</span>
          </label>
          <div className="flex items-center hover:outline-2 hover:outline-yellow-400 rounded-3xl pr-1  overflow-hidden  bg-white focus-within:ring-2 focus-within:ring-yellow-400 py-1">
            <input
              type="text"
              placeholder="Type here"
              className="flex-1 text-sm hover:outline-none px-5 focus:outline-none py-1 "
              name="address"
              value={userData.address}
              onChange={changeHandler}
            />
            <span className=" cursor-pointer text-center block rounded-3xl py-1 h-auto px-2 bg-yellow-400 hover:bg-yellow-200 w-[150px] hover:scale-95 transition-all duration-150">
              Get Position
            </span>
          </div>
        </div>
        <div className="checkbox-group flex gap-4 items-center pt-3">
          <input
            type="checkbox"
            id="priority"
            onClick={clickCheckHandler}
            className="w-6 h-6 accent-yellow-400 border-2 border-yellow-500 focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to give your order priority ? </label>
        </div>

        <div className="btn-container pt-5 flex justify-end">
          <button className="uppercase py-2 px-4 bg-yellow-400 rounded-3xl hover:scale-95 hover:bg-yellow-200 transition-all duration-150">
            Order Now $123.99
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderNew;
