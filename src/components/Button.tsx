type ButtonProps = {
  text: string;
  click?: () => void;
  small?: boolean;
  css?: string;
  disabled?: boolean;
};

const Button = ({ text, click, small, css, disabled }: ButtonProps) => {
  return (
    <button
      onClick={click}
      className={` px-8 py-2 bg-yellow-400 rounded-3xl hover:bg-yellow-200 hover:scale-95 outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-500 ring-offset-2 ${
        small && "px-4 py-1"
      } ${css}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
