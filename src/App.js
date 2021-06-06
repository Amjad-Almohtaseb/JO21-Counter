import { useState } from "react";
import "./App.css";
import DecrementButton from "./components/DecrementButton";

// Components
import IncrementButton from "./components/IncrementButton";

const whatever = 6;

function App() {
  const [counter, setCounter] = useState(0);

  let varCounter = counter * 5;
  console.log("hiiiiiiiii varCounter", varCounter);
  console.log("whatever", whatever);
  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <IncrementButton increment={increment} varCounter={varCounter} />
      <p className="inline">state: {counter}</p>
      <p className="inline">variable: {varCounter}</p>
      <DecrementButton decrement={decrement} />
      <input onChange={(event) => setCounter(event.target.value)} />
    </div>
  );
}

export default App;
