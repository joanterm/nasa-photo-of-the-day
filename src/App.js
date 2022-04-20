import React from "react";
import "./App.css";
import Title from "./Components/Title"
import Info from "./Components/Info"

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Title />
      <Info />
    </div>
  );
}

export default App;
