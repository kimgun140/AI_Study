import { useReducer, useState } from "react";

const Counter = () => {
  function nodabs(state, action) {
    if (action.type === "INCREMENT") {
      return { value: state.value + 1 };
    } else if (action.type === "DECREMENT") {
      return { value: state.value - 1 };
    } else if (action.type === "MULTIPLE") {
      return { value: state.value * 2 };
    } else if (action.type === "DEVIDE") {
      return { value: state.value / 2 };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(nodabs, { value: 1 });
  //   const [state, dispatch] = useReducer(nodabs, { value: 0 });
  //   function nodabs(state, action) {
  //     if (action.type === "INCREMENT") {
  //       return { value: state.value + 1 };
  //     } else if (action.type === "DECREMENT") {
  //       return { value: state.value - 1 };
  //     } else {
  //       return state;
  //     }
  //   }
  //   const onClick1 = () => setValue(value + 1);
  //   const onClick2 = () => setValue(value - 1);
  //   const onClick3 = () => setValue(value * 2);
  //   const onClick4 = () => setValue(value / 2);

  return (
    <div>
      <p>
        카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "MULTIPLE" })}>*2</button>
      <button onClick={() => dispatch({ type: "DEVIDE" })}>/2</button>
    </div>
  );
};

export default Counter;
