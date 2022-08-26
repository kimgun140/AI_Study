import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CategorySlide from "../CategorySlide/CategorySlide";
// import axios from '/axios';
import BoardArticle from "./StoreBoardArticle";
import PageLink from "./StorePageLink";
import "./StoreBoardArticle.scss";

const StoreBoardList = ({ boardlist, handlelist, handlepage, pagelink }) => {
  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    // 세션에 저장된 로그인 정보를 지우며 로그아웃
    console.log(
      "handleLogout - window.sessionStorage(login_id) : ",
      window.sessionStorage.getItem("id")
    );
    navigate("/login"); // 로그아웃을 할 경우 로그인 페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <div className="categoryslide">
          <CategorySlide />
        </div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <td colSpan="7" align="center">
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                  className="logout_1"
                />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <div className="categoryslide">
          <CategorySlide />
        </div>
        {boardlist.boardList.map((article) => {
          // state -1 구문
          console.log("야아아아아아아아아", article.store_id);
          return (
            <div className="chicken_tbl">
              <BoardArticle
                article={article}
                key={article.store_id}
                handlelist={handlelist}
              />
            </div>
          );
        })}

        <input
          type="button"
          value="로그아웃"
          onClick={handleLogout}
          className="logout_1"
        />
        <input
          type="button"
          value="카테고리"
          onClick={() => navigate("/main")}
          className="categoryGo"
        />

        <br />

        {pagelink.map((page) => {
          return <PageLink page={page} key={page} handlepage={handlepage} />;
        })}
      </div>
    );
  }
};

export default StoreBoardList;
