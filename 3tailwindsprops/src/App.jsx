import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <div className="flex flex-row flex-wrap space-x-2">
        <Card username="Lara Daniel" btnText="Click Here" img="https://images.pexels.com/photos/2343742/pexels-photo-2343742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Card username="Sebastein" btnText="Visit me" />
      </div>
    </>
  );
}

export default App;
