import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE'; //액션 저장
const DECREASE = 'counter/DECREASE';

export const increase = () => createAction(INCREASE); //액션 함수
//return 과 같은 의미 객체를 반환 시켜준다는 의미 number의 상태값을 다루기 위한 액션함수
export const decrease = () => createAction(DECREASE);

const initialState = {
  // 초기값
  number: 0,
};
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

// const INCREASE = 'counter/INCREASE'; //액션 저장
// const DECREASE = 'counter/DECREASE';

// export const increase = () => ({ type: INCREASE }); //액션 함수
// //return 과 같은 의미 객체를 반환 시켜준다는 의미 number의 상태값을 다루기 위한 액션함수
// export const decrease = () => ({ type: DECREASE });

// const initialState = {
//   // 초기값
//   number: 0,
// };

// function counter(state = initialState, action) {
//   //counter 리덕스로 사용 될거에요. 디스패치로 리덕스 불러오고 디스패치가
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
