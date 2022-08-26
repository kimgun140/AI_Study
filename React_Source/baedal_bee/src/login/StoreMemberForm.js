import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StoreMemberForm.css";
const StoreMemberForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const pnameRef = useRef();
  const phoneRef = useRef();
  const categoryRef = useRef();
  const maxDeliveryTimeRef = useRef();
  const operationHourRef = useRef();
  const closedDayRef = useRef();
  const deliveryFeeRef = useRef();

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
    if (pnameRef.current.value === "" || pnameRef.current.value === undefined) {
      alert("전화번호를 입력해주세요.");
      pnameRef.current.focus();
      return false;
    }
    if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();
      return false;
    }
    if (
      categoryRef.current.value === "" ||
      categoryRef.current.value === undefined
    ) {
      alert("카테고리를 입력해주세요.");
      categoryRef.current.focus();
      return false;
    }
    if (
      maxDeliveryTimeRef.current.value === "" ||
      maxDeliveryTimeRef.current.value === undefined
    ) {
      alert("배달소요시간을 입력해주세요.");
      maxDeliveryTimeRef.current.focus();
      return false;
    }
    if (
      operationHourRef.current.value === "" ||
      operationHourRef.current.value === undefined
    ) {
      alert("운영시간을 입력해주세요.");
      operationHourRef.current.focus();
      return false;
    }
    if (
      closedDayRef.current.value === "" ||
      closedDayRef.current.value === undefined
    ) {
      alert("휴무일을 입력해주세요.");
      closedDayRef.current.focus();
      return false;
    }
    if (
      deliveryFeeRef.current.value === "" ||
      deliveryFeeRef.current.value === undefined
    ) {
      alert("배달비를 입력해주세요.");
      deliveryFeeRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8008/storemember", {
        store_id: idRef.current.value,
        store_pw: pwRef.current.value,
        store_name: nameRef.current.value,
        store_pname: pnameRef.current.value,
        store_phone: phoneRef.current.value,
        store_category: categoryRef.current.value,
        store_maxDeliveryTime: maxDeliveryTimeRef.current.value,
        store_operationHour: operationHourRef.current.value,
        store_closedDay: closedDayRef.current.value,
        store_deliveryFee: deliveryFeeRef.current.value,
      })
      .then((res) => {
        console.log("handleMember : ", res);
        if (res.data.affectedRows === 1) {
          alert("회원 등록에 성공했습니다.");
        } else {
          alert("회원 등록에 실패했습니다.");
        }
        navigate("/storelogin");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="storememberframe">
      <div className="bbb">
        <br />
        <h1 align="center">가게 회원가입</h1>
        {/* <td classname="td1">사업자 등록 번호</td> */}
        <input
          type="text"
          name="id"
          size="20"
          defaultValue=""
          ref={idRef}
          placeholder="사업자 등록 번호를 입력해주세요."
        />
        {/* <td classname="td2">비밀번호</td> */}
        <input
          type="password"
          name="pw"
          size="20"
          defaultValue=""
          ref={pwRef}
          placeholder="비밀번호를 입력해주세요."
        />
        {/* <td classname="td3">가게명</td> */}
        <input
          type="text"
          name="name"
          size="20"
          defaultValue=""
          ref={nameRef}
          placeholder="가게명을 입력해주세요."
        />
        {/* <td classname="td4">업주명</td> */}
        <input
          type="text"
          name="pname"
          size="20"
          defaultValue=""
          ref={pnameRef}
          placeholder="업주명을 입력해주세요."
        />
        {/* <td classname="td5">가게 번호</td> */}
        <input
          type="text"
          name="phone"
          size="20"
          defaultValue=""
          ref={phoneRef}
          placeholder="가게 번호를 입력해주세요."
        />
        {/* <td classname="td6">음식 카테고리</td> */}
        <input
          type="text"
          name="category"
          size="20"
          defaultValue=""
          ref={categoryRef}
          placeholder="음식 카테고리를 입력해주세요."
        />
        {/* <td classname="td7">배달 시간</td> */}
        <input
          type="text"
          name="maxDeliveryTime"
          size="20"
          defaultValue=""
          ref={maxDeliveryTimeRef}
          placeholder="배달 시간을 입력해주세요."
        />
        {/* <td classname="td8">오픈 시간</td> */}
        <input
          type="text"
          name="operationHour"
          size="50"
          defaultValue=""
          ref={operationHourRef}
          placeholder="오픈 시간을 입력해주세요."
        />
        {/* <td classname="td9">휴무일</td> */}
        <input
          type="text"
          name="closedDay"
          size="20"
          defaultValue=""
          ref={closedDayRef}
          placeholder="휴무일을 입력해주세요."
        />
        {/* <td classname="td10">배달비</td> */}
        <input
          type="text"
          name="deliveryFee"
          size="20"
          defaultValue=""
          ref={deliveryFeeRef}
          placeholder="배달비를 입력해주세요."
        />
        <td colSpan="2" align="center">
          <button className="ccc" value="회원 등록" onClick={handleMember}>
            회원등록
          </button>
        </td>
      </div>
    </div>
  );
};

export default StoreMemberForm;
