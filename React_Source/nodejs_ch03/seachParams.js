// 매우 중요쓰 예제 ㅇㅋ? ㅇㅋ

const { URL } = require("url");

const myURL = new URL(
  "http:// www.gilbut.co.kr/?page=3&limt=10&category=nodejs&category=javascript"
);
console.log("searchParams:", myURL.searchParams);
console.log("searchParams.getAll():", myURL.searchParams.getAll("category"));
console.log("searchParams.get():", myURL.searchParams.get("limit"));
console.log("searchParams.has():", myURL.searchParams.has("page"));

console.log("searchParams.keys():", myURL.searchParams.keys(""));
console.log("searchParams.values():", myURL.searchParams.values(""));

myURL.searchParams.append("filter", "es3");
myURL.searchParams.append("filter", "es5"); // 기존 내용을 유지하며 추가하는 내용
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter", "es6"); //set 변경
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.delete("filter"); // 삭제
console.log(myURL.searchParams.getAll("filter"));

console.log("searchPharams.toString()", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
