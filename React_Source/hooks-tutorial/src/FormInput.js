// import { useState } from "react";
// FormInput 을 Hook 를 사용해서 바꿈 이거 머임 함수 기반 컴포넌트
import { useReducer, useRef } from "react";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const FormInput = () => {
  const [state, dispatch] = useReducer(reducer, {
    Id: "",
    PassWord: "",
    JuMin1: "",
    JuMin2: "",
    Tel1: "",
    Tel2: "",
    Tel3: "",
  });
  const { Id, PassWord, JuMin1, JuMin2, Tel1, Tel2, Tel3 } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  const input_Id = useRef();
  const input_pw = useRef();
  const input_Jumin1 = useRef();
  const input_JuMin2 = useRef();
  const input_Tel1 = useRef();
  const input_Tel2 = useRef();
  const input_Tel3 = useRef();
  const onClick = () => {
    alert(
      Id +
        "\n" +
        PassWord +
        "\n" +
        JuMin1 +
        "-" +
        JuMin2 +
        "\n" +
        Tel1 +
        "-" +
        Tel2 +
        "-" +
        Tel3
    );
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
      input_Id.current.focus();
    }
  };
  const onKeyPress1 = (e) => {
    if (e.key === "Enter") {
      input_pw.current.focus();
    }
  };
  const onKeyPress2 = (e) => {
    if (e.key === "Enter") {
      input_Jumin1.current.focus();
    }
  };
  const onKeyPress3 = (e) => {
    if (e.key === "Enter") {
      input_JuMin2.current.focus();
    }
  };
  const onKeyPress4 = (e) => {
    if (e.key === "Enter") {
      input_Tel1.current.focus();
    }
  };
  const onKeyPress5 = (e) => {
    if (e.key === "Enter") {
      input_Tel2.current.focus();
    }
  };
  const onKeyPress6 = (e) => {
    if (e.key === "Enter") {
      input_Tel3.current.focus();
    }
  };

  return (
    <table align="center" border="1">
      <tr>
        <td width="110">아이디</td>
        <td width="400">
          <input
            type="text"
            name="Id"
            size="30"
            value={Id}
            placeholder="최소6~최대10, 숫자와알파벳만 사용"
            onChange={onChange}
            onKeyPress={onKeyPress1}
            ref={input_Id}
          />
        </td>
      </tr>
      <tr>
        <td width="110">비밀번호</td>
        <td width="400">
          <input
            type="password"
            name="PassWord"
            size="30"
            value={PassWord}
            placeholder="최소6~최대10, 숫자와알파벳만 사용"
            onChange={onChange}
            onKeyPress={onKeyPress2}
            ref={input_pw}
          />
        </td>
      </tr>
      <tr>
        <td width="110">주민번호</td>
        <td width="400">
          <input
            type="text"
            name="JuMin1"
            size="6"
            maxlength="6"
            value={JuMin1}
            onKeyPress={onKeyPress3}
            onChange={onChange}
            ref={input_Jumin1}
          />
          -
          <input
            type="text"
            name="JuMin2"
            size="7"
            maxlength="7"
            value={JuMin2}
            onKeyPress={onKeyPress4}
            onChange={onChange}
            ref={input_JuMin2}
          />
        </td>
      </tr>
      <tr>
        <td>전화번호</td>
        <td>
          <input
            type="tel"
            name="Tel1"
            size="3"
            maxlength="3"
            value={Tel1}
            onChange={onChange}
            onKeyPress={onKeyPress5}
            ref={input_Tel1}
          />
          -
          <input
            type="tel"
            name="Tel2"
            size="4"
            maxlength="4"
            value={Tel2}
            onChange={onChange}
            onKeyPress={onKeyPress6}
            ref={input_Tel2}
          />
          -
          <input
            type="tel"
            name="Tel3"
            value={Tel3}
            size="4"
            maxlength="4"
            onChange={onChange}
            onKeyPress={onKeyPress}
            ref={input_Tel3}
          />
        </td>
      </tr>
      <tr>
        <td colspan="2" align="center">
          <button onClick={onClick} align="center">
            확인
          </button>
        </td>
      </tr>
    </table>
  );
};

export default FormInput;
