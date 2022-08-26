/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BoardArticle.scss";

const BoardArticle = ({ article }) => {
  console.log("!!!!!!!!!!!!!!!!", article);
  return (
    <Link to="/boardlistbbq?bbq">
      {/* <div className="chicken_div"> */}
      <hr />
      <form>
        <table border="1" width="300px" align="center" className="chicken_tbl">
          <tr>
            <td width="70px">상호명</td>
            <td>{article.store_name}</td>
          </tr>
          <tr>
            <td width="70px">전화번호</td>
            <td>{article.store_phone}</td>
          </tr>
          <tr>
            <td width="70px">배달비</td>
            <td>{article.store_deliveryFee}</td>
          </tr>
        </table>
      </form>
      {/* </div> */}
    </Link>
  );
};

export default BoardArticle;
