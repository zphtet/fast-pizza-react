import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/reducers/userSlice";
import { RootState } from "../store/store";
function Home() {
  const navigate = useNavigate();
  const [name, setYourName] = useState("");
  const dispatch = useDispatch();
  const myName = useSelector((state: RootState) => state.user.name);
  const clickHandler = () => {
    navigate("/menu");
    if (myName) return;
    dispatch(setName(name));
  };
  return (
    <div className=" py-10 px-0 flex flex-col gap-2 items-center justify-center text-center">
      <p className="text-2xl font-bold sm:text-3xl ">The best pizza.</p>
      <p className="text-yellow-400 text-2xl sm:text-3xl font-extrabold ">
        Straight out of the oven, straight to you.
      </p>
      <p>🖐 Welcome ! Pleaser start by telling us your name</p>
      {!myName && (
        <input
          type="text"
          className="text-sm mt-5 px-4 py-2 outline-none border rounded-3xl focus:ring focus:ring-yellow-500 sm:w-60"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setYourName(e.target.value)}
        />
      )}

      {(name.trim() || myName) && (
        <Button
          click={clickHandler}
          css="mt-5"
          text={`Go Shopping ${myName}`}
        />
      )}
    </div>
  );
}

export default Home;
