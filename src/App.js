import React from "react";
import Name from "./components/name/Name";
import Menu from "./components/menu/Menu";
import Watch from "./components/watch/Watch";

function App() {
  return (
    <div className="app">
      <div>
        <Name />
        <Menu />
      </div>
      <Watch />
    </div>
  );
}

export default App;
