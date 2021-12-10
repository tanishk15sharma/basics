import React from "react";

function namelist() {
  const names = [
    "tanishk",
    "siddhart",
    "myself",
    "indore",
    "tanishk",
    "javascript",
    "siddhart",
  ];
  return names.map((name, index) => (
    <h2 key={index}>
      {" "}
      {index} {name}
    </h2>
  ));
}

export default namelist;
