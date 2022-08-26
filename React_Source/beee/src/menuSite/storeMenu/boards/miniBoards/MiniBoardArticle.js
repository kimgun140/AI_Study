import React, { useRef } from "react";
import axios from "axios";
import "./MiniBoardAticle.css";

const MiniBoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  // const nameRef = useRef();

  // if (article.comment_name === window.sessionStorage.getItem('id')) {
  //   alert('주문 내역은 하나만 작성이 가능합니다.');
  //   return false;
  // }

  const comment_userId = window.sessionStorage.getItem("id");

  const onClick = (e) => {
    if (!(comment_userId === article.comment_userId)) {
      alert("자신의 주문 내역만 수정할 수 있습니다.");
      return false;
    }
    handleupdateform(e);
  };

  const handleDelete = (e) => {
    if (!(comment_userId === article.comment_userId)) {
      alert("자신의 주문 내역만 삭제할 수 있습니다.");
      return false;
    }
    console.log("handleDelete(comment_name) : ", e.target.id);
    axios
      .post("http://localhost:8008/minidelete", {
        comment_name: e.target.id,
        comment_userId: comment_userId,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("BoardArticle : ", article);

  return (
    <tr>
      <td className="innertext">
        {article.comment_name}
        <br />
        <span hidden>
          주문자 ID : <b>{article.comment_userId}</b>
        </span>
      </td>
      <td className="innertext">{article.comment_content}</td>
      <td className="innertext">{article.comment_price}</td>
      <td align="center">
        <input
          type="button"
          value="수정"
          id={article.comment_name}
          onClick={onClick}
          className="btn_sujeong"
        />
        <input
          type="button"
          value="삭제"
          id={article.comment_name}
          onClick={handleDelete}
          className="delete_btn"
        />
      </td>
    </tr>
  );
};

export default MiniBoardArticle;
