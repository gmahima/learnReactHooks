import React, { useState } from "react";

const Child = () => {
  const [value, setValue] = useState(0);
  const [boolVal, setBoolVal] = useState(false);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const toggleBoolVal = () => {
    setBoolVal(!boolVal);
  };
  return [
    <h1>{value}</h1>,
    <button onClick={handleIncrement}>Increment</button>,
    <h1>{String(boolVal)}</h1>,
    <button onClick={toggleBoolVal}>Toggle</button>
  ];
};
export default Child;
