import { ChangeEvent, useState } from "react";
import { Board } from "../type/type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BoardInsert() {
  const navi = useNavigate();

  // 1) 작성될 게시글의 상태값 추가
  let [Board, setBoard] = useState<Board>({
    boardNo: 0,
    title: "",
    content: "",
    createDate: "",
  });

  // 2) input 값 체크하기
  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBoard({
      ...Board,
      [name]: value,
    });
  };

  // 3) 게시글 작성 요청 보내기
  const submitPost = () => {
    // 입력값이 모두 작성되어 있는지 확인한다.
    if (!(Board.title && Board.content)) {
      alert("필수입력값입니다.");
      return;
    }
    axios
      .post("http://localhost:8085/api/insert", Board)
      .then((res) => {
        alert(res.data.msg);
        navi("/detail/" + res.data.boardNo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <h4>게시글 작성(POST)</h4>
      </div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="제목을 입력하세요"
                  value={Board.title}
                  onChange={handleInput}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">작성 내용</th>
            <td>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="content"
                  rows={10}
                  name="content"
                  placeholder="내용을 입력하세요"
                  value={Board.content}
                  onChange={handleInput}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btn-container">
        <button className="btn btn-primary" onClick={submitPost}>
          게시글 작성
        </button>
      </div>
    </>
  );
}
