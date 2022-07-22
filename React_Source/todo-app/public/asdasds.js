import { useState } from 'react';

const FormInput = () => {
  const [form, setForm] = useState({
    Id: '',
    password: '',
    mail1: '',
    mail2: '',
    man: '',
    woman: '',
  });
  // -1단계 폼의 첫 값을 지정
  const { Id, password, mail1, mail2, man, woman } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  }; //-2단계

  const onClick = () => {
    //-3단계
    alert(`
        아이디: ${Id} 
        비밀번호: ${password} 
        메일: ${mail1} @ ${mail2} 
        성별: ${man} ${woman}`);
    setForm({
      Id: '',
      password: '',
      mail1: '',
      mail2: '',
      man: '',
      woman: '',
    }); //{}쓴 이유는 객체 형태로 파라미터 쓰려고
  };

  return (
    <div>
      <table align="center" border="1">
        <tr>
          <td width="110">아이디</td>
          <td width="400">
            <input
              type="text"
              name="Id"
              size="30"
              required
              placeholder="아이디"
              value={Id}
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td width="110">비밀번호</td>
          <td width="400">
            <input
              type="password"
              name="password"
              size="30"
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
            />
          </td>
        </tr>

        <tr>
          <td width="110">이메일</td>
          <td width="400">
            <input
              type="text"
              name="mail1"
              size="10"
              placeholder="아이디"
              value={mail1}
              onChange={onChange}
            />{' '}
            @
            <select
              name="mail2"
              placeholder="주소"
              value={mail2}
              onChange={onChange}
            >
              <option value="">메일주소선택</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
            </select>
          </td>
        </tr>

        <tr>
          <td width="110">성별</td>
          <td width="400">
            <input
              type="radio"
              name="gender"
              placeholder="남자"
              value={man}
              onChange={onChange}
            />
            남자
            <input
              type="radio"
              name="gender"
              placeholder="여자"
              value={woman}
              onChange={onChange}
            />
            여자
          </td>
        </tr>

        <td colspan="2" align="center">
          <button onClick={onClick}>확인</button>
        </td>
      </table>
    </div>
  );
};
export default FormInput;
