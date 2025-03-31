import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  function addCount() {
    setCount((d) => d + step);
    addDate();
  }

  function addDate() {
    setDate(() => {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + count);
      return newDate.toDateString();
    });
  }

  function minusCount() {
    if (count > 0) {
      setCount((d) => d - step);
    }

    minusDate();
  }

  function minusDate() {
    setDate(() => {
      const prevDate = new Date(date);
      prevDate.setDate(prevDate.getDate() - step);

      return prevDate.toDateString();
    });
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function minusStep() {
    setStep((s) => s - 1);
  }

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
        {count > 0 ? count + " days from" : ""} today is {date}
      </p>
    </div>
  );
}
