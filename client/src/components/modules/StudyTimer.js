import React, { useState, useEffect } from 'react';
import "./StudyTimer.css";
import { Link } from "@reach/router";

const StudyTimer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if(seconds+1 === 60) {
          setSeconds(seconds=> 0);
          setMinutes(minutes => minutes+1)
        }
        else {
          setSeconds(seconds => seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {minutes}m  {seconds}s
      </div>
      <div className="timeleft">
        {props.getTimeLeft(minutes, seconds)}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        {/* <button className="button" onClick={reset}>
          Reset
        </button> */}
        <button className = "button" onClick = {event =>  window.location.href='/finish'}>Finish</button>
        <div className = 'break' />
        <a href="/duck" target="_blank" > <button className = 'StudyDucky'> </button></a>
        <a href = '/tagyourself' target = '_blank'><button className = 'Snake'></button></a>
      </div>
    </div>
  );
};

export default StudyTimer;