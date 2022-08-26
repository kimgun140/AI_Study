import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../../../node_modules/axios/index";
import BoardArticle from "./BoardArticle";
import PageLink from "./PageLink";
import "./BoardList.css";

const BoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleadd,
  handleupdateform,
  handlepage,
  pagelink,
  articleId,
  handleupdate,
}) => {
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
        {/* <input
          className="G_logoutBtn"
          type="button"
          value="로그아웃"
          onClick={handleLogout}
        /> */}
        <input id="G_Btn" type="button" value="그룹 생성" onClick={handleadd} />
        <Link to="/main/chicken">
          <input type="button" id="G_Btnstore" value="가게 메뉴" />
        </Link>
        <div className="none_G">
          현재 생성된 그룹이 <br />
          없습니다...
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <input
          className="G_logoutBtn"
          type="button"
          value="로그아웃"
          onClick={handleLogout}
        /> */}

        {boardlist.boardList.map((article) => {
          // state -1 구문
          return (
            <BoardArticle
              article={article}
              key={article.BOARD_NUM}
              handlelist={handlelist}
              handledetail={handledetail}
              handleupdateform={handleupdateform}
              handleupdate={handleupdate}
            />
          );
        })}

        {pagelink.map((page) => {
          return <PageLink page={page} key={page} handlepage={handlepage} />;
        })}
        <br />
        <input
          type="button"
          value="그룹 생성"
          id="G_Btn"
          // onClick={handleadd}
          onClick={handleadd}
        />
        <Link to="/main/chicken">
          <input type="button" id="G_Btnstore" value="가게 메뉴로" />
        </Link>
      </div>
    );
  }
};

export default BoardList;
