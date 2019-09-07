import React, { useState } from "react";

const Child = ({ children = "hahaha", maxCharCount = 20 }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const text = children;
  console.log(children);
  const resString = isTruncated ? text.slice(0, maxCharCount) : text;
  const toggleIsTruncated = () => setIsTruncated(!isTruncated);
  return [
    <p>{resString}</p>,
    <button onClick={toggleIsTruncated}>Read more</button>
  ];
};
const ReadMore = () => {
  return (
    <Child>
      whatever something blah blahblahblahblahblahblahblahblahblahblahblah"
    </Child>
  );
};
export default ReadMore;
