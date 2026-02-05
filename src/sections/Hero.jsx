import "../styles/Hero.css";
import CountDown from "../components/CountDown";
import { PiCalendarDotsFill } from "react-icons/pi";
import { TiLocation } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";

function Hero() {
  return (
    <div
      className='hero'
      style={{ width: "100%", height: "100vh" }}
    >
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      <div className='decoration-lhs decoration'>
        <FaGear
          className='gear'
          style={{
            zIndex: 1,
            animation: "spin 4s linear infinite", // Apply spinning animation
          }}
        />
        <div className='vl vl-edge'></div>
        <div className='vl vl-edge1'></div>
        <div className='vl vl-edge-mid'></div>
        <div className='vl vl-center'></div>
      </div>
      <div className='decoration-rhs decoration'>
        <FaGear
          className='gear'
          style={{
            zIndex: 1,
            animation: "spin 4s linear infinite", // Apply spinning animation
          }}
        />
        <div className='vl vl-edge'></div>
        <div className='vl vl-edge1'></div>
        <div className='vl vl-edge-mid'></div>
        <div className='vl vl-center'></div>
      </div>
      <h1 className='innovate-her'>
        Innovate<span>HER</span>
      </h1>
      <div className='time-loc'>
        <div
          className='description-container'
          style={{ display: "flex", alignItems: "center" }}
        >
          <PiCalendarDotsFill
            style={{
              marginRight: "8px",
              verticalAlign: "middle",
              color: "#d0cdea",
            }}
          />
          <h4 className='description'>March 28th, 2026 8:30AM - 5:30PM</h4>
        </div>

        {/* Location */}
        <div
          className='description-container'
          style={{ display: "flex", alignItems: "center" }}
        >
          <TiLocation
            style={{
              marginRight: "8px",
              verticalAlign: "middle",
              color: "#d0cdea",
            }}
          />
          <h4
            className='description'
            style={{ lineHeight: "1.8" }}
          >
            The University of British Columbia
          </h4>
        </div>
      </div>
      <div className='rsvp-container'>
        <button>RSVP NOW</button>
      </div>
      <CountDown />
    </div>
  );
}
export default Hero;
