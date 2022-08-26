import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CategorySlide from "../CategorySlide/CategorySlide";
// import axios from '/axios';
import BoardArticle from "./BoardArticle";
import PageLink from "./PageLink";
import "./BoardArticle.scss";
import "./BoardList.css";
const BoardList = ({ boardlist, handlelist, handlepage, pagelink }) => {
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
                <input type="button" value="로그아웃" onClick={handleLogout} />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <thead>
          <div className="categoryslide">
            <CategorySlide />
          </div>
          {boardlist.boardList.map((article) => {
            console.log(`help~~~~~~~~`, article);
            // state -1 구문
            return (
              <div className="chicken_tbl">
                <Link to="/boardlistbbq?bbq">
                  <BoardArticle
                    article={article}
                    key={article.store_id}
                    handlelist={handlelist}
                  />
                </Link>
              </div>
            );
          })}
          <tr>
            <th colSpan="7">
              <input type="button" value="로그아웃" onClick={handleLogout} />
            </th>
          </tr>
        </thead>

        <table align="center">
          <tfoot>
            <br />
            <tr>
              <td align="center">
                {pagelink.map((page) => {
                  return (
                    <PageLink page={page} key={page} handlepage={handlepage} />
                  );
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default BoardList;
