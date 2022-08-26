import { useEffect, useState } from "react";
import BoardArticle from "./UserOrderBoardArticle";
import PageLink from "./UserOrderPageLink";

const UserOrderBoardList = ({
  boardlist,
  handlelist,
  handlepage,
  pagelink,
  actionmode,
  setactionmode,
  number,
  fee,
}) => {
  const onClick = () => {
    setactionmode({
      ...actionmode,
      mode: 3, // 글 수정하기
    });
    console.log("불러와서 뭐함?", number);
  };

  useEffect(() => {
    handlelist();
  }, []);

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              {/* <th width="240">메뉴 사진</th> */}
              <th width="100">메뉴명</th>
              <th width="100">메뉴 가격</th>
              {/* <th width="200">
                선택
              </th> */}
            </tr>
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
              {/* <th width="120">메뉴 사진</th> */}
              <th>메뉴명</th>
              <th>메뉴 가격</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  number={number}
                  actionmode={actionmode}
                  article={article}
                  key={article.menu_storeId}
                  handlelist={handlelist}
                />
              );
            })}
            <tr></tr>
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td align="center">
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default UserOrderBoardList;
