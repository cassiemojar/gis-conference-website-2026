import { Typography, Box } from "@mui/material";
import "../styles/Keynote.css";
import { KeynoteData } from "../data/KeynoteData.jsx";

export default function Keynote() {
  return (
    <Box id="Keynote" className="keynote">
      {/* Heading */}
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "#E8C3D1",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: {xs: "2.4rem",
                    sm: "3.2rem", 
                    md: "4.5rem"},
          textShadow: "4px 4px 15px rgba(255, 255, 255, 0.3)",
        }}
      >
        KEYNOTE SPEAKERS
      </Typography>
      <div className="keynote-grid">
        {KeynoteData.speakers.map((speaker, index) => (
          <div className="keynote-block" key={index}>
            <h3 className="keynote-subheader">{speaker.type}</h3>

            <div className="keynote-card">
              {speaker.image ? (
                <img src={speaker.image} className="speaker-circle" />
              ) : (
                <div className="speaker-circle"></div>
              )}

              <h4 className="speaker-name">{speaker.name}</h4>

              <p className="speaker-desc">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}