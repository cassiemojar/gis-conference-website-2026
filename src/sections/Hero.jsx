import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "../styles/Hero.css";

const EVENT_START = new Date("2026-03-28T09:00:00-07:00").getTime();

function getTimeRemaining() {
  const now = Date.now();
  const difference = EVENT_START - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isLive: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isLive: false,
  };
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box id="Hero" className="hero-section">
      <div className="hero-background-glow" />

      <div className="hero-content">
        <Typography className="hero-title">
          Innovate<span className="hero-title-highlight">HER</span>
        </Typography>

        <div className="hero-meta">
          <div className="hero-meta-row">
            <EventOutlinedIcon className="hero-meta-icon" />
            <span>March 28th, 2026</span>
          </div>

          <div className="hero-meta-row">
            <LocationOnOutlinedIcon className="hero-meta-icon" />
            <span>Engineering Student Building @ UBC</span>
          </div>
        </div>

        <button type="button" className="hero-rsvp-button">
          RSVP NOW
        </button>

        <div className="hero-status-text">
          {timeLeft.isLive ? "Event Live" : "Countdown to Event"}
        </div>

        <div className="hero-countdown">
          <div className="hero-time-block">
            <span className="hero-time-number">{timeLeft.days}</span>
            <span className="hero-time-label">Days</span>
          </div>

          <div className="hero-time-block">
            <span className="hero-time-number">{timeLeft.hours}</span>
            <span className="hero-time-label">Hours</span>
          </div>

          <div className="hero-time-block">
            <span className="hero-time-number">{timeLeft.minutes}</span>
            <span className="hero-time-label">Minutes</span>
          </div>

          <div className="hero-time-block">
            <span className="hero-time-number">{timeLeft.seconds}</span>
            <span className="hero-time-label">Seconds</span>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Hero;