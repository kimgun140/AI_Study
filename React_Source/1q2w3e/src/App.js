import { useState } from "react";
import { useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import JoinInserts from "./components/JoinInserts";
import JoinList from "./components/JoinList";

function App() {
  const [joins, setJoins] = useState([]); //joins 전체 데이터 관리 , 여러 데이터를 관리 하기 때문에 배열구조
  const [form, setForm] = useState({}); // form 출력되는 데이터 관리 한개의 데이터를  관리 하니 객체구조

  // ref를 사용하여 변수 담기
  const nextNum = useRef(0); //각 데이터

  const onInsert = useCallback(
    // oninsert는 등록하는 기능만 한다.  입력받은 데이터를 valueㄹ=에 저장하고 value에
    (value) => {
      value.num = nextNum.current; //nextnum.currnet로 num의 value에 접근해서 기존의 joins에 접근해서 setjoins를 통해서 joins의 value의 값을 바꿔준다.
      setJoins(joins.concat(value)); //새로 등록할 입력받은 데이터에 아직 num이 부여가 안되어 있으니까 , 다음 번호를 nxet.num을 통해서 번호를 부여한다.
      nextNum.current += 1;
      // setForm({}); // 수정할 데이터를 관리하기 위한 용도
    },
    [joins] //
  );

  const onUpdateForm = useCallback(
    // 수정 버튼 누르면 다시 회원관리 창으로 불러오는 작업 수행한다.
    (idx) => {
      // 인덱스를 가지고 수정할 데이터의 위치를 찾고 회원관리의 위치를 찾는 것
      setForm(joins[idx]);
    },
    [joins]
  );

  const onUpdate = useCallback(
    // 수정버튼을 통해 불러진 데이터를 수정후 다시 등록해서 원래 자료를 수정한다.
    (updateJoin) => {
      setJoins(
        joins.map((data) => (data.num === updateJoin.num ? updateJoin : data)) //map은 배열을 반환 시켜준다. 배열 의 숫자만큼 함수를 반복한다. 그리고 가지고 있는 데이터의 num을 비교해서 일치하는 데이터를 찾고, 찾으면  새로운 새로운 배열을 만들고 joins의 기존의 데이터 대신 수정된값으로 바꿔준 뒤 새로운 배열로 기존의 배열을 교체해준다. 여기서 바뀐 해당 데이타외에는 이전과 동일한 데이터를 갖고있다. 그리고 새롭게 바뀐 배열을 joins에 넣어줘서 수정 데이터를 저장한다.
      );
      setForm({});
    },
    [joins]
  );

  const onRemove = useCallback(
    (num) => {
      setJoins(joins.filter((join) => join.num !== num));
    },
    [joins]
  );

  return (
    <TodoTemplate>
      <JoinInserts
        onInsert={onInsert}
        form={form}
        onUpdate={onUpdate}
      ></JoinInserts>
      <JoinList //joinlist를 통해서
        joins={joins} // 전체 데이터를 받아온다.
        onRemove={onRemove}
        onUpdateForm={onUpdateForm}
      ></JoinList>
    </TodoTemplate>
  );
}

export default App;
