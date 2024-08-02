import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../features/boardSlice";

let store = configureStore({
  reducer: {
    boards: boardSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
