// 게시글 목록 컴포넌트

import { useEffect } from "react";
import Boards from "../components/Boards";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectBoards } from "../features/boardSlice";

export default function BoardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8085/api/board").then((response) => {
      console.log(response.data);
      dispatch(selectBoards(response.data));
    });
  }, []);

  return (
    <>
      <div>
        <h4>게시글 목록 조회(GET)</h4>
      </div>
      <Boards />
    </>
  );
}
