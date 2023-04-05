import React from "react";
import Timer from "../components/Timer";
import Countdown from "../components/Countdown";
import "../App.css";

const Home = () => {
  return (
    <div className="timerContainer">
      <Timer counter="1" />
      <Timer counter="2" />
      <Timer counter="3" />
      <Timer counter="4" />
      <Timer counter="5" />
      <Timer counter="6" />
      <Timer counter="7" />
      <Timer counter="8" />
      <Timer counter="9" />
      <Timer counter="10" />
    </div>
  );
};

export default Home;
