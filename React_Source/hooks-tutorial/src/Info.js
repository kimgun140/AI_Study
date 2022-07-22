import { useInputs } from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  // 이벤트 객체(input)의 target(값)을 전달한다. 어디에? reducer에 전달하는겁니다. reducer함수의 사용은

  //위의 두가지를 객체의 형태로 하나로 묶어서 만들기 가능입니다.
  //   const [data, setDate] = useState ({
  //     name: "",
  //     nickname: "",
  //   })
  //두번째 파라매터가 어떤 곳에서 렌더링이 일어날지 정한다. 빈배열을 주면  리렌더링은 일어나지 않는다(맨 처음 마운트 할 때만 리렌더링이 발생한다.).
  //
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};
export default Info;
