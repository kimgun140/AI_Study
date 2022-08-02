import React from "react";
import "./component.scss";
const Component = () => {
  return (
    <div>
      <h1>CHAPTER 06 SQL 기본</h1>
      <h2>＊SECTION 01 SELECT문</h2>
      <ul>
        {" "}
        <h2>1.1 원하는 데이터를 가져와 주는 기본적인 &lt;select... from&gt;</h2>
        <h2>
          1.2 특정한 조건의 데이터만 조회하는 &lt;select... from...where&gt;{" "}
        </h2>
        <h2>1.3 GROUP BY 및 HAVING 그리고 집계 함수</h2>
        <h2>1.4 SQL의 분류</h2>
      </ul>
      <ul>
        <h2>&lt;SELECT...FROM &gt;</h2>
        <li>원하는 데이터를 가져와 주는 기본적인 구문</li>
        <li>가장많이 사용되는 구문</li>
        <li>데이터베이스 내 테이블에서 원하는 정보 추출하는 명령</li>
        <img src="./1.png" alt="#" />
      </ul>
      <ul>
        <h2>USE 구문</h2>
        <li>
          Workbench에서 직접 선택해서 사용도 가능
          <li>
            &#91;navigator &#93;의 &#91;Schemas &#93;탭, employees
            데이터베이스를 더블 클릭하거나 마우스 오른쪽 버튼을 클릭한 후
            &#91;Set as default Schema &#93; 를선택
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Component;
