import { useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../styles/Panelist.css";
import { panelistData } from "../data/PanelistData";

function Panelist() {
  const tabNames = Object.keys(panelistData);
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const shellRef = useRef(null);

  const activePanel = useMemo(() => panelistData[activeTab], [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFlippedIndex(null);
    shellRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCardClick = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box id="Panelist" className="panelist-section" onClick={() => setFlippedIndex(null)}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "#E8C3D1",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "36px",
          fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.5rem" },
          textShadow: "4px 4px 15px rgba(255, 255, 255, 0.3)",
        }}
      >
        STEAM Panelists
      </Typography>

      <div className="panelist-shell" ref={shellRef} onClick={(e) => e.stopPropagation()}>
        <div className="panelist-header-row">
          <p className="panelist-subheading">
            <span className="panelist-subheading-icon">{activePanel.icon}</span>
            <span className="panelist-subheading-text">
              <strong>{activePanel.panelTitle}</strong> @ {activePanel.location},{" "}Panelists:
            </span>
          </p>
        </div>

        <div className="panelist-grid">
          {activePanel.panelists.map((person, index) => {
            const isFlipped = flippedIndex === index;
            return (
              <div
                className={`panelist-card ${isFlipped ? "is-flipped" : ""}`}
                key={`${activeTab}-${index}`}
                onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
              >
                <div className="panelist-avatar">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="panelist-avatar-img" />
                  ) : (
                    <span>{person.initials}</span>
                  )}
                </div>

                <h3 className="panelist-name">{person.name}</h3>

                <div className="panelist-info-area">
                  <div className="panelist-default-content">
                    <p className="panelist-role">{person.role}</p>
                  </div>

                  <div className="panelist-hover-content">
                    <p className="panelist-role">{person.role}</p>
                    <p className="panelist-bio">{person.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="panelist-tabs">
          {tabNames.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`panelist-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default Panelist;