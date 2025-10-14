// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1>🧮 Redux Counter</h1>
      <h2>{count}</h2>
      <div>
        <button style={styles.button} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button style={styles.button} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
  },
};

export default App;
