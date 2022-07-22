import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // 생성자 constructor
    super(props); //자식이 부모 컴포넌트에서 생성자를 호출하는거
    //statte초기값 설정하기
    this.state = {
      //counter 객체의 속성을 바꿔주는게 state의 역할이다.
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onclick을  통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //이벤트를 사용할 때는 화살표 함수를 사용한다.
            //this.setState를 사용하여 state의 값을 변경한다.
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

//p. 108

// class counter extends Component{
//     state = {
//         number: 0,
//         fixedNumber: 0
//     };
//     render(){
//         const {number,fixedNumber} = this.state;
//         return ()
//     }
// }

//p. 109

export default Counter;
