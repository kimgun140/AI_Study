import "./App.css";

import React, { useState, useCallback } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  const NAVER_CLIENT_ID = "wynaxz0Qhnx9whochhEq";
  const NAVER_CLIENT_SECRET = "t2poRFPd1P";

  const onClick = () => {
    axios
      .get("/v1/search/blog", {
        params: {
          query: "react", //이미지 검색 텍스트
          start: 1, //검색 시작 위치
          display: 5, //가져올 이미지 갯구
          sort: "sim", //정렬 유형 (sim:유사도)
        },
        headers: {
          "X-Naver-CLient-Id": NAVER_CLIENT_ID,
          "X-Naver-CLient-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};
export default App;
