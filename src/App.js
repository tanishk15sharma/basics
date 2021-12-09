import React, { Component } from "react";
import "./App.css";
// import GreetName from "./components/greet";
import NameList from "./components/mapmethod";

// import Btnclick from "./components/clickevent";
function App() {
  return (
    <div className="App">
      <NameList />
      {/* <Btnclick /> */}
      {/* <GreetName name="tanishk" relation="myself">
        {" "}
        <p>This is myself practicing react</p>
      </GreetName>
      <GreetName name="shivani" relation="sister">
        {" "}
        <button>button</button>{" "}
      </GreetName>
      <GreetName name="kanha" relation="best friend" /> */}
    </div>
  );
}

export default App;
