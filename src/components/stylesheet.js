import React from "react";
import "./style.css";

function StylingSent(props) {
  let classStyle = props.primary ? "heading" : "";
  return (
    <div>
      <h1 className={`${classStyle}  font `}>
        Hi I am tanishk Learning javascript
      </h1>
      <h2 className="sub">I am learning javascript </h2>
    </div>
  );
}

export default StylingSent;
