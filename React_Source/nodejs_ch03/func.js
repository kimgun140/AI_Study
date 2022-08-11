const { odd, even } = require("./var"); //require는import의 node버전이다~ 이말이야! ./여기서 .이 매우 중요하다. .안찍으면 그냥 c드라이브가 경로 지정되어버린다~ 이말이야!!
// {doo,even}은 비구조화 할당 방식으로 불러온거다~ 이말이야!
function checkOddOrEven(num) {
  if (num % 2) {
    //홀수면
    return odd;
  }
  return even;
}
module.exports = checkOddOrEven;
//이것은 함수를 export한거다~ 이말이야! nodejs가 인식할 수 있는 방법이다 이마링야!!
