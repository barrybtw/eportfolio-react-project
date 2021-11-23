import React from "react";
import ReactDom from "react-dom";

//RESOURCES
import "./index.css";

//JSX
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="bg-white font-bold text-7xl relative">
        Hello world im barry the great leader
      </h1>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
