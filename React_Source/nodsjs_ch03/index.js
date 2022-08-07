const { odd, even } = require("./var"); // const obj = require("./var");
//                                     const obj.odd, obj.even = require("./var");
//                                      {odd, even}     비구조화 할당을 사용한 방식 위의 두 문장의 사용은 문제가 없다. 객체로 정의된 객체를 다른 객체로 받아와서 사용하는거니까 된다~ 이말이야!
const checkNumber = require("./func"); // import하는 함수의 이름은 정의할 때의 이름과 달라도 상관은 없으나 같은이름으로 설정하는게 헷갈리지 않는다.

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    // 참과 거짓을 논할 때 0은 거짓 1은 참으로 판별한다~ 이말이야!! 여기서 값을 비교하는 문장이 없는이유는 참 거짓으로 판별하는 방법을 사용하기 때문이다~ 이말이야!
    return odd; //obj.odd
  }
  return even; // obj.even 이렇게 객체의 멤버를 설정해주면 문제가 없다~ 이말이야!
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
