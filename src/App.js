import React, { Component } from "react";
import "./App.css";
import Apihandler from "./components/apirender";
import GreetName from "./components/greet";
import NameList from "./components/mapmethod";
import NamelistIndex from "./components/Indexkey";
import Btnclick from "./components/clickevent";
import StyleSheet from "./components/stylesheet";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
import Inline from "./components/inline";

function App() {
  return (
    <div className="App">
      {/* <StyleSheet primary={true} /> */}

      {/* <UserProvider value="tanishk"></UserProvider> */}

      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <Inline */}
      {/* <NamelistIndex /> */}
      {/* <NameList /> */}
      {/* <Btnclick /> */}
      <Apihandler />
      {/* <GreetName name="tanishk" relation="myself">
        
        <p>This is myself practicing react</p>
      </GreetName>
      <GreetName name="shivani" relation="sister">
        
        <button>button</button>{" "}
      </GreetName>
      <GreetName name="kanha" relation="best friend" /> */}
    </div>
  );
}

export default App;
