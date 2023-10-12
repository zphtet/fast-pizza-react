type ButtonProps = {
  text: string;
  click?: () => void;
};

const Button = ({ text, click }: ButtonProps) => {
  return (
    <button
      onClick={click}
      className=" mt-5 px-8 py-2 bg-yellow-400 rounded-3xl hover:bg-yellow-200 hover:scale-95 outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-500 ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Button;
