import React, { useState } from "react";
import Main from "./bbq_miniBoards/Main";
import "./BoardDetail.css";
const BoardDetail = ({ article, handlelist }) => {
  console.log("BoardDetail : ", article);

  const [number, setNumber] = useState(article.board_num);

  return (
    <div className="bd_div">
      <div>
        <tr>
          <li>글번호</li>
          <li align="left">{article.board_num}</li>
        </tr>
        <tr>
          <li>제목</li>
          <li align="left">{article.board_title}</li>
        </tr>
        <tr>
          <li>작성자</li>
          <li align="left">{article.board_writer}</li>
        </tr>
        <tr>
          <li>픽업 장소</li>
          <li align="left">{article.board_location}</li>
        </tr>
        <tr>
          <li>작성날짜</li>
          <li align="left">{article.board_date}</li>
        </tr>
        <tr>
          <li>글내용</li>
          <li align="left">{article.board_content}</li>
        </tr>
        <tr>
          <input type="button" value="글목록" onClick={handlelist} />
          <div>
            <Main number={number} />
          </div>
        </tr>
      </div>
    </div>
  );
};

export default BoardDetail;
