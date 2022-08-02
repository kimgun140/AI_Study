import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const insert = createAction(CHANGE_INPUT, (input) => input);

let id = 3; //
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배구익',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);
export default todos;

// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//     [INSERT]: (state, action) => ({
//       ...state,
//       todos: state.todos.concat(action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       ),
//     }),
//     [REMOVE]: (state, action) => ({
//       ...state,
//       todos: state.todosfilter((todo) => todo.id !== action.payload),
//     }),
//   },
//   initialState
// );

// export default todos;
// const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값을 변경함
// const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
// const TOGGLE = 'todos/TOGGLE'; //todo를 체그/츠크 해제함
// const REMOVE = 'todos/REMOVE'; //todo를 제거함

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input, // input: input
// });
// let id = 3; // insert가 호출될 떄마다 1씩 더해집니다.
// export const insert = (text) => ({
//   //액션 객체 반환
//   type: INSERT,
//   todo: {
//     id: id++,
//     text, //text:text 라는 의미 text 라는 변수르 통해서 값을 전달/ 파라매터를 총해서  값을 전달받음
//     done: false, //이름이 다르면 false
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// const initialState = {
//   input: '',
//   todos: [
//     {
//       id: 1,
//       text: '리덕스 기초 배우기',
//       done: true,
//     },
//     {
//       id: 2,
//       text: '리액트와 리덕스 사용하기',
//       done: false,
//     },
//   ],
// };

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// export default todos;
