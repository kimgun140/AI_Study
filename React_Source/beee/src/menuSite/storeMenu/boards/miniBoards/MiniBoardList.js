import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoardArticle from "./MiniBoardArticle";
import PageLink from "./MiniPageLink";
import "./MiniBoardList.css";

const MiniBoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
}) => {
  useEffect(() => {
    handlelist();
  }, []);

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="380px" align="center">
          <thead>
            <tr>
              <th width="100">주문자</th>
              <th width="150">주문내역</th>
              <th width="100">가격</th>
              <th width="100">수정 / 삭제</th>
            </tr>
            {/* <tr align="center">
              <td colSpan="7">
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                  className="logout"
                />
              </td>
            </tr> */}
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="380px" align="center">
          <thead>
            <tr>
              <th width="100">주문자</th>
              <th width="150">주문내역</th>
              <th width="100">가격</th>
              <th width="100">수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  // actionmode={actionmode}
                  article={article}
                  key={article.comment_name} //물어보기
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
            {/* <tr>
              <th colSpan="7">
                <input
                  className="logout"
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                />
              </th>
            </tr> */}
          </tbody>
        </table>
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

export default MiniBoardList;
