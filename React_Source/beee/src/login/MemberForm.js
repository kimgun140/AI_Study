import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MemberForm.css";

const MemberForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();

  const handleMember = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력해주세요.");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current.focus();
      return false;
    }
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력해주세요.");
      emailRef.current.focus();
      return false;
    }
    if (
      addressRef.current.value === "" ||
      addressRef.current.value === undefined
    ) {
      alert("주소를 입력해주세요.");
      addressRef.current.focus();
      return false;
    }
    if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8008/member", {
        user_id: idRef.current.value,
        user_pw: pwRef.current.value,
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        user_address: addressRef.current.value,
        user_phone: phoneRef.current.value,
      })
      .then((res) => {
        console.log("handleMember : ", res);
        if (res.data.affectedRows === 1) {
          alert("회원 등록에 성공했습니다.");
        } else {
          alert("회원 등록에 실패했습니다.");
        }
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="form">
      <h1 align="center" className="logo1">
        개인 회원가입
      </h1>

      <div className="div111">아이디: </div>
      <div>
        <input
          type="text"
          name="id"
          size="20"
          autoComplete="off"
          defaultValue=""
          ref={idRef}
          // placeholder="아이디를 입력해주세요."
          className="gaip_id"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div className="div111">비밀번호:</div>
      <div>
        <input
          type="password"
          name="pw"
          size="20"
          autoComplete="off"
          defaultValue=""
          ref={pwRef}
          // placeholder="비밀번호를 입력해주세요."
          className="gaip_pw"
          placeholder="특수문자 포함 12자리를 입력해주세요"
        />
      </div>
      <div className="div111">이름:</div>
      <div>
        <input
          type="text"
          name="name"
          size="20"
          autoComplete="off"
          defaultValue=""
          ref={nameRef}
          className="gaip_name"
          placeholder="이름을 입력해주세요"
        />
      </div>
      <div className="div111">이메일:</div>
      <div>
        <input
          type="text"
          name="email"
          size="20"
          autoComplete="off"
          defaultValue=""
          ref={emailRef}
          placeholder="aischool@example.com"
          className="gaip_email"
        />
      </div>
      <div className="div111">주소:</div>
      <div>
        <input
          type="text"
          name="address"
          size="50"
          autoComplete="off"
          placeholder="주소를 입력해주세요"
          defaultValue=""
          ref={addressRef}
          className="gaip_address"
        />
      </div>
      <div className="div111">휴대전화번호:</div>
      <div>
        <input
          type="text"
          name="phone"
          size="20"
          autoComplete="off"
          placeholder="휴대전화번호를 입력해주세요"
          defaultValue=""
          ref={phoneRef}
          className="gaip_phone"
        />
      </div>

      <input
        type="button"
        value="뒤로 가기"
        className="gologin"
        onClick={() => {
          navigate("/login");
        }}
      />
      <div>
        <input
          type="button"
          value="회원 등록"
          onClick={handleMember}
          className="gaip_button"
        />
      </div>
    </div>
  );
};

export default MemberForm;
