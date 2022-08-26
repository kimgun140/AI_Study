/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StoreBoardArticle.scss";
import { useNavigate } from "react-router-dom";
import "./StoreBoardArticle.css";

const StoreBoardArticle = ({ article }) => {
  const nameRef = useRef();

  console.log("!!!!!!!!!!!!!!!!", article);

  const navigate = useNavigate();

  // var name = article.store_name;

  console.log("alallkjsdfhsdflbsdfs", article.store_id);

  const onClick = () => {
    navigate("/boardmain", {
      state: {
        articles: article,
      },
    });
  };

  return (
    // <Link to="/boardlistbbq?bbq">
    <div className="chicken_div">
      <form>
        <table width="300px" align="center" className="chicken_tbl">
          <tr>
            <td width="70px" className="store_content3">
              상호명:
            </td>
            <td className="store_content2">
              {article.store_name}
              <input type="hidden" value={article.store_id} />
            </td>
            <td rowSpan="3" width="30px">
              <input
                type="button"
                value="입장"
                onClick={onClick}
                className="entrance"
              />
            </td>
          </tr>
          <tr>
            <td width="70px" className="store_content3">
              전화번호:
            </td>
            <td className="store_content2">{article.store_phone}</td>
          </tr>
          <tr>
            <td width="70px" className="store_content3">
              배달비:
            </td>
            <td className="store_content2">{article.store_deliveryFee}</td>
          </tr>
        </table>
      </form>
    </div>
    // </Link >
  );
};

export default StoreBoardArticle;
