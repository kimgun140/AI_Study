import BoardList from "./BorderList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
function App() {
  //0:글쓰기 1: 상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 1 });

  if (actionMode.mode === 0) {
    //alert("글쓰기")
    //글쓰기

    return (
      <div>
        <BoardWrite></BoardWrite>
        <br />
        <BoardList></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    //alert("글쓰기")
    //글쓰기
    return (
      <div>
        <BoardDetail></BoardDetail>
        <br />
        <BoardList></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    //alert("글쓰기")
    //글쓰기
    return (
      <div>
        <BoardUpdateForm></BoardUpdateForm>
        <br />
        <BoardList></BoardList>
      </div>
    );
  }
}

export default App;
