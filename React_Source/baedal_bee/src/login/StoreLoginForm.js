import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StoreLoginForm.css";
const StoreLoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("사업자 등록 번호를 입력해주세요.");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm : window.sessionStorage(login_id) : ",
      window.sessionStorage.getItem("id")
    );

    axios
      .post("http://localhost:8008/storelogin", {
        store_id: idRef.current.value,
        store_pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin : ", res.data[0]);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          navigate("/storeboard");
        } else {
          alert("등록된 회원이 아닙니다.");
          navigate("/storelogin");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/storemember");
    // useNavigate를 이용해서 /member로 이동하도록 지정
  };

  return (
    <div className="form">
      {" "}
      <div>
        <button
          className="btn-2"
          value="개인 로그인"
          onClick={() => {
            navigate("/login");
          }}
        >
          개인로그인
        </button>
      </div>
      <div class="box">
        <div className="h1h1">
          {" "}
          <h1>기</h1>
          <h1>업</h1>
          <h1>로</h1>
          <h1>그</h1>
          <h1>인</h1>
        </div>
        <input
          type="text"
          name="id"
          size="20"
          defaultValue=""
          ref={idRef}
          placeholder="사업자 등록 번호를 입력해주세요."
        />
        <input
          type="password"
          name="pw"
          size="20"
          defaultValue=""
          ref={pwRef}
          placeholder="비밀번호를 입력해주세요."
        />
        <div className="qqq">
          {" "}
          <button className="btn btn-1" value="로그인" onClick={handleLogin}>
            로그인
          </button>{" "}
          <button
            className="btn btn-1"
            // type="button"
            value="회원 등록"
            onClick={handleMemberForm}
          >
            회원가입
          </button>
        </div>
        {/* <button
          className="btn btn-1"
          value="개인 로그인"
          onClick={() => {
            navigate("/login");
          }}
        >
          개인로그인
        </button> */}
      </div>
    </div>
  );
};

export default StoreLoginForm;
