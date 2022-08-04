import React from "react";

const component2 = () => {
  return (
    <div>
      <h2>8.04</h2>

      <ul>
        <li>
          {" "}
          MySQL 내장함수
          <ul>
            -흐름 함수, 문자열 함수, 수학 함수, 날짜/시간 함수, 전체 텍스트 검색
            함수, 형 변환 함수, XML 함수, 비트 함수, 보안/압축 함 수, 정보 함수,
            공간 분석 함수, 기타 함수 등
          </ul>
        </li>
        <ul>
          제어 흐름 함수
          <li>프로그램의 흐름 제</li>
          <li>
            IF (수식, 참, 거짓)
            <ul>수식이 참 또는 거짓인지 결과에 따라서 2중 분기</ul>
            <img src="" alt=""></img>
          </li>
          <li>
            IFNULL(수식1, 수식2)
            <ul>
              • 수식1이 NULL이 아니면 수식1이 반환되고 수식1이 NULL이면 수식2가
              반환
            </ul>
          </li>
        </ul>
        <ul>
          <h1>◦ 제어 흐름 함수</h1>
          <li>
            ⁃ NULLIF(수식1, 수식2)
            <ul>수식1과 수식2가 같으면 NULL을 반환, 다르면 수식1을 반환</ul>
          </li>
          <li>
            ⁃ CASE ~ WHEN ~ ELSE ~ END
            <ul>CASE는 내장 함수는 아니며 연산자(Operator)로 분류</ul>
            <ul>• 다중 분기에 사용되므로 내장함수와 함께 알아두자</ul>
            <img src="" alt=""></img>
            <ul>• CASE 뒤의 값이 10이므로 세 번째 WHEN이 수행되어 ‘십’ 반환</ul>
            <ul>• 만약, 해당하는 사항이 없다면 ELSE 부분이 반환</ul>
          </li>
        </ul>
        <ul>
          <h2>문자열 함수</h2>
          <li>문자열 조작, 활용도 높음</li>
          <li>
            ASCII (아스키 코드),
            <ul>• 문자의 아스키 코드값 반환</ul>
          </li>
          <li>
            CHAR(숫자)
            <ul>• 숫자의 아스키 코드값에 해당하는 문자 반환</ul>
          </li>
          <li>
            BIT_LENGTH(문자열), CHAR_LENGTH(문자열), LENGTH(문자열)
            <ul>• 할당된 Bit 크기 또는 문자 크기 반환</ul>
            <ul>• CHAR_LENGTH( )는 문자의 개수 반환</ul>
            <ul>LENGTH( )는 할당된 Byte 수 반환</ul>
          </li>
        </ul>
        <ul>
          <h2>◦ 문자열 함수</h2>
          <li>
            ⁃ CONCAT(문자열1, 문자열2,…), CONCAT_WS(구분자, 문자열1, 문자열2,…)
            <ul>• CONCAT( ) : 문자열을 이어줌</ul>
            <ul>CONCAT_WS( ) : 구분자와 함께 문자열을 이어주는 역할</ul>
            <img src="" alt=""></img>
            <ul>• 2025/01/01 반환</ul>
          </li>
        </ul>
        <ul>
          <h2>문자열함수</h2>
          <li>
            ELT(위치, 문자열1, 문자열2, …), FIELD(찾을 문자열, 문자열1, 문자열2,
            …), FIND_IN_SET (찾을 문자열, 문자열 리스트), INSTR(기준 문자열,
            부분 문자열), LOCATE(부분 문자열, 기준 문자열)
            <ul>• ELT( ) : 위치 번째에 해당하는 문자열 반환</ul>
            <ul>• FIELD( ) : 찾을 문자열의 위치를 찾아 반환, 없으면 0</ul>
            <ul>
              • FIND_IN_SET( ) : 찾을 문자열을 문자열 리스트에서 찾아 위치 반환
              <ul>
                • 문자열 리스트는 콤마(,)로 구분되어 있고 공백이 없어야 함
              </ul>
            </ul>
            <ul>
              • INSTR( )는 기준 문자열에서 부분 문자열 찾아 그 시작 위치 반환
            </ul>
            <ul>• LOCATE( )는 INSTR( )와 동일하지만 파라미터의 순서가 반대</ul>
          </li>
        </ul>
        <ul>
          <h2>문자열 함수</h2>
          <li>
            ⁃ FORMAT(숫자, 소수점 자릿수)
            <ul>
              숫자를 소수점 아래 자릿수까지 표현, 1,000단위마다 콤마 표시해 줌
            </ul>
          </li>
          <li>
            {" "}
            BIN(숫자), HEX(숫자), OCT(숫자)
            <ul>• 2진수, 16진수, 8진수의 값을 반환</ul>
          </li>
          <li>
            ⁃ INSERT(기준 문자열, 위치, 길이, 삽입할 문자열)
            <ul>
              • 기준 문자열의 위치부터 길이만큼 지우고 삽입할 문자열 끼워 넣음
            </ul>
            <ul>• ‘ab@@@@ghi’와 ‘ab@@@@efghi’ 반환</ul>
            <img src="" alt=""></img>
          </li>
        </ul>
        <ul>
          <h2>문자열 함수</h2>
          <li>
            LEFT(문자열, 길이), RIGHT(문자열, 길이)
            <ul>• 왼쪽 또는 오른쪽에서 문자열의 길이만큼 반환</ul>
            <img src="" alt=""></img>
            <ul>• ‘abc’와 ‘ghi’ 반환</ul>
          </li>
          <li>
            UPPER(문자열), LOWER(문자열)
            <ul>• 소문자를 대문자로, 대문자를 소문자로 변경</ul>
          </li>
          <li>
            {" "}
            LPAD(문자열, 길이, 채울 문자열), RPAD(문자열, 길이, 채울 문자열)
            <ul>• 문자열을 길이만큼 늘린 후에 빈 곳을 채울 문자열로 채움</ul>
          </li>
        </ul>
        <ul>
          <h2>문자열 함수</h2>
          <li>
            ⁃ LTRIM(문자열), RTRIM(문자열)
            <ul>
              • 문자열의 왼쪽/오른쪽 공백을 제거, 중간의 공백은 제거되지 않음
            </ul>
          </li>
          <li>
            ⁃ TRIM(문자열), TRIM(방향 자를_문자열 FROM 문자열)
            <ul>TRIM(문자열)은 문자열의 앞뒤 공백을 모두 없앰</ul>
            <ul>
              • TRIM(방향 자를_문자열 FROM 문자열) 에서 방향은 LEADING(앞),
              BOTH(양쪽), TRAILING(뒤) 으 로 표시
            </ul>
            <ul>• ‘이것이’와 ‘재밌어요.’ 반환</ul>
          </li>
          <img src="" alt=""></img>
        </ul>
        <ul>
          <h2>◦ 문자열 함수</h2>
          <li>
            ⁃ REPEAT(문자열, 횟수)
            <ul>• 문자열을 횟수만큼 반복</ul>
          </li>
          <li>
            ⁃ REPLACE(문자열, 원래 문자열, 바꿀 문자열)
            <ul> 문자열에서 원래 문자열을 찾아서 바꿀 문자열로 바꿈</ul>
            <ul>• ‘This is MySQL이다’ 반환</ul>
          </li>
          <img src="" alt=""></img>
          <li>
            ⁃ REVERSE(문자열)
            <ul>• 문자열의 순서를 거꾸로 바꿈</ul>
          </li>{" "}
        </ul>
        <ul>
          <h2>문자열 함수</h2>
          <li>
            ⁃ SPACE(길이)
            <ul>• 길이만큼의 공백을 반환</ul>
          </li>
          <li>
            ⁃ SUBSTRING(문자열, 시작위치, 길이) 또는 SUBSTRING(문자열 FROM
            시작위치 FOR 길이)
            <ul>
              시작위치부터 길이만큼 문자를 반환, 길이가 생략되면 문자열의 끝까지
              반환
            </ul>
            <ul>• ‘민국’ 반환</ul>
            <img src="" alt=""></img>
          </li>
          <ul>
            <h2>asd</h2>
          </ul>
        </ul>
      </ul>
    </div>
  );
};

export default component2;
