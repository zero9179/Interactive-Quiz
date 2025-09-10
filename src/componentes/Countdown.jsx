import React, { useState, useEffect } from "react";

export default function Countdown({ minutes,setTestEnd }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    let min = minutes - 1;
    let sec = 60; //60

    function countdown() {
      if (sec === 0 && min === 0) {
        clearInterval(timer);
        setTimeLeft("00:00");
        return;
      }

      sec -= 1;
      if (sec <= 0 && min > 0) {
        min -= 1;
        sec = 60;
      }

      const formatTime = `${String(min).padStart(2, "0")}:${String(sec).padStart(
        2,
        "0"
      )}`;
      setTestEnd(formatTime)
      setTimeLeft(formatTime);
    }

    const timer = setInterval(countdown, 1000);

    // cleanup when component unmounts
    return () => clearInterval(timer);
  }, [minutes]);

  return (
    <div className="text-xl font-bold">
      {timeLeft || `${String(minutes).padStart(2, "0")}:00`}
    </div>
  );
}
