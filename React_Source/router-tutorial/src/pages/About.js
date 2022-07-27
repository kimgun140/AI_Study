//url식
// const About = () => {
//   return (
//     <div>
//       <h1>Introduce</h1>
//       <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
//     </div>
//   );
// };
// export default About;

//쿼리스트링
// import { useLocation } from "react-router-dom";
// const About = () => {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>Introduce</h1>
//       <p>리액터를 사용해보는 프로젝트입니다.</p>
//       <p>쿼리스트링: {location.search} </p>
//     </div> // 실제 필요한 자료 ?detail=true&mode=1  search 는
//   );//        detail=true key=value 구조이다.
// };
// export default About;

import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  //useSearchParams 의 사용 방법 중요함 쿼리스트링 다루기 위해 사용
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail"); //get 값을 읽어오기, set 쿼리파라미터 업데이트하기
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({
      mode,
      detail: detail === "true" ? false : true,
    });
  };
  const onIncreaseMode = () => {
    //모든 파라매터는
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
