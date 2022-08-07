import React from "react";

const Component3 = () => {
  return (
    <div>
      <ul>
        <h2>Node.js</h2>
        <ul>
          p. 90
          <li>REPL 사용하기 </li>
          <ul>
            Read(읽기), Eval(해석하다), Print(반환하다), Loop(반복하다) /
            REPL이라고 부른다~
          </ul>
          <ul>노드 실행: 프롬프터창에서 node </ul>
          <ul>const str = "hello" / console.log(str)</ul>
          <ul>
            입력시 undefined 메세지가 출력된다. REPL과정에서 평가과정이 없기
            때문에 반환될 정보가 없기때문이다.
          </ul>
          REPL종료 ctrl + c 이다.
        </ul>
        <ul>
          p.91
          <li>JS파일 실행하기</li>
          <ul>자바스크립트로 클라이언트와 서버를 둘다 다룰 수도 있다. </ul>
        </ul>
        <ul>
          p.92
          <ul>3.3모듈로 만들기</ul>
          <li>
            하나의 양식을 잘 설계해서 만들어 놓으면 다른 프로젝트를 할 때 재사용
            가능하다. 개이득이다. 노드는 코드를 모듈로 만들수 있다는 점에서
            브라우저의 자바스크립와는 다릅니다. 머듈이란 특정한 기능을 하는
            함수나 변수들의 집합입니다. 모듈로 만들어주면 어려 프로그램에 해당
            모듈을 재사용할 수 있습니다. 자바스크립트에서 코드를
            재상용하기위해서 함수로 만든느 것과 비슷합니다.
          </li>
          <li>
            {" "}
            <del>컬러스크립트 추가</del>{" "}
          </li>
        </ul>

        <ul>
          p.98~100
          <li>nodejs에서 console.log()는 프롬프터창에서 실행</li>
        </ul>
        <ul>
          p.103
          <li>__filename, __dirname</li>
          <li>
            module, export, require
            <ul>
              require, export모두 파일의 최상단에 위치하지 않아도 ㄱㅊ다 어디든
              좋다~ 이말이다! cache: 자주 사용할 자료들을 담아놓고 다시
              사용하겠다. 해당문서의 캐시를 확인한다.
            </ul>
          </li>
        </ul>
        <ul>
          p.109~ 110
          <li>
            process.env
            <ul></ul>
          </li>
          <li>
            process.exit<ul></ul>
          </li>
        </ul>
        <ul>
          p.113~114 노드 내장 모듈 사용하기
          <li></li>
          p.115 path
          <li></li>
          <h2>p.119 url</h2>
        </ul>
        <ul>
          <h2>CHAPTER.5패키지매니저</h2>
          <li>Node Package Manager</li>

          <li>
            서비스에 필요한 패키지를 하나씩 늘려가다 보면은 어느새 감당할 수
            없게 많아지게 될 겁니다. 그때 필요한것이 <br />
            package.JSON입니다ㅏ.
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Component3;
