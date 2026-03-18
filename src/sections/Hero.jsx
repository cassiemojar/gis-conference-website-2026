import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ticket from "../images/rsvp-ticket.png";
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
    <Box
      id='Hero'
      className='hero-section'
    >
      <div className='hero-background-glow' />

      <div className='hero-content'>
        <Typography className='hero-title'>
          Innovate<span className='hero-title-highlight'>HER</span>
        </Typography>

        <div className='hero-meta'>
          <div className='hero-meta-row'>
            <CalendarMonthOutlinedIcon className='hero-meta-icon' />

            <div className='hero-date-time-text'>
              <span>March 28th, 2026</span>
              <span className='hero-event-time'>9:00 AM - 5:30 PM</span>
            </div>
          </div>

          <div className='hero-meta-row'>
            <LocationOnOutlinedIcon className='hero-meta-icon' />

            <a
              href='https://maps.ubc.ca/?code=ESC'
              target='_blank'
              rel='noopener noreferrer'
              className='hero-location-link'
            >
              Engineering Student Building @ UBC
            </a>
          </div>
        </div>

        <a
          href='https://bouncelife.com/events/699fb22a003cf40e0442de2a'
          target='_blank'
          rel='noopener noreferrer'
          className='hero-ticket-link'
        >
          <img
            src={ticket}
            alt='RSVP Now'
            className='hero-ticket-button'
          />
        </a>

        <div className='hero-status-text'>
          {timeLeft.isLive ? "Event Live" : "Countdown to Event"}
        </div>

        <div className='hero-countdown'>
          <div className='hero-time-block'>
            <span className='hero-time-number'>{timeLeft.days}</span>
            <span className='hero-time-label'>Days</span>
          </div>

          <div className='hero-time-block'>
            <span className='hero-time-number'>{timeLeft.hours}</span>
            <span className='hero-time-label'>Hours</span>
          </div>

          <div className='hero-time-block'>
            <span className='hero-time-number'>{timeLeft.minutes}</span>
            <span className='hero-time-label'>Minutes</span>
          </div>

          <div className='hero-time-block'>
            <span className='hero-time-number'>{timeLeft.seconds}</span>
            <span className='hero-time-label'>Seconds</span>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Hero;
