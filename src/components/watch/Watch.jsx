import React, { useEffect, useState, useRef } from "react";
import "./Watch.css";

function Watch() {
  const deg = 6;
  const hrRef = useRef(null);
  const mnRef = useRef(null);
  const scRef = useRef(null);
  const [period, setPeriod] = useState("AM");

  useEffect(() => {
    const updateClock = () => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hrRef.current.style.transform = `rotate(${hh + mm / 12}deg)`;
      mnRef.current.style.transform = `rotate(${mm}deg)`;
      scRef.current.style.transform = `rotate(${ss}deg)`;

      setPeriod(day.getHours() < 12 ? "AM" : "PM");
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
        <div key={num} className={`number number-${num}`}>
          {num}
        </div>
      ))}

      <div className="hour">
        <div className="hr" ref={hrRef}></div>
      </div>

      <div className="min">
        <div className="mn" ref={mnRef}></div>
      </div>

      <div className="sec">
        <div className="sc" ref={scRef}></div>
      </div>

      <div className="period">{period}</div>
    </div>
  );
}

export default Watch;
