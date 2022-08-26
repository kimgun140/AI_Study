import { useState, useEffect } from "react";
// import '../App.css';
import BoardList from "./BoardList";
// import BoardWrite from './BoardWrite';
// import BoardDetail from './BoardDetail';
// import BoardUpdateForm from './BoardUpdateForm';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./chickenMain.css";
function Main() {
  const [boardlist, setBoardlist] = useState({
    boardList: [],
  });

  const navigate = useNavigate();

  // const location = useLocation();

  // console.log(location);

  // const query_cm = location.search;

  const [article, setArticle] = useState({
    store_name: "",
    store_location: "",
    store_deliveryFee: "",
    store_phone: "",
    store_date: "",
  });

  // 0 : 글쓰기 / 1 : 상세보기 / 2: 글수정
  // const [actionMode, setActionMode] = useState({ mode: 0 });
  const [pageLink, setPageLink] = useState([]);

  var page_num = 1;
  const page_size = 5;
  var page_count = 1;
  var article_count = 0;
  // 일반 변수의 경우, props의 형태로 자식 컴포넌트에게 변수 전달이 불가능
  // useState의 경우, props의 형태로 자식 컴포넌트에게 변수 전달이 가능

  useEffect(() => {
    const login_id = window.sessionStorage.getItem("id");
    console.log("window.sessionStorage(login_id) : ", login_id);
    if (login_id === null) {
      alert("게시판 사용을 위해서는 로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);

  const handlePage = (e) => {
    console.log("handlePage(e.target.id : ", e.target.id);
    page_num = e.target.id;
    getList();
  };

  // 글쓰기
  async function getList() {
    // alert('getList(actionMode) : ' + actionMode.mode);
    await axios
      .post("http://localhost:8008/chickencount", {})
      // get : url의 데이터 전달 방식을 지정한 것
      // (url에 요청 정보가 노출되는 위험이 있음)
      .then((res) => {
        const { data } = res;
        article_count = data[0].COUNT;
        // 별칭을 COUNT로 대문자로 지정했기 때문에 값을 불러올 때도 대문자로
        page_count = Math.ceil(article_count / page_size);
        // 글이 하나일 경우에도 하나의 페이지가 나오도록 올림 처리
        var page_link = [];
        for (let i = 1; i <= page_count; i++) {
          page_link.push(i);
          console.log("getArticleCount(page_link) : ", page_link);
          setPageLink(page_link);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    console.log("article_count : ", article_count);

    await axios
      .post("http://localhost:8008/chickenlist", {
        page_num: page_num,
        page_size: page_size,
        article_count: article_count,
      })
      .then((res) => {
        const { data } = res;
        console.log("data : ", data);
        console.log("쿼리 가져옴?");
        setBoardlist({
          boardList: data,
        });
        // setActionMode({
        //   ...actionMode,
        //   mode: 0
        // });
      })
      .catch((e) => {
        console.error(e);
      });
  }
  // await는 비동기 함수를 동기적으로 바꿔주는 역할
  // (호출한 결과가 완료될 때 까지 다음의 await는 대기 중인 상태)
  // 첫 번째의 await가 계산되기 전에 두 번째의 await가 호출되서 실행되면 계산이 안된 값이 출력되며 오류가 뜨기 때문에
  // 첫 번째 await의 then 구문이 실행이 완료되기 전까지 두 번째의 await를 대기시킴

  // if (actionMode.mode === 0) {
  // alert('글쓰기');
  // 글쓰기
  return (
    <div className="zzz">
      {/* <BoardWrite
          handlelist={getList}
        /> */}
      <h1 align="center">Chicken</h1>
      <br />
      <BoardList
        boardlist={boardlist}
        handlelist={getList}
        handlepage={handlePage}
        pagelink={pageLink}
      />
      <br />
    </div>
  );
}

export default Main;
