import axios from "axios";

const BoardArticle = () => {
  return (
    <tr>
      <td>Board_num</td>
      <td>
        <a href="#">Board_Title</a>
      </td>
      <td>Board_wirte</td>
      <td>Board_Date</td>
      <td align="center">
        <input type="button" value="수정"></input>
        <input type="button" value="삭제"></input>
      </td>
    </tr>
  );
};

export default BoardArticle;
