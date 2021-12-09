import React from "react";

const clickHandler = () => {
  function output() {
    console.log("clicked");
  }
  return <button onClick={output}>CLICK</button>;
};

export default clickHandler;
