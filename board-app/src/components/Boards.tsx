import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Boards() {
  const boards = useSelector((state: RootState) => state.boards); // 전역으로 관리되고 있는 boards 로 게시글 목록 출력
  const navi = useNavigate(); // navi 함수로 링크 이동 

  console.log(boards);
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {boards.map((board) => {
          return (
            <tr onClick={() => {
              console.log("/detail/" + board.boardNo);
              navi("/detail/"+board.boardNo);
            }}>
              <td>{board.boardNo}</td>
              <td>{board.title}</td>
              <td>{board.createDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
