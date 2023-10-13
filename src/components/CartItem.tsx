// import React from "react";
import { useDispatch } from "react-redux";
import { cartItemType } from "../types/type";
import Button from "./Button";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/reducers/cartSlice";
import ButtonCircle from "./ButtonCircle";

type CartItemProps = {
  data: cartItemType;
};
const CartItem = ({ data }: CartItemProps) => {
  const { pizzaId, name, unitPrice, quantity } = data;
  const dispatch = useDispatch();

  const isOne = quantity === 1;

  const removeCartHandler = () => {
    dispatch(removeFromCart(pizzaId!));
  };

  const increaseHandler = () => {
    dispatch(increaseQty(pizzaId!));
  };
  const decreaseHandler = () => {
    dispatch(decreaseQty(pizzaId!));
  };

  return (
    <div className="py-4 border-b sm:flex sm:items-center sm:justify-between">
      <p>
        {" "}
        {quantity} x {name}
      </p>
      <div className="flex items-center justify-between gap-5">
        <p className="price font-semibold">$ {quantity! * unitPrice!}</p>
        <div className="flex gap-4">
          <ButtonCircle
            text="-"
            click={isOne ? removeCartHandler : decreaseHandler}
          />

          <p>{quantity}</p>
          <ButtonCircle text="+" click={increaseHandler} />
        </div>

        <Button text="Delete" click={removeCartHandler} />
      </div>
    </div>
  );
};

export default CartItem;
