import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board, initBoards } from "../type/type";

const boardSlice = createSlice({
  name: "board",
  initialState: initBoards,
  reducers: {
    selectBoards: (state, action: PayloadAction<Board[]>) => {
      return action.payload;
    },
  },
});

export const { selectBoards } = boardSlice.actions; // 리듀서 함수 반환
export default boardSlice.reducer; // 슬라이스 반환
