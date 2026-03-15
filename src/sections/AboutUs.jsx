import "../styles/AboutUs.css";
import { Typography, Box } from "@mui/material";
import { Modal, Backdrop, Fade } from "@mui/material";
import { AboutUsData } from "../data/AboutUsData.jsx";
import { useState, useEffect } from "react";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (paused || open) return;
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

      <div className="about-image" onClick={() => setOpen(true)}>
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
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
          />
        ))}
      </div>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          onClick={() => setOpen(false)}
          sx={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.9)",
            cursor: "zoom-out",
          }}
        >
          <img
            src={images[current]}
            alt="Full view"
            style={{
              maxWidth: "90%",
              maxHeight: "85vh",
              borderRadius: "10px",
              border: "3px solid white",
              textShadow: "4px 4px 15px rgba(255, 255, 255, 0.3)",
            }}
          />
        </Box>
      </Fade>
    </Modal>
  </div>
  );
}

function AboutUs() {
  return (
    <Box id="About" className="about-us">
      <div className="about-body">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-text">
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                color: "#504D8C",
                fontFamily: "Josefin Sans",
                fontWeight: "bold",
                marginBottom: "40px",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                textShadow: "4px 3px 11px rgba(255,255,255,0.6)",
                animation: "slideIn 1s ease-out"
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

export default AboutUs;