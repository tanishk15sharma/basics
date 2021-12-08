import React, { Component } from "react";
import "./App.css";
import GreetName from "./components/greet";
function App() {
  return (
    <div className="App">
      <GreetName name="tanishk" />
      <GreetName name="suraj " />
      <GreetName name="kanha" />
    </div>
  );
}

export default App;
