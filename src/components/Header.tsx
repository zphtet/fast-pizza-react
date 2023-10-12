import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
const Header = () => {
  const name = useSelector((state: RootState) => state.user.name);
  return (
    <header className=" w-full bg-yellow-400 px-5 flex items-center justify-between py-4  ">
      <Link to={"/"} className="block  uppercase font-bold">
        Fast Pizza Co.
      </Link>
      <SearchInput />
      <p className="uppercase hidden sm:block">{name}</p>
    </header>
  );
};

export default Header;
