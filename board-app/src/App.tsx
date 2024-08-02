import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import Outer from "./components/Outer";
import BoardInsert from "./pages/BoardInsert";
import BoardUpdate from "./pages/BoardUpdate";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="content">
        <div id="board-container" className="text-center">
          <Routes>
            <Route path="/" element={<Outer />}>
              <Route path="/" element={<BoardList />} />
              <Route path="/insert" element={<BoardInsert />} />
              <Route path="/detail/:boardNo" element={<BoardDetail />} />
              <Route path="/update/:boardNo" element={<BoardUpdate/>}/>
            </Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
