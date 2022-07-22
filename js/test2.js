 //변수 선언문 변수 선언문을 다른 소스코드보다 먼저 배치하자! 변수에 숫자를 사용할 수 있다. 하지만 var 1a처럼 숫자가 앞에 오는건 불가능 var a_1은 가능하다. 변수의 이름은 값의 이름을 잘이해할 수 있는 이름으로 설정하자 변수이름은 영어로 만드세용 ㅇㅋ? ㅇㅋ
// p.44 사용 가능한 변수이름 불가능한 이름들 대소문자 구분이 중요하다. 자바스크립트는 대소문자 구분을 한다.
// 수업중에 한 내용은 복습을 하되, 수업중에 언급하지 않은 내용은 생략해도 좋다. 

var res, score; //
res = 'Hello world';  // =(등호)를 기준으로 우측에는 변수,상수,수식이 올 수 있다. 대입 연산자의 좌변에는 변수가 와야한다.
score = res //이런 수식을 '표현자'라고 한다. 100(정수형 상수) 10.0(실수형 상수) "hello!!"(문자열 상수) 
console.log(res)
//null 은 값이 없다는 의미이다.

var obj = {name:'lee', address:'서울'}; //{키:값}  {key:value}
console.log(obj);
console.log(obj.name); //key를 이용해서 설정된 값에 대해서 접근할 수 있다.
console.log(obj.address);
var arr = [4,5,6,]; //배열 객체  자바스크립트에서는 배열을 객체형식처럼 다룰 수 있다.
console.log(arr); //인덱스 값은 0부터 시작한다. 인덱스는 배열에서 순서를 묻는 것이다.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]); //이것이 하나의 '문'이다. 문은 여러개의 토큰으로 구성이된다.
// ;(세미콜론)은 문의 종료를 나타낸다. 단 여러개의 토큰을 {}(중괄호)를 사용해서 묶을 때는 ;을 사용하지않는다.
// if (10 == 20)
// {
//     a= 1 ;
//     b = 2;
//     c = a + b;
// } 위의 경우에서 중괄호 안에 묶였을 때 세미콜론 사용하지않는다. 
var a;
a=10;
//대입을 통해서 표현식인 '문'과 표현식이 아닌 '문'으로 구분 할 수 있는 방법이다.
// '=='값만 비교한다 '===' 값과 type까지 비교한다. 
if ('10' === 10)
    console.log('AAA');
else
    console.log('BBB');

console.log('1' == 1.0)
var a ="aaa\'bbb\"ccc\\"
console.log(a)

var templete = `<ul>
<li><a href="#"></a><li>
</ul>`
console.log(templete)

var first = 'ung-mo';
var last = 'lee';

console.log('MY name is ' + first+' '+last + '.')// 문자열끼리의 '+'사용은 문자열끼리의 연결로 사용된다.
console.log(10 + 20); //숫자연산에서 '+'는 더하기 덧셈의 의미로 사용된다. 
console.log(`My name is ${first} ${last}`); // ~(백틱)과 ${}를 사용해서 그대로 출력이 가능하다.
console.log(`1 +2 = ${1+2}`);

var foo = true;
console.log(foo); // 값이 바뀌면 변수에 대한 답도 바뀐다?

//null 값이 없다는 것을 알려주는 표현이다.
//자바스크립트의 대부분이 객체로 이루어져있다.
var key = Symbol('key')
console.log(typeof key)
console.log(key)

var obj = {name:'lee',address:'seoul', tel:'010-010-0011'}
console.log(obj)
//byte-1 short-2 int-4 iong-8

//아주 가볍게 아주 light하게 very light 기모띠
// teacher killing me softly 너무 졸려 너무 sleepy too sleepy
//전역변수: 처음부터 끝날때까지 유지되는 변수 
//지역변수: 함수나 수식안에서 만들어져서 종료되면 같이 종료되는 변수

