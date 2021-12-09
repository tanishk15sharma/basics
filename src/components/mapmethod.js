import React from "react";

const DisplayName = () => {
  const names = ["tanishk", "anushka", "kanha", "harsh"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};

export default DisplayName;
