import React from "react";

const DisplayName = () => {
  const names = ["tanishk", "anushka", "kanha", "harsh"];
  const nameList = names.map((name) => <name name={name}></name>);
  return <div> {names} </div>;
};

export default DisplayName;
