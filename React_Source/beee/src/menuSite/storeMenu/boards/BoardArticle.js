/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import "./BoardArticle.css";
import mapicon from "./map.svg";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
  handleupdate,
}) => {
  const handleDelete = (e) => {
    if (article.BOARD_WRITER === window.sessionStorage.getItem("id")) {
      console.log("handleDelete(board_num) : ", e.target.id);
      axios
        .post("http://localhost:8008/delete", {
          num: e.target.id,
        })
        .then(() => {
          handlelist();
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert("작성자만 해당 글을 삭제할 수 있습니다.");
      return false;
    }
  };
  console.log("BoardArticle : ", article);

  return (
    <div className="G_div">
      <div className="article_num">{article.BOARD_NUM}</div>
      <div className="article_title">
        <a id={article.BOARD_NUM} onClick={handledetail} className="btitle">
          {article.BOARD_TITLE}
        </a>
      </div>
      <div className="article_writer">작성자: {article.BOARD_WRITER}</div>
      {/* {article.BOARD_CONTENT} */}
      <div className="article_location">
        <img className="mapicon" src={mapicon} alt=""></img>
        &nbsp;
        {article.BOARD_LOCATION}
        <div className="article_date">{article.BOARD_DATE}</div>
        <span>
          <input
            className="article_btn"
            type="button"
            value="수정"
            id={article.BOARD_NUM}
            onClick={handleupdateform}
          />

          <input
            className="article_btn"
            type="button"
            value="삭제"
            id={article.BOARD_NUM}
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default BoardArticle;
