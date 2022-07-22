import "./JoinListItem.scss";

const JoinListItem = ({ join, idx, onRemove, onUpdateForm }) => {
  // onupdateform 수정 관련 props
  const { num, id, password, email, gender } = join;
  return (
    <>
      <form className="JoinListItem">
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">{id}</td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">{password}</td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">{email}</td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td width="440px">{gender}</td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  name="btn"
                  value="수정"
                  onClick={() => onUpdateForm(idx)} // 수정할 데이터의 위치 joins 데이터의 현재 위치
                />
                <input
                  type="button"
                  name="btn"
                  value="삭제"
                  onClick={() => onRemove(num)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default JoinListItem;
