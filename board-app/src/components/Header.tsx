import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="header-container">
        <h1 style={{ textAlign: "center" }}>Board App</h1>
        <div className="navbar bg-light navbar-expand ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                게시글 전체 조회
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/insert" className="nav-link">
                게시글 추가
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
