import React from "react";

const greetName = (props) => {
  return (
    <div>
      {props.children}
      <h1>
        hello {props.name} is {props.relation}{" "}
      </h1>
    </div>
  );
};

export default greetName;
