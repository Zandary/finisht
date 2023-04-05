import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = (props) => {
  // state to store time
  const [time, setTime] = useState(0);
  // state to store amount
  const [amount, setAmount] = useState(0);
  // state to store className
  const [customClassName, setCustomClassName] = useState();

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  // state to check stopwatch running or not

  const [requestedAmount, setRequestedAmount] = useState();

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setCustomClassName("stopwatchOn");
    } else {
      setCustomClassName("stopwatchOff");
    }
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
    setIsRunning(false);
    setCustomClassName("stopwatch");
  };

  useEffect(() => {
    if (minutes < 15) {
      setAmount(300);
    } else {
      setAmount(minutes * 20);
    }

    if (amount === +requestedAmount) {
      setAmount(300);
    }
  }, [minutes, amount, isRunning, requestedAmount]);

  return (
    <div className={customClassName + " stopwatch"}>
      <div>
        <b>{props.counter}</b>
      </div>
      <div className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div>Montant: {amount.toString()} Ar</div>
      <div className="stopwatch-buttons">
        {/* <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button> */}
        {/* <button className="stopwatch-button" onClick={reset}> */}

        <i
          className="stopwatch-button bi bi-stop-circle customBtn"
          onClick={reset}
        ></i>
        {/* </button> */}
      </div>
      <div onClick={startAndStop}>
        {isRunning ? (
          <i className="stopwatch-button bi bi-pause-circle-fill customBtn"></i>
        ) : (
          <i class="bi bi-play-circle-fill customBtn"></i>
        )}
      </div>
    </div>
  );
};

export default Timer;
