//p. 119~120 중요쓰

const url = require("url");

const { URL } = url; //url 생성자
const myURL = new URL( // 생성자를 통해서 객체를 새로 만든다.
  "hhtp://www.gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL); // WHATWG 방식
console.log("new URL()origin =>:", myURL.oringin);
console.log("url.format():", url.format(myURL));
console.log(
  "--------------------------------------------------------------------------------------"
);
const parsedUrl = url.parse(
  // 기존 노드방식
  "hhtp://www.gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
