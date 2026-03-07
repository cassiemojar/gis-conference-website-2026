import { useEffect, useState } from "react";
import "../styles/CountDown.css";

const TARGETDATE = new Date("2026-03-28T09:00:00-07:00");

// REFERENCE: https://www.youtube.com/watch?v=rzeR8ikmLFU&t=1225s
const getTimeRemaining = () => {
  const timeLeft = TARGETDATE - new Date(); // milliseconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return {
    Days: { unitOfTime: "Days", amount: days },
    Hours: { unitOfTime: "Hours", amount: hours },
    Minutes: { unitOfTime: "Minutes", amount: minutes },
    Seconds: { unitOfTime: "Seconds", amount: seconds },
  };
};

function CountDown() {
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className='countdown-container'>
      {Object.entries(timeRemaining).map((time) => {
        return (
          <div className='unit'>
            <p className='time-value'>{time[1].amount}</p>
            <p className='p2 time-label'>{time[1].unitOfTime}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CountDown;
