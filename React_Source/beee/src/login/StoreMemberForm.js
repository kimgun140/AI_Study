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
    <div className="form">
      <br />

      <form>
        <p align="center" className="logo3">
          가게 회원가입
        </p>
        <div className="scroll1">
          {/* <td width="100px">사업자 등록 번호</td> */}
          <div className="div112">사업자 등록번호:</div>
          <input
            type="text"
            name="id"
            size="20"
            defaultValue=""
            ref={idRef}
            className="sgaip_id"
            autoComplete="off"
            placeholder="사업자 등록번호를 입력해주세요"
          />
          <div className="div112">비밀번호:</div>

          <input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="pw"
            size="20"
            defaultValue=""
            ref={pwRef}
            className="sgaip_pw"
            autoComplete="off"
          />

          {/* <td width="100px">가게명</td> */}
          <div className="div112">가게명:</div>

          <input
            placeholder="가게명을 입력해주세요"
            type="text"
            name="name"
            size="20"
            defaultValue=""
            ref={nameRef}
            className="sgaip_name"
            autoComplete="off"
          />
          <div className="div112">업주명:</div>

          <input
            placeholder="업주명을 입력해주세요"
            type="text"
            name="pname"
            size="20"
            defaultValue=""
            ref={pnameRef}
            autoComplete="off"
            className="sgaip_pname"
          />

          {/* <td width="100px">가게 번호</td> */}
          <div className="div112">가게 전화번호:</div>

          <input
            placeholder="가게 전화번호를 입력해주세요"
            type="text"
            name="phone"
            size="20"
            defaultValue=""
            autoComplete="off"
            ref={phoneRef}
            className="sgaip_phone"
          />

          <div className="div112"> 배달가능 시간:</div>

          <input
            placeholder="배달가능 시간을 입력해주세요"
            type="text"
            name="maxDeliveryTime"
            size="20"
            defaultValue=""
            autoComplete="off"
            ref={maxDeliveryTimeRef}
            className="sgaip_dtime"
          />
          <div className="div112">오픈 시간:</div>

          <input
            placeholder="오픈시간을 입력해주세요"
            type="text"
            name="operationHour"
            size="50"
            defaultValue=""
            autoComplete="off"
            ref={operationHourRef}
            className="sgaip_ohour"
          />
          <div className="div112">휴무일:</div>

          <input
            placeholder="휴무일을 입력해주세요"
            type="text"
            name="closedDay"
            size="20"
            defaultValue=""
            ref={closedDayRef}
            className="sgaip_rest"
            autoComplete="off"
          />
          <div className="div112">배달비:</div>

          <input
            placeholder="배달비를 입력해주세요"
            type="text"
            name="deliveryFee"
            size="20"
            defaultValue=""
            autoComplete="off"
            ref={deliveryFeeRef}
            className="sgaip_dfee"
          />

          <div className="div112">
            <select ref={categoryRef} id="category_select">
              <option value="">음식 카테고리 선택</option>
              <option value="chicken">치킨</option>
              <option value="pizza">피자</option>
              <option value="korean">한식</option>
              <option value="sandwitch">샌드위치</option>
              <option value="chinese">중식</option>
              <option value="japanese">일식</option>
              <option value="desert">디저트</option>
              <option value="cafe">카페</option>
              <option value="porkfoot">족발</option>
            </select>
          </div>
        </div>
        <br />
        <br />

        <input
          type="button"
          value="뒤로 가기"
          className="gologin1"
          onClick={() => {
            navigate("/login");
          }}
        />
        <input
          type="button"
          value="회원 등록"
          onClick={handleMember}
          className="sgaip_button"
        />
      </form>
    </div>
  );
};

export default StoreMemberForm;
