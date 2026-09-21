import { decrement, increment, reset } from "@/redux/countSlice";
import { getCurrentCounter } from "@/redux/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector(getCurrentCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
      dispatch(increment());
  };

   const handleDecrement = () => {
      dispatch(decrement());
   };
   const handleReset = () => {
      dispatch(reset());
  };
  
  return (
    <section>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};

export default Counter;