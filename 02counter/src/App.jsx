import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let value = 12;
  let [counter, setCounter] = useState(value);

  const addValue = () => {
    // counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log("clicked", counter);
  };

  const subValue = () => {
    // counter = counter - 1;
    setCounter(counter - 1);
    console.log("clicked", counter);
  };
  return (
    <>
      <h1>Learning React</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add</button>

      <button onClick={subValue}>Subtract</button>
      <h3>Footer {counter}</h3>
    </>
  );
}

export default App;
