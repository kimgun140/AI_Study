import { useEffect } from "react";
import BoardArticle from "./BoardArticle";

const BoardList = ({
  // 비구조화 할당 방식 props.boardlist
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  useEffect(() => {
    handlelist();
  }, []);
  //useEffect 어떤일을 수행하고싶을때 useeffect안에 기술하면 [맨처름 렌더링했을때 실행한다는 말] 내가원하는일을 써주면된다. boardrlist가 화면에 호출될때 수행한다는 뜻 [] []안에 대상을 써주면 그대상의 값이 바뀔 떄 마다 다시 수행한다.

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                //게시글 목록 띄우기 props
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.BOARD_NUM}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
export default BoardList;
