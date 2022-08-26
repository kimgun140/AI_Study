import { useEffect, useState } from "react";
import BoardArticle from "./UserStoreBoardArticle";
import UserOrderMain from "./orderMenu/UserOrderMain";
import PageLink from "./UserStorePageLink";

const UserStoreBoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
  actionmodemini,
  setactionmodemini,
  number,
  fee,
  totalprice,
  actionmodestore,
  setactionmodestore,
  actionmodemain,
  setactionmodemain,
}) => {
  const onClick = () => {
    setactionmodemini({
      ...actionmodemini,
      mode: 0,
    });
  };

  const onClick_k = () => {
    setactionmodestore({
      ...actionmodestore,
      mode: 1,
    });
  };

  useEffect(() => {
    handlelist();
  }, []);

  // const onClick = () => {
  //   setactionmodemain({
  //     ...actionmodemain,
  //     mode: 4,
  //   });
  // }

  console.log("불러와서 뭐함?", fee, totalprice);

  if (boardlist.boardList.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        {boardlist.boardList.map((article) => {
          return (
            <BoardArticle
              number={number}
              actionmodemini={actionmodemini}
              article={article}
              key={article.menu_storeId}
              handlelist={handlelist}
              handledetail={handledetail}
              handleupdateform={handleupdateform}
            />
          );
        })}

        {pagelink.map((page) => {
          return <PageLink page={page} key={page} handlepage={handlepage} />;
        })}

        <UserOrderMain number={number} />

        <input type="button" value="주문 내역으로" onClick={onClick} />
        <input type="button" value="결제하기" onClick={onClick_k} />
      </div>
    );
  }
};

export default UserStoreBoardList;
