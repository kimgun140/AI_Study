import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation;
  //   const [searchParams, setSearchParams] = useSearchParams
  //   const detail = searchParams.get('detail')
  //   const mode = searchParams.get('mode')

  //   const onToggleDeai
  return (
    <div>
      <h1>소ㅓ개</h1>
      <p>리액터 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