//불필요한 변수는 만들지 않는게 좋아요. ㅇㅋ? ㅇㅋ 
//카이스트 집안에서 막내아들 카이스트 보내기 프로젝트 
//프로그램 올리피아드 평가 기준:
// 실행시간, 메모리 사용량
//왜 이이야기를 했냐 변수의 사용은 필요한 부분에 필요한만큼만 효율적으로 사용해야한다. 
//scoping rule ? 변수의 유효범위 는 최대한 좁게 만들어서 변수의 오작동을 억제해야한다.
//전역변수는 최대한 사용하지말자, 전역변수 많이 만들면 실행시간 ㅈㄴ오래걸림 
//변수보다는 함수를 사용하는게 좋다.
//변수의 활용에 걸맞는 이름을 정해서 설정해야 확인이 쉽다. ㅇㅋ? ㅇㅋ
//어려운내용이 아니죠? 
//여기까지 어려운 내용ㅇ이 있을까요?
//어렵지 않죠?
//다음은 연산자가 나옵니다.
var a = 10, b ; // 단항산술연산자 ++/--는 앞에 위치하면 먼저 값을 증가 감소 시킨후 다시 할당한다.
// ++/--는 뒤에 위치하면 다른 연산후 증가/감소 시키고 할당한다. 
b = a++;
console.log(b) //++: a=a+1 a값에 1을 더한 결과값이 a가 된다.  
b = ++a;
console.log(b)// ++가 a 보다 앞에 있으면 a+1을 먼저 사용하고 a를 

console.log(a--)//--: a = a-1
console.log(--a)
console.log(5 % 2)
console.log('mbc' + 'kbs')

//할당연산자 a+=10 a=a+10 항상 좌변에는 변수가 와야한다. 우변에는 여러가지 적용가능
//a*=10 a=a*10 

var x;
x=10
console.log(x)
x += 5;
console.log(x)
x -= 5;
console.log(x)
x *=5;
console.log(x)
x /=5;
console.log(x)

var a, b, c;
//산술연산자
a=b=c=0
console.log(a)
console.log(b)
console.log(c)
console.log(a)

//비교연산자
//==는 (같다) !=(다르다) ===(값과 타입도 같다)
//NAN 자신과 일치하지 않는 유일한 값이다. 알수없는 값이라는 의미
Number.isNaN // NAN이면 true 아니면 false 값이 NAN인지 아닌지 확인하는 함수


//상황연산자(조건연산자)
var x = 2;
var result =x % 2 ? '홀수' : '짝수' 
//          {      }   |        |
//        조건식       참      거짓

console.log(result);

//논리 연산자  true or false
true || true // 트루
true || false//true short circuit 연산 앞에서 참인지 거짓인지 판단 했다면 뒤에는 더이상 계산 할 필요가 없다.
false || true //true
false || false//false
true && true//true
true && false//false
false && true//false
false && false//false

console.log('cat' && 'dog')

//쉼표 연산자  실제 사용할경우는 많이 없다 이렇게 한번에 여러변수를 
//표현하는거 추천하지않는다.
var a, b, c 
a = 1, b = 2, c = 3;
console.log(a, b, c)

//그룹연산자 그냥 계산은 먼저하려고 할때 괄호로 묶어준다.
var a, b, c;

a= 10 * (2 - 3);
console.log(a)

//typeof연산자 숫자로 생각하고 덧셈 연산을 원했지만 
//타입 설정을 문자열로 해 연결의 의미로 사용될 수 있다. 그러니 typeof연산자를 사용해 확인을 한다. 
var a, b, c;
a = '10';
b = '20';
c = a + b;

console.log(c);
console.log(c);
// [1,2,3]//배열객체
// {name:'lee, addr:'서울'}//객체

//지수연산자
console.log(2 ** 3);

//그외의연산자
//delete new instanceof 이거 3가지만 봐두셈

//연산자의 부수 효과 p.90
//연산자 우선순위 p.91

//제어문 중괄호{}(블락기호) 여러문을 하나의 영역으로 묶어 줄때 사용
var x = 1;
// if (x <10) {
//      x++;
//       crossOriginIsolated.log(x);
// }

//함수선언문 {}(중괄호)를 사용해서 여러문의 함수를 하나의 영역으로 묶어줄때 사용
function sum(a, b) {
    
    return a + b;

}

// 객체를 정의할 때
var obj = { name:"lee", addr:"서울"}

//p. 94 조건문 if문에서 else문은 생략할 수 있다. (이게 무슨 말일까 wtf) 이러한 문장을 단순 if문이라고 한다. 조건식이 true면 실해 아니면 실행 안함 if문 안에  다른 if문을 여러번 사용가능 

var num = 80;
var kind;

//if문 if문의 범위는 중괄호가 없으면 전부 하나의 문장으로 판단한다.
if (num > 90) {
    kind = '수'; //양수를 구별할 수 없다.
} else if( 60 <= num < 80){
    kind = '우'; //0은 음수가 아니다.
} else if(40<= num <60){
    kind = '미';
} else if(20<= num < 40){
    kind = '양'
} else { 
    kind = '가'
}

    console.log(kind);

//
