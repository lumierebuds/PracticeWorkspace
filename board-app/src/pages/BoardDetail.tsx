import { useNavigate, useParams } from "react-router-dom";
import { Board } from "../type/type";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function BoardDetail() {
  // 1) detail/:boardNo 경로로 들어오면 이 boardNo 값으로  조회하도록 한다.
  //    이를 위해 useParam으로 값을 가져옴

  const navi = useNavigate();

  let { boardNo } = useParams();
  let [Board, setBoard] = useState<Board>({
    boardNo: 0,
    title: "",
    content: "",
    createDate: "",
  }); // 게시글 정보

  // 게시글 수정 페이지로 이동 메서드

  // 게시글 삭제 요청 메서드
  const deleteBoard = () => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;
    axios
      .delete(`http://localhost:8085/api/delete/${boardNo}`)
      .then((res) => {
        alert(res.data.msg);
        navi("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8085/api/detail/${boardNo}`).then((res) => {
      console.log(res.data);
      setBoard(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h4>게시글 상세 조회(GET)</h4>
      </div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">게시글 번호</th>
            <td className="detail">{Board.boardNo}</td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td className="detail">{Board.title}</td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td className="detail">{Board.content}</td>
          </tr>
          <tr>
            <th scope="row">작성일</th>
            <td className="detail">{Board.createDate}</td>
          </tr>
        </tbody>
      </table>
      <Button
        style={{ marginRight: "10px" }}
        onClick={() => {
          navi("/");
        }}
      >
        돌아가기
      </Button>
      <Button
        style={{ marginRight: "10px" }}
        onClick={() => {
          navi("/update/" + Board.boardNo);
        }}
      >
        수정하기
      </Button>
      <Button style={{ marginRight: "10px" }} onClick={deleteBoard}>
        삭제하기
      </Button>
    </>
  );
}
