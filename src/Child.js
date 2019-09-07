import React, { useState, useEffect, useRef } from "react";

const Child = () => {
  const [value, setValue] = useState(0);

  const handler = () => {
    setValue(value + 1);
  };
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  const handle = event => {
    handlerRef.current(event);
  };
  useEffect(() => console.log(value), [value]);
  useEffect(() => {
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return [
    <h1>{value}</h1>
    //<button onClick={handleIncrement}>Increment</button>
  ];
};
export default Child;
