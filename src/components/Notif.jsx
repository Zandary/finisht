import React from "react";
import addNotification from "react-push-notification";

const Notif = () => {
  const buttonClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
    });
    console.log("notif");
  };

  return (
    <div className="page">
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
    </div>
  );
};

export default Notif;
