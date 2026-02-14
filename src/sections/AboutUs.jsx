import "../styles/AboutUs.css";
import { Typography, Box } from "@mui/material";
import { AboutUsData } from "../data/AboutUsData.jsx";
import { useState, useEffect } from "react";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <div
      className="about-image-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="shape-top-right"></div>
      <div className="shape-bottom-left"></div>

      <div className="about-image">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`About Us ${i}`}
            className={i === current ? "slide active" : "slide"}
          />
        ))}
      </div>

      <div className="image-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <Box id="AboutUs" className="about-us">
      <div className="about-body">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-text">
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#504D8C",
                fontFamily: "Josefin Sans",
                fontWeight: "bold",
                marginBottom: "3rem",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textShadow: "4px 3px 11px rgba(255,255,255,0.6)",
              }}
            >
              ABOUT THE CONFERENCE
            </Typography>

            {AboutUsData.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Right Column */}
          <ImageSlider images={AboutUsData.images} />
        </div>
      </div>
    </Box>
  );
}
