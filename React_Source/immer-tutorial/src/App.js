// import logo from "./logo.svg";
import "./App.css";
import { useRef, useCallback, useState } from "react";
import produce from "immer";
const App = () => {
  const nextId = useRef(1); //항목들을 식별하기위한 코드
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [], // 배열안에 listdata가 온다
    uselessValue: null,
  });
  // input 수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target; //이벤트일어난 객체 이름(name)과 값(value) ref.current로 값을 읽어오면 온체인지 같은 이벤트 없이 처리 가능하다.
    setForm(
      produce((draft) => {
        draft[name] = value;
        // setForm({
        //   //기존 객체를 대체하는 새로운 객체를 대입해서 데이터를 비워준다.
        //   ...form,
        //   [name]: [value],
        // });p.312
      })
    );
  }, []);
  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      // array 등록을 위한 함수
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
      // ...data,
      // array: data.array.concat(info),p.312

      //form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  //항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce((draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    //          ...data,
    // array: data.array.filter((info) => info.id !== id), p.312

    []
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange} //렌더링이 많아서 비추
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
