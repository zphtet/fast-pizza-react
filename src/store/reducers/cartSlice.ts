import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartItemType } from "../../types/type";

type initialStateType = {
  cart: cartItemType[];
};

const cart: initialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cart,
  reducers: {
    addToCart(state, action: PayloadAction<cartItemType>) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQty(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) => {
        if (item.pizzaId !== action.payload) return item;
        return {
          ...item,
          quantity: (item.quantity as number) + 1,
        };
      });
    },
    decreaseQty(state, action: PayloadAction<number>) {
      state.cart = state.cart.map((item) => {
        if (item.pizzaId !== action.payload) return item;

        return {
          ...item,
          quantity: (item.quantity as number) - 1,
        };
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
