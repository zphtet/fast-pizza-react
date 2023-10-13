import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const CartOverview = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  const totalQty = cart.reduce((accum, item) => {
    return accum + (item.quantity as number);
  }, 0);
  const totalPrice = cart.reduce((accum, item) => {
    return accum + item.price! * item.quantity!;
  }, 0);
  if (cart.length === 0) return null;
  return (
    <div className="bg-stone-800 text-gray-200 uppercase px-5 py-3 sm:py-5 flex items-center justify-between">
      <div className="flex flex-1 gap-5">
        <p className="text-gray-200">{totalQty} Pizzas</p>
        <p className="text-gray-200">$ {totalPrice}</p>
      </div>
      <Link to={"/cart"} className="hover:scale-95 transition-all duration-100">
        Open Cart &rarr;{" "}
      </Link>
    </div>
  );
};

export default CartOverview;
