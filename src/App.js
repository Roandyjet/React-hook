import React, { useState } from "react";
import "./App.css";

// ______________________Increase Decrease number________________

const App = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  // ________________________show current time___________________
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function showTime() {
    let now = new Date().toLocaleTimeString();
    setTime(now);
  }

  setInterval(showTime, 1000);

  // ____________________________________________________________

  return (
    <div>
      <h1>{count}</h1>
      <button className="count" onClick={increase}>
        +
      </button>
      <button className="count" onClick={decrease}>
        -
      </button>
      <div className="container">
        <h2>{time}</h2>
        <button className="getTime" onClick={showTime}>
          Show time
        </button>
      </div>
    </div>
  );
};

export default App;
