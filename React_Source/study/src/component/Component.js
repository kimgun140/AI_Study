import React from "react";
import "./component.scss";
import img_1 from "./1.png";
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
        <img src={img_1} alt="#" />
        <img_1 />
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
      <ul>
        <h3>GROUP by 및 HAVING 그리고 집계 함수</h3>
        <h2>GROUP BY</h2>
        <li>
          부서별 연봉을 산출한다면 그룹별로 나누는것이 group by가 되겠다.
          having절은 그룹바이의 조건을 설정해주는 것이다. where은 select의
          조건절인 것과 같다. having절은 그룹바이와 함께 사용해야만 한다. 절대
          혼자 사용할 수 없다.
        </li>
        <li>group by 통상적으로 집계함수와 함께 사용한다.</li>
        <li>
          하나의 테이블에 여러고객들의 구매데이터를 저장하고, 그안에서 데이터를
          여러 기준으로 분류해 관리를 쉽게한다. 개인 테이블로 관리할 경우
          테이블의 갯수가 너무 많아져 관리의 어려움이 커진다.
        </li>
        <li>
          구매내역 + 총 구매금액이 나올거시다. 1년동안 이용금액에 따라서 고객의
          등급을 분류한다. 그렇다면 분류를 위한 나의 구매금액 총합이 필요하고
          다른 고객들의 구 구매금액 총합역시 필요하다. 이런 작업에서 필요한게
          userid를 통한 분류작업이다. 분류를 통해서 구한 테이블에서 구매금액을
          확인해서 회원등급 기준으로 나눌 수 있을것이다.
        </li>
      </ul>
    </div>
  );
};

export default Component;
