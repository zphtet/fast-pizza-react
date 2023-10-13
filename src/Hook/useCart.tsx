import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/reducers/cartSlice";
import { cartItemType } from "../types/type";

const useCart = () => {
  // eslint-disable-next-line
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const addCartHandler = (menu: cartItemType) => {
    return dispatch(addToCart(menu));
  };

  const removeCartHandler = (id: number) => {
    return dispatch(removeFromCart(id));
  };

  const increaseHandler = (id: number) => {
    return dispatch(increaseQty(id));
  };
  const decreaseHandler = (id: number) => {
    return dispatch(decreaseQty(id));
  };
  return {
    removeCartHandler,
    decreaseHandler,
    increaseHandler,
    addCartHandler,
  };
};

export default useCart;
