import { useState, useRef } from "react";

const JoinInserts = ({ onInsert, form, onUpdate }) => {
  // 등록과 수정의 역할을 둘다 하는 joininsert  그렇다면 데이터를 등록하는 데이터인지  수정하는 데이터인지 수정하는 작업은 form객체의 데이터가 채워져있는지 비워져있는지를 통해서 수정하는 기능인지 등록하는 기능인지를 구분한다.
  console.log("JoinInserts(form)", form);

  var [value, setValue] = useState({}); // 등록(새로 입력받은 데이터),수정()하는 데이터를 관리하기 위함

  const idRef = useRef(); // 각각의 해당 항목에 접근하기 위한 ref
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const formRef = useRef(); //

  const setFormData = () => {
    if (form.num !== undefined) {
      //이문장은 수정할 때 사용
      value.num = form.num; //등록할 때 oninsert에서 num을 채워준다.  num은 수정할 데이털르 구분하기 위해서
    } //아래 문장은 수정할때 등록할 때 둘 다 사용/
    value.id = idRef.current.value;
    value.password = passwordRef.current.value;
    value.email = emailRef.current.value;
    value.gender = genderRef.current.checked === true ? "여자" : "남자";
  }; //ref를 통해서 위의 값을 읽어 올 수가 있다.

  const onClick = (e) => {
    // 등록 버튼 form 객체의 데이터가 있는지 없는지로 수정등록인지 새로운 등록인지 구ㅜ분한다.
    setFormData();
    if (form.num === undefined) {
      // 하나의 버튼으로 두가지 기능중 무엇을 할지 구분 하는것은 form 객체의 데이터가 있는지 없는지로 구분해서 두가지 기능을한다.
      onInsert(value);
    } else {
      onUpdate(value); //
    }
    setValue({
      // joins 배열객체에 추가 value를 통해서 데이터가 저장된 메모리의 주소를  전달을 받게되고 전달받은 주소를 joins에 저장된다.
      num: 0, //그렇게 저장된 데이터를 계속 갖고있게
      id: "",
      password: "",
      email: "",
      gender: "",
    });
    formRef.current.reset(); //form객체를 초기화 시켜주는 역할/  oninsert(등록버튼 수정아님) 이후 값을 초기화 시켜 form객체를 비워주는 역할
    e.preventDefault();
  };

  return (
    <div>
      <form className="JoinInserts" ref={formRef}>
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">
                <input
                  type="text"
                  name="id"
                  defaultValue={form.id !== undefined ? form.id : ""} //수정을 실행한 후에 리렌더링을 통해서 setform에서 빈상태가 되고 빈상태가된 fomr.id가 defaultvalue를 통해서 빈 상태가 된다.
                  ref={idRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">
                <input
                  type="password"
                  name="password"
                  defaultValue={
                    form.password !== undefined ? form.password : ""
                  }
                  ref={passwordRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">
                <input
                  type="email"
                  name="email"
                  defaultValue={form.email !== undefined ? form.email : ""} //
                  ref={emailRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td>
                남자
                <input
                  type="radio"
                  value="남자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "남자"
                  }
                  ref={genderRef}
                />
                여자
                <input
                  type="radio"
                  value="여자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "여자"
                  }
                  ref={genderRef}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  name="btn"
                  value="등록"
                  onClick={onClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="app-title">회원 정보</div>
    </div>
  );
};

export default JoinInserts;
