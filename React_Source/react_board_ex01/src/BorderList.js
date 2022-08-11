import { useState } from "react";
import BoardArticle from "./BoardArticle";

const BorderList = () => {
  if (1) {
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
            <BoardArticle />
          </tbody>
        </table>
      </div>
    );
  }
};
export default BorderList;
