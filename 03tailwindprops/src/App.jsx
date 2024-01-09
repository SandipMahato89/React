import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import CardCpy from "./components/CardCpy";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "sandip",
    age : 23
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="sandip"  />
      <CardCpy someObj={myObj} />
    </>
  );
}

export default App;

/*
devui.io
*/
