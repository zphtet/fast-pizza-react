import React from "react";

type BtnProps = {
  text: string;
  click?: () => void;
};

const ButtonCircle = ({ text, click }: BtnProps) => {
  return (
    <button
      className="w-[25px] h-[25px] ring-offset-2 bg-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400 outline-none"
      onClick={click}
    >
      {text}
    </button>
  );
};

export default ButtonCircle;
