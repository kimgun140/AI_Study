/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import "./UserStoreBoardArticle.css";
import { useRef, useState } from "react";

const UserStoreBoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
  number,
  insertpay,
}) => {
  const storeIdRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const numberRef = useRef();
  const userIdRef = useRef();

  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log(
        "왜 뽑읍?",
        storeIdRef.current.value,
        nameRef.current.value,
        priceRef.current.value,
        numberRef.current.value,
        userIdRef.current.value
      );
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const image = "http://localhost:8008/uploads/" + article.menu_pictureUrl;

  console.log("BoardArticle =>", article);

  console.log("BoardArticle ~~~~~~~~~~~~ =>", article.menu_storeId);

  const handleInsert = () => {
    axios
      .post("http://localhost:8008/pay", {
        order_menuName: nameRef.current.value,
        order_boardNum: numberRef.current.value,
        order_userId: userIdRef.current.value,
        order_price: priceRef.current.value,
      })
      .then((res) => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="menuch">
      <img className="Article_img" width="80px" src={image} />
      <input
        type="checkbox"
        value={article.menu_storeId}
        className="hiddenob"
        name={article.menu_name}
        ref={storeIdRef}
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />

      <input
        type="checkbox"
        value={number}
        name={article.menu_name}
        ref={numberRef}
        className="hiddenob"
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />

      <input
        value={article.menu_name}
        type="checkbox"
        className="hiddenob"
        name={article.menu_name}
        // hidden
        ref={nameRef}
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />
      <input
        value={window.sessionStorage.getItem("id")}
        type="checkbox"
        className="hiddenob"
        name={article.menu_name}
        // hidden
        ref={userIdRef}
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />
      <ul className="menu_info">
        <ol className="menu_name">{article.menu_name}</ol>
        <ol className="menu_price">가격: {article.menu_price}</ol>
      </ul>

      <input
        value={article.menu_price}
        type="checkbox"
        className="hiddenob"
        name={article.menu_name}
        // hidden
        ref={priceRef}
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />

      <input
        type="checkbox"
        className="checkBox"
        // name={article.menu_name}
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
        }}
        checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
      />
      <input
        className="OrderPlus"
        type="button"
        value="주문추가"
        onClick={handleInsert}
      />
    </div>
  );
};

export default UserStoreBoardArticle;
