import { decrementCounter, incrementcounter } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementcounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
};

export default Counter;
