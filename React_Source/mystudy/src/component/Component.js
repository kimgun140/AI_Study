import React from "react";
import "./component.scss";
import img_1 from "../img/i1.png";
import "./Topbutton.scss";
import "../";
import { Link } from "react-router-dom";
const Component = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <h1>CHAPTER 06 SQL 기본</h1>
      <h2>SECTION 01 SELECT문</h2>
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
        <img className="img1" src={img_1} alt="#" />
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
          <br />
          having절은 그룹바이의 조건을 설정해주는 것이다. where은 select의
          조건절인 것과 같다.
          <br /> having절은 그룹바이와 함께 사용해야만 한다. 절대 혼자 사용할 수
          없다.
        </li>
        <li>group by 통상적으로 집계함수와 함께 사용한다.</li>
        <li>
          하나의 테이블에 여러고객들의 구매데이터를 저장하고, 그안에서 데이터를
          여러 기준으로 분류해 관리를 쉽게한다. 개인 테이블로 관리할 경우
          테이블의 갯수가 너무 많아져 관리의 어려움이 커진다.
        </li>
        <li>
          구매내역 + 총 구매금액이 나올거시다.
          <br /> 1년동안 이용금액에 따라서 고객의 등급을 분류한다. 그렇다면
          분류를 위한 나의 구매금액 총합이 필요하고 다른 고객들의 구 구매금액
          총합역시 필요하다. 이런 작업에서 필요한게 userid를 통한 분류작업이다.
          분류를 통해서 구한 테이블에서 구매금액을 확인해서 회원등급 기준으로
          나눌 수 있을것이다.
        </li>
        <li>
          count() 테이블의 행수를 체크하는 함수 <br />
          count(*) count(groupname) 이 다르다 <del>왜 달라 못들음 ㅅㅂ</del>
          <br />
          count(disticnt userid)는 userid에서 중복되는 값을 제외한 것을 제외하고
          횟수를 산출한다. ,<br />
          하지만 userid는 중복값을 갖지않기 count횟수가 달라지지않을 거시다??
        </li>
        <li>
          {" "}
          프로그램에서 데이터 값을 불러올때 공백사용이나 한글 사용은 절대
          기피해야한다. 인코딩오류가 발생한다.
        </li>
      </ul>
      <ul>
        <h2>HAVING절</h2>
      </ul>
      <ul>
        <h2>SQL 분류</h2>
        <h1>DML (data mamipulation language, 데이터 조작 언어)</h1>
        <li>데이터를 조작(선택, 삽입, 수정, 삭제)하는 데 사용되는 언어</li>
        <li>
          DML 구문이 사용되는 대상은 <b>테이블의 행</b>
        </li>
        <li>
          DML 사용하기 위해서는 <b>테이블이 정의되어 있어야 함</b>
        </li>
        <li>
          SQL문 중 <b>SELECT, INSERT, UPDATE, DELETE</b>가 이 구문에 해당
        </li>
        <li>
          트랜잭션(Transaction)이 발생하는 SQL도 DML에 속함
          <li>
            테이블의 데이터를 변경(입력/수정/삭제)할 때 실제 테이블에 완전히
            적용하지 않고, <b>임시로 적용 시키는 것</b>
          </li>
          <li>
            <b>취소가능</b>
          </li>
          <li>Like 은행업무 </li>
        </li>
        <h3>용어정리</h3>
        <li>
          commit: 데이터를 입력한 사본을 원본에 업데이트하는 작업, 업데이트를
          통해서 원본에 반영하는 작업
        </li>
        <li>
          rollback: INSERT UPDATE 등 commit된 작업을 이전 상태로 복원하고 싶을때
          수정되기 전상태로 되돌리는 작업
        </li>
        <li>alter: 데이터베이스 개체를 변경하는 역할</li>
        <li></li>
      </ul>
      <ul>
        <h3>용어정리</h3>
        <li>기본테이블:물리적으로 존재하는 테이블</li>
        <br />
        <li>
          뷰(view): 가상테이블 물리적으로 존재하지않고 기본테이블에서 필요한
          콜럼만 불러와서 만드는 가상의 테이블
        </li>
        <li>
          테이블 생성시 정수형(int)만 AI(auto increment)가 가능하다.{" "}
          <del>보통 id,num에 사용하나?</del>
        </li>
      </ul>
      <ul>
        <h2>DDL (Data Definition Language, 데이터 정의 언어)</h2>
        <li>
          데이터베이스, 테이블, 뷰, 인덱스 등의 데이터베이스 개체를
          생성/삭제/변경하는 역할
        </li>
        <li> CREATE, DROP, ALTER 자주 사용</li>
        <li>DDL은 트랜잭션 발생시키지 않음</li>
        <li>되돌림(ROLLBACK)이나 완전적용(COMMIT) 사용 불가</li>
        <li> 실행 즉시 MySQL에 적용</li>
      </ul>
      <ul>
        <h2>DCL (Data Control Language, 데이터 제어 언어)</h2>
        <li>사용자에게 어떤 권한을 부여하거나 빼앗을 때 주로 사용하는 구문</li>
        <li>GRANT/REVOKE/DENY 구문</li>
      </ul>
      <ul>
        <h2>데이터의 삽입 : INSERT</h2>
        <ul>◦ INSERT문의 기본</ul>
        <li>
          테이블 이름 다음에 나오는 열 생략 가능
          <li>
            생략할 경우에 VALUES 다음에 나오는 값들의 순서 및 개수가 테이블이
            정의된 열 순서 및 개수와 동일해야 함
          </li>
        </li>
        <h2>자동으로 증가하는 AUTO_INCREMENT</h2>
        <li>
          INSERT에서는 해당 열이 없다고 생각하고 입력
          <li>INSERT문에서 NULL 값 지정하면 자동으로 값 입력</li>
        </li>
        <li> 1부터 증가하는 값 자동 입력</li>
        <li>적용할 열이 PRIMARY KEY 또는 UNIQUE일 때만 사용가능</li>
        <li>데이터 형은 숫자 형식만 사용 가능</li>
        <ul>
          <ul>
            <h2>데이터의 삽입 : INSERT</h2>
            <h1>대량의 샘플 데이터 생성</h1>
            <li>INSERT INTO … SELECT 구문 사용</li>
            <img src="" alt="#"></img>
            <li>다른 테이블의 데이터를 가져와 대량으로 입력하는 효과</li>
            <li>SELECT문의 열의 개수 = INSERT 할 테이블의 열의 개수</li>
            <li>
              테이블 정의 까지 생략 하려면 CREATE TABLE … SELECT 구문을 사용
            </li>
          </ul>
          <ul>
            <h3>데이터의 수정 : UPDATE</h3>
            <h2>기존에 입력되어 있는 값 변경하는 구문</h2>
            <img src="" alt="#"></img>
            <h2>
              WHERE절 생략 가능하나 WHERE절 생략하면 테이블의 전체 행의 내용
              변경됨
            </h2>
            <li>
              실무에서 실수가 종종 일어남, <b>주의 필요</b>
            </li>
            <li>원상태로 복구하기 복잡하며, 다시 되돌릴 수 없는 경우도 있음</li>
          </ul>

          <ul>
            <h3>데이터의 삭제 : DELETE FROM</h3>
            <ul>행 단위로 데이터 삭제하는 구문</ul>
            <img src="" alt="#"></img>
            <h2>WHERE절 생략되면 전체 데이터를 삭제함</h2>
            <h2>테이블을 삭제하는 경우의 속도 비교</h2>
            <ul>
              <li>DML문인 DELETE는 트랜잭션 로그 기록 작업 때문에 삭제 느림</li>
              <li>
                {" "}
                DDL문인 DROP과 TRUNCATE문은 트랜잭션 없어 빠름
                <li>테이블 자체가 필요 없을 경우에는 DROP 으로 삭제</li>
                <li>
                  테이블의 구조는 남겨놓고 싶다면 TRUNCATE로 삭제하는 것이
                  효율적
                </li>
              </li>
            </ul>
            <ul>
              <h2>용어정리</h2>
              <del>ddl dml등의 차이를 아라보자</del>
            </ul>
          </ul>

          <h1>용어정리</h1>
          <ul>
            <b>
              insert into usertbl(userid, name, birthyear, addr, mobile1,
              mobile2,height,mdate)
              <br /> values('lee','이기자','19901119,','광주','010',
              '12341234',180,'19990909');
              <br /> -- 테이블의 모든 값을 순차적으로 입력했을 때 콜럼의 이름을
              생략할 수 있다.
            </b>
          </ul>
        </ul>
        <ul>
          <h2>CHAPTER 07 SQL 고급</h2>
          <h2>SECTION 01 MySQL의 데이터 형식</h2>
          <h3>MySQL에서 지원하는 데이터 형식의 종류</h3>

          <ul>
            <ul>Data Type으로 표현</ul>
            <li>데이터 형식, 데이터형, 자료형, 데이터 타입등 다양하게 불림</li>

            <h3>데이터 형식에 대한 이해가 필요한 이유</h3>
            <li>SELECT문 더욱 잘 활용</li>
            <li>테이블의 생성 효율적으로 하기 위해 필요</li>
            <ul>
              <b>MySQL에서 데이터 형식의 종류는 30개 정도</b>
              <li> 중요하고 자주 쓰는 형식에 대해 중점 학습</li>
            </ul>
          </ul>
          <h2>용어정리</h2>
          <img src="i2" alt="#"></img>
          <img src="i3" alt="#"></img>
          <img src="i4" alt="#"></img>
          <img src="i5" alt="#"></img>
        </ul>
        <h2>변수의 사용</h2>
        <li>
          Workbench를 재시작할 때까지는 계속 유지, Workbench를 닫았다가
          재시작하면 소멸
        </li>
        <del>
          <li>변수의 선언과 값의 대입 형식</li>
          <img src="" alt="#"></img>
          <li>변수 사용 실습</li>
          <img src="" alt="#"></img>
        </del>
        <ul>
          <h3>데이터 형식 변환 함수</h3>
          <li>CAST( ), CONVERT( ) 함수를 가장 일반적으로 사용</li>
          <li>
            데이터 형식 중에서 가능한 것은 BINARY, CHAR, DATE, DATETIME,
            DECIMAL, JSON, SIGNED INTEGER, TIME, UNSIGNED INTEGER
          </li>
          <li>
            함수 사용법
            <img src="i6" alt="#"></img>
            <img src="i7" alt="#"></img>
          </li>
        </ul>
        <ul>
          <h2> 6장 익스프레스 웹서버 만들기 </h2>
          <li>wellkownon: 0~1023까지 용도가 정해진 포트넘버</li>
          <li>
            1024~65535번 포트는 우리가 사용가능한 포트넘버 포트
            <ul>포트넘버는 16 bit로 표현된다.</ul>
          </li>
          <li>app.get: get방식 요청 처리 </li>
          <li>
            app.post: post방식 요청처리
            <ul>
              폼태그에 post방식으로 지정해주지 않으면 기본설정은 get방식이라고
              할 수 있다.{" "}
            </ul>
            <li>
              http(Hyper Text Transfer Protocol)프로토콜(protocol: 통신규약
              약소쿠 ): 헤더 + 바디(몸체)
              <ul>get방식이 보이는거 post 방식이 안보이는 방식이다</ul>
              <ul>개인정보같은 정보는 post 방식으로 데이터를 보낸다.</ul>
              <ul>
                header안에 프로토콜종류, 포트넘버(어떤 이유로 사용하는지
                메일인지 뭔지 정해진 포트넘버로 보내짐), http방식에서는 get인지
                post인지, 정보를 보내줄 주소등등 데이터설계가 되어있고 <br />
                웹브라우저와 웹서버간의 데이터를 주고받는 과정에서 <br />
                header에 적혀진 데이터를 무슨 방법으로 읽어야하는지, 전달된
                데이터를 나에게 맞게끔 읽어오는 방식등을 담겨져 온다.
                <br />
                <img src="" alt="#" />
                req에는 요청객체 res에는 응답객체가 담겨져있다.
                <br /> req에서 필요한 데이터를 서버에 요청을하고, res에는
                클라이언트에게 요청받은 데이터를 서버가 보내주는 데이터가
                담긴다.
                <br />
                res.send에 서버에서처리한 데이터를 클라이언트에게 다시 보내주는
                것.
                <br />
                app.listen: 서버가 스탠바이 상태에서 기다리고 있다가
                클라이언트에서 보내준 요청을 인식하는 과정
                <br />
                req에서 리퀘스트 객체에 클라이언트가 서버에 원하는 정보를
                담겨있다.
                <br />
                어떤 포트넘버에서 요청이 들어오면 수락하고 요청을 해석해서
                일치하는 url을 찾고 서버에서 찾아서 처리작업이 끝나면 res에
                담아서 보내주게 된다. url을 찾고 수행한다.
                <br />
                <del>
                  form action="" method="get/post" enctype="파일첨부기능"
                </del>
                <br />
                폼태그에서 메소드를 get/post를 사용할 때 axios.get("주소", {}
                )이러한 파라매터들을 get방식으로 가져오게된다. axios.post()
              </ul>
              <img src="" alt="#" />
            </li>
          </li>
          <li>
            npm start 하면 "nodemon app" 을 실행한다. nodemon으로 app.js파일을
            실행한다는 말
          </li>
        </ul>
        <ul>
          <h2>session 과 cookie </h2>
          <ul>
            세션과 쿠키 쿠키는 클라이언트에 저장되는 정보, 세션은 서버에
            저장되는 정보 <br />
            클라이언트에서 요청이 들어오면 서버는 세션을 만들고 그 안에 세션
            아이디를 생성한다. <br />
            이과정은 다음에 클라이언트에서 요청을 보냈을 때 해당 클라이언트가
            기존의 사용자인지 아닌지를 식별한다.
            <br />
            http프로토콜은 연결상태를 유지할 수 없는 특징을 갖는다. 요청을
            응답하고나면 서버와 클라이언트간의 연결이 끊겨버린다. <br />
            쿠키는 보안에 취약한 클라이언트에서 관리하므로 보안에 취약하다.
            세션은 서버의 자원을 많이 소비하기 때문에 쿠키와 함께 사용해서
            <br /> 서버자원의 낭비를 방지하여 웹사이트의 속도를 높일 수 있다.
          </ul>
          <li>
            6.2.7
            {/* <form action=""method="" encType="" >
            
            </form>*/}
          </li>
        </ul>
        <ul>
          <h2>라우팅 객체로 라우터 불리하기</h2>
        </ul>
      </ul>
    </div>
  );
};

export default Component;
