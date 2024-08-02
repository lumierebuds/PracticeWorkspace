// 라우터를 감싸주는 외부 div - container로 감싸주도록 하자. 
import { Outlet } from "react-router-dom";

export default function Outer() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
