import { useState } from "react";
const FormInput = () => {
  const [form, setForm] = useState({
    Id: "",
    PassWord: "",
    JuMin1: "",
    JuMin2: "",
    Tel1: "",
    Tel2: "",
    Tel3: "",
  });
  const { Id, PassWord, JuMin1, JuMin2, Tel1, Tel2, Tel3 } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값을 씌우기
    };
    setForm(nextForm);
  };
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
    setForm({
      Id: "",
      PassWord: "",
      JuMin1: "",
      JuMin2: "",
      Tel1: "",
      Tel2: "",
      Tel3: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
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
            onChange={onChange}
          />
          -
          <input
            type="text"
            name="JuMin2"
            size="7"
            maxlength="7"
            value={JuMin2}
            onChange={onChange}
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
          />
          -
          <input
            type="tel"
            name="Tel2"
            size="4"
            maxlength="4"
            value={Tel2}
            onChange={onChange}
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
