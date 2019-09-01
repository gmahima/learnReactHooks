import React, { useState } from "react";

const Child = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default Child;
