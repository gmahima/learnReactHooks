import React, { useState } from "react";

const Child = ({ children = "hahaha", maxCharCount = 20 }) => {
  const text = children;
  console.log(children);
  const resString = text.slice(0, maxCharCount);
  return [<p>{resString}</p>, <span>Read more</span>];
};
const ReadMore = () => {
  return (
    <Child>
      whatever something blah blahblahblahblahblahblahblahblahblahblahblah"
    </Child>
  );
};
export default ReadMore;
