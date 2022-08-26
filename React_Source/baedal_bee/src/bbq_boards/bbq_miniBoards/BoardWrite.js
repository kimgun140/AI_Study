import React, { useRef } from "react";
import axios from "axios";
import "./BoardWrite.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const BoardWrite = ({ handlelist, number, article }) => {
  const nameRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();
  const numRef = useRef();
  const userIdRef = useRef();

  const navigate = useNavigate();

  const onClick = (e) => {
    navigate("/userstoreboard");
  };

  const handleInsert = () => {
    console.log("handleInsert : ", nameRef.current.value);
    console.log("handleInsert : ", contentRef.current.value);
    console.log("handleInsert : ", priceRef.current.value);
    console.log("--------------- : ", article.comment_userId);

    // if (article.comment_userId.length > 2) {
    //   alert('주문내역은 하나만 등록이 가능합니다.');
    //   return false;
    // }

    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("주문자를 입력해주세요.");
      nameRef.current.focus();
      return false;
    }

    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("주문내역을 입력해주세요.");
      contentRef.current.focus();
      return false;
    }

    if (priceRef.current.value === "" || priceRef.current.value === undefined) {
      alert("음식의 가격을 입력해주세요.");
      priceRef.current.focus();
      return false;
    } else {
      const str = priceRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (
          !(ch >= "0" && ch <= "9") ||
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")
        ) {
          alert("음식의 가격은 숫자로만 입력해주세요.");
          priceRef.current.focus();
          return false;
        }
      }
    }

    axios
      .post("http://localhost:8008/miniinsert", {
        comment_name: nameRef.current.value,
        comment_content: contentRef.current.value,
        comment_price: priceRef.current.value,
        comment_boardNum: numRef.current.value,
        comment_userId: userIdRef.current.value,
      })
      .then((res) => {
        console.log("handleInsert : ", res);
        handlelist();
        nameRef.current.value = "";
        contentRef.current.value = "";
        priceRef.current.value = "";
        numRef.current.value = 0;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="write">
      <h2>주문 내역</h2>
      <form>
        <tr>
          <input
            type="text"
            name="writer"
            size="48"
            ref={nameRef}
            placeholder="작성자를 입력하세요."
          />
          <input
            type="hidden"
            name="userId"
            size="68"
            ref={userIdRef}
            value={window.sessionStorage.getItem("id")}
          />

          <input
            type="hidden"
            name="number"
            size="48"
            ref={numRef}
            value={number}
          />
        </tr>
        <tr>
          <input
            type="text"
            name="title"
            size="48"
            ref={contentRef}
            placeholder="주문내역을 입력하세요."
          />
        </tr>
        <tr>
          <input
            type="text"
            name="location"
            size="48"
            ref={priceRef}
            placeholder="주문하신 음식의 가격을 입력하세요."
          />
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <input type="button" value="주문하기" onClick={onClick} />
            &nbsp;
            <input type="button" value="글쓰기" onClick={handleInsert} />
            &nbsp;
            <input type="reset" value="초기화" />
          </td>
        </tr>
      </form>
    </div>
  );
};

export default BoardWrite;
