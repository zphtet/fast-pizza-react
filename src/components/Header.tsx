import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <header className=" w-full bg-yellow-400 px-5 flex items-center justify-between py-4  ">
      <Link to={"/"} className="block  uppercase font-bold">
        Fast Pizza Co.
      </Link>
      <SearchInput />
      <p className="uppercase hidden sm:block">Name</p>
    </header>
  );
};

export default Header;
