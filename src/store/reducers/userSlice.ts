import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  phone: string;
  address: string;
};

const initialState: User = {
  name: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
