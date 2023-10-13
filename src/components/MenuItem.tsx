import { MenuType } from "../types/type";
import Button from "./Button";
import ButtonCircle from "./ButtonCircle";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/reducers/cartSlice";
import { useState } from "react";
import { RootState, AppDispatch } from "../store/store";
type MenuItemProps = {
  menu: MenuType;
};
const MenuItem = ({ menu }: MenuItemProps) => {
  const { id, imageUrl, name, ingredients, soldOut, unitPrice } = menu;
  const [added, setAdded] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const isInCart = cart.find((item) => item.menuId === id);
  const isOne = isInCart?.quantity === 1;
  const addCartHandler = () => {
    dispatch(
      addToCart({
        menuId: id,
        price: unitPrice,
        quantity: 1,
        name: name,
      })
    );
    setAdded(true);
  };
  const removeCartHandler = () => {
    dispatch(removeFromCart(id));
    setAdded(false);
  };

  const increaseHandler = () => {
    dispatch(increaseQty(id));
  };
  const decreaseHandler = () => {
    dispatch(decreaseQty(id));
  };
  return (
    <div className="flex gap-3 text-sm px-1  py-2">
      <div className="w-[100px] border-2">
        <img
          src={imageUrl}
          className={`${soldOut && "grayscale"}`}
          alt="pizza image"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <p className="text-base">{name}</p>
          <p className="italic text-gray-400">{ingredients.join(",")}</p>
        </div>
        {soldOut && <p className="uppercase text-gray-400">Sold out</p>}
        {!soldOut && (
          <div className="flex items-center gap-2 justify-between">
            <p>$ {unitPrice}</p>
            <div className="flex items-center gap-2">
              {isInCart && (
                <>
                  <ButtonCircle
                    text="-"
                    click={isOne ? removeCartHandler : decreaseHandler}
                  />
                  <p>{isInCart.quantity}</p>
                  <ButtonCircle text="+" click={increaseHandler} />
                </>
              )}

              <Button
                text={`${added ? "Delete" : "Add"}`}
                small={true}
                click={added ? removeCartHandler : addCartHandler}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
