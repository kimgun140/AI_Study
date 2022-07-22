import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // b는 대입 되는 데이터 a는  a+b식을 계산한 값의 누적값이 된다. 그값은 함수 sum의 값이ㅏ 된다.
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); //number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]); //[list] 의 변화가 있을 때만 getAverage를 실행하도록 설정하는 useMemo
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map(
          (
            value,
            index //reduce, map 두 가지 함수 모두 배열의 원소 갯수만큼 함수를 반복실행한다.
          ) => (
            <li key={index}>{value}</li>
          )
        )}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
