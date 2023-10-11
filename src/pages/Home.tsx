import React from "react";

function Home() {
  return (
    <div className=" py-10 px-0 flex flex-col gap-2 items-center justify-center text-center">
      <p className="text-2xl font-bold sm:text-3xl ">The best pizza.</p>
      <p className="text-yellow-400 text-2xl sm:text-3xl font-extrabold ">
        Straight out of the oven, straight to you.
      </p>
      <p>🖐 Welcome ! Pleaser start by telling us your name</p>
      <input
        type="text"
        className="text-sm mt-5 px-4 py-2 outline-none border rounded-3xl focus:ring focus:ring-yellow-500 sm:w-60"
        placeholder="Your Full Name"
      />
      <button className=" mt-5 px-8 py-2 bg-yellow-400 rounded-3xl hover:bg-yellow-200 hover:scale-95 transition-all duration-200">
        Go Shopping
      </button>
    </div>
  );
}

export default Home;
