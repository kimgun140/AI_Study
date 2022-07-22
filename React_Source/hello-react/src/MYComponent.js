// p. 88
// const MYComponent = () => {
//   return <div>나의새롭고 멋진 컴포넌트</div>;
// };

// p.93,94
// const MYComponent = (props) => {
//   return <div>안녕하세요. 제이름은 {props.name}입니다.</div>;
// };
// MYComponent.defaultProps = {
//   name: "기본이름",
// };
//props 부모로부터 정보 전달받기위해 사용됨 {props.name} 부모파일 APP.js에서 name에 대한 정보를 받기위해서 사용

// //p. 96 비구조화 할당 문법을 통해 props 내부 값 추출하기
// const MYComponent = (props) => {
//   const { children, name } = props;
//   return (
//     <div>
//       안녕하세요, 제이름은 {name}입니다.
//       <br />
//       children값은 {children}
//       입니다
//     </div>
//   );
// };
// MYComponent.defaultProps = {
//   name: "기본이름",
// };

//p 97
// import PropsTypes from "prop-types";
// const MYComponent = ({ name, children }) => {
//   return ();
// };
// MYComponent.defaultProps = {
//   name: "기본이름",
// };
// MYComponent.PropsTypes = {
//   name: PropsTypes.string,
// };

// p.99,100
// const MYComponent1 = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제이름은111 {name}입니다.
//       <br />
//       children값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };
// MYComponent1.defaultProps = {
//   name: "기본이름",
// };
// MYComponent1.PropsTypes = {
//   name: PropsTypes.string,
//   favoriteNumber: PropsTypes.number.isRequired,
// };
// const MYComponent2 = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제이름은222 {name}입니다.
//       <br />
//       children값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };
// MYComponent2.defaultProps = {
//   name: "기본이름",
// };
// MYComponent.PropsTypes = {
//   name: PropsTypes.string,
//   favoriteNumber: PropsTypes.number.isRequired,
// };

import PropsTypes from "prop-types";
import { Component } from "react";
class MYComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제이름은 {name}입니다.
        <br />
        children값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
MYComponent.defaultProps = {
  name: "기본이름",
};
MYComponent.PropsTypes = {
  name: PropsTypes.string,
  favoriteNumber: PropsTypes.number.isRequired,
};

//p. 103 104 105 state

export default MYComponent;
// export { MYComponent1, MYComponent2 };
