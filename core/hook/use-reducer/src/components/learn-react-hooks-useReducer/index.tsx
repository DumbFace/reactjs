import React, { useReducer, useState } from "react";
import { countReducer } from "./my-count-reducer/countReducer";

export default function Demo() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  const [value, setValue] = useState<number>(1);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    console.log("value: ", value);

    setValue(value);
  };
  return (
    <div className="tutorial">
      <div>Count: {state.count}</div>
      <input value={value} onChange={handleChangeValue}></input>
      <button onClick={() => dispatch({ payload: value, type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ payload: value, type: "decrement" })}>
        Increment
      </button>
    </div>
  );
}
