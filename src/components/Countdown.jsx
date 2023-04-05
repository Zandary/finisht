import React, { useState, useEffect } from "react";
import "./Timer.css";

const Countdown = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(0);
  const [customClassName, setCustomClassName] = useState();

  const startAndStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setCustomClassName("stopwatchOn");
    } else {
      setCustomClassName("stopwatchOff");
    }
  };

  return (
    <>
      <div className={customClassName + " stopwatch"} onClick={startAndStop}>
        <div className="stopwatch-buttons">
          <div className="stopwatch-time">
            <p>
              <input type="text" name="" /> : <input type="text" name="" />
            </p>
          </div>
          <i class="bi bi-stopwatch"></i>
        </div>
      </div>
    </>
  );
};

export default Countdown;
