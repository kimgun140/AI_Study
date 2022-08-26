import React, { useRef } from "react";
import axios from "axios";
import "./BoardArticle.css";
const BoardArticle = ({
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

  // console.log(comment_userId);

  // const article_userId = article.comment_userId

  // console.log(article_userId);
  // if (!(comment_userId === article.comment_userId)) {
  //   alert('자신의 주문 내역만 삭제할 수 있습니다.');
  //   return false;
  // }

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
    <div className="orderdivv">
      <tr className="orderid">주문자:{article.comment_name}</tr>
      <br />
      <div className="orderdiv"> ID : {article.comment_userId}</div>
      <div className="ordercontent">
        <td>{article.comment_content}</td>
      </div>
      <div className="order_price">{article.comment_price}</div>
      <div className="order_button">
        <input
          type="button"
          value="수정"
          id={article.comment_name}
          onClick={onClick}
        />
        <input
          type="button"
          value="삭제"
          id={article.comment_name}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default BoardArticle;
