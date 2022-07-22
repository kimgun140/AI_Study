import { useState, useCallback } from 'react';
import './TodoInsert.scss';
const TodoInsert = ({ onInsert }) => {
  const [id, setID] = useState('');
  const [pw, setPw] = useState('');
  const [jumin1, setJumin1] = useState('');
  const [jumin2, setJumin2] = useState('');
  const [tel1, setTel1] = useState('');
  const [tel2, setTel2] = useState('');
  const [tel3, setTel3] = useState('');
  const onChange1 = useCallback((e) => {
    setID(e.target.value);
  }, []);
  const onChange2 = useCallback((e) => {
    setPw(e.target.value);
  }, []);
  const onChange3 = useCallback((e) => {
    setJumin1(e.target.value);
  }, []);
  const onChange4 = useCallback((e) => {
    setJumin2(e.target.value);
  }, []);
  const onChange5 = useCallback((e) => {
    setTel1(e.target.value);
  }, []);
  const onChange6 = useCallback((e) => {
    setTel2(e.target.value);
  }, []);
  const onChange7 = useCallback((e) => {
    setTel3(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(
        //   `
        // 입력한 아이디 : ${id}
        // 입력한 아이디 : ${pw}
        // 입력한 아이디 : ${jumin1}
        // 입력한 아이디 : ${jumin2}
        // 입력한 아이디 : ${tel1}
        // 입력한 아이디 : ${tel2}
        // 입력한 아이디 : ${tel3}
        // `
        <table align="center" border="1">
          <thead>
            <tr>
              <td width="110">아이디</td>
              <td width="400">{id}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="110">비밀번호</td>
              <td width="400">{pw}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td width="110">주민번호</td>
              <td width="400">
                {jumin1} - {jumin2}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>휴대전화번호</td>
              <td>
                {tel1} - {tel2} - {tel3}
              </td>
            </tr>
          </tbody>
        </table>,
      );
      setID('');
      setPw('');
      setJumin1('');
      setJumin2('');
      setTel1('');
      setTel2('');
      setTel3('');
      e.preventDefault();
    },
    [onInsert, id, pw, jumin1, jumin2, tel1, tel2, tel3],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {/* <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button> */}
      <div>
        <table align="center" border="1">
          <thead>
            <tr>
              <td width="110">아이디</td>
              <td width="400">
                <input
                  type="text"
                  name="id"
                  size="30"
                  required
                  placeholder="최소6 ~최대10, 숫자와 알파벳만 사용"
                  value={id}
                  onChange={onChange1}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="110">비밀번호</td>
              <td width="400">
                <input
                  type="password"
                  name="pw"
                  size="30"
                  placeholder="최소6 ~최대10, 숫자와 알파벳만 사용"
                  value={pw}
                  onChange={onChange2}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td width="110">주민번호</td>
              <td width="400">
                <input
                  type="text"
                  name="jumin1"
                  size="6"
                  maxlength="6"
                  value={jumin1}
                  onChange={onChange3}
                />
                -
                <input
                  type="text"
                  name="jumin2"
                  size="7"
                  maxlength="7"
                  value={jumin2}
                  onChange={onChange4}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>휴대전화번호</td>
              <td>
                <input
                  type="tel"
                  name="tel1"
                  size="3"
                  maxlength="3"
                  value={tel1}
                  onChange={onChange5}
                />{' '}
                -
                <input
                  type="tel"
                  name="tel2"
                  size="4"
                  maxlength="4"
                  value={tel2}
                  onChange={onChange6}
                />{' '}
                -
                <input
                  type="tel"
                  name="tel3"
                  size="4"
                  maxlength="4"
                  value={tel3}
                  onChange={onChange7}
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" align="center" width="500">
                <button onSubmit={onSubmit}>입력</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </form>
  );
};
export default TodoInsert;
