import React, { useReducer } from "react";
import "./styles.css";
const initialState = {
  count: 0
};
console.log(initialState.count);

const reducer = (state, action) => {
  switch (action.type) {
    case "Increament":
      return { count: state.count + 1 };
    case "Decreament":
      return { count: state.count - 1 };
    case "Reset":
      return { count: action.payload };
    default:
      throw Error("error");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <button
        className="button-3"
        onClick={() => {
          dispatch({ type: "Reset", payload: 0 });
        }}
      >
        Reset
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "Increament" });
        }}
      >
        Increament
      </button>
      <h1>{state.count}</h1>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "Decreament" });
        }}
      >
        Decreament
      </button>
    </div>
  );
};
export default App;
