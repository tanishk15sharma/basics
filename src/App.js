import React, { Component } from "react";
import "./App.css";
// import GreetName from "./components/greet";
// import SubscribeMsg from "./components/subscribe";
import Btnclick from "./components/btnclick";
function App() {
  return (
    <div className="App">
      <Btnclick />
      {/* <GreetName name="tanishk" relation="myself">
        {" "}
        <p>This is myself practicing react</p>
      </GreetName>
      <GreetName name="shivani" relation="sister">
        {" "}
        <button>button</button>{" "}
      </GreetName>
      <GreetName name="kanha" relation="best friend" /> */}
      {/* <SubscribeMsg /> */}
    </div>
  );
}

export default App;
