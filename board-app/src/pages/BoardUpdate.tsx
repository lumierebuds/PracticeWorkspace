import { useSelector } from "react-redux";
import Boards from "./../components/Boards";
import { RootState } from "../store/store";
import { Board } from "../type/type";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate() {
  const { boardNo } = useParams();
  const navi = useNavigate();
  let [Board, setBoard] = useState<Board>({
    boardNo: Number(boardNo),
    title: "",
    content: "",
    createDate: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8085/api/detail/${boardNo}`).then((res) => {
      setBoard(res.data);
    });
  }, []);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBoard({
      ...Board,
      [name]: value,
    });
  };

  // 게시글 수정 요청
  const updatePost = () => {
    if (!(Board.title && Board.content)) {
      alert("필수입력값입니다.");
      return;
    }
    axios
      .put(`http://localhost:8085/api/update`, Board)
      .then((res) => {
        alert(res.data.msg);
        navi("/detail/"+boardNo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h4>게시글 수정(PUT)</h4>
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
        <button className="btn btn-primary" onClick={updatePost}>
          게시글 수정
        </button>
      </div>
    </>
  );
}
