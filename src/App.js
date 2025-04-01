import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((d) => d + step);
  }

  function minusCount() {
    // if (count > 0) {
    setCount((d) => d - step);
    // }
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function minusStep() {
    setStep((s) => s - 1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={minusStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={addStep}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={minusCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={addCount}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day(s) from today is `
          : count < 0
          ? `${count} day(s) ago is `
          : ""}
        {date.toDateString()}
      </p>
    </div>
  );
}
