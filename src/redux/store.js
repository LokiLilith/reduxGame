import { configureStore } from "@reduxjs/toolkit";
import rndSlice from "./slices/rndSlice";

export const store = configureStore({
  reducer: {
    rndSlice,
  },
});

export default store;
