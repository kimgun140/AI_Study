import { useState } from "react";
import App from "./App";
// import abc from '../public/logo192.png';
// const Say = () => {
//   const [message1, setMessage1] = useState("");
//   const onClickEnter = () => setMessage1("ㅎㅇ!");
//   const onClickLeave = () => setMessage1("ㅂㅇ!");

//   return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{message1}</h1>
//     </div>
//   );
// };
const Say = () => {
  const [message1, setMessage1, setImg] = useState("");
  const onClickEnter = () => setMessage1("ㅎㅇ!");
  const onClickLeave = () => setMessage1("ㅂㅇ!");
  const onClickChange = () => setImg();
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message1}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button  style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
