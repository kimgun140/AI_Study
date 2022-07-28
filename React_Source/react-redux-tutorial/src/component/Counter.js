const Counter = ({ number, onIncrease, onDecrease, handleTop }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={handleTop}>up</button>
      </div>
    </div>
  );
};

export default Counter;
