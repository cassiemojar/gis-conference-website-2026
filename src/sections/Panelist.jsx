import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../styles/Panelist.css";
import { panelistData } from "../data/PanelistData";

function Panelist() {
  const tabNames = Object.keys(panelistData);
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const activePanel = useMemo(() => panelistData[activeTab], [activeTab]);

  return (
    <Box id="Panelist" className="panelist-section">
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "#E8C3D1",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "36px",
          fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.5rem" },
          textShadow: "4px 4px 15px rgba(1, 1, 1, 0.4)",
        }}
      >
        STEAM Panelists
      </Typography>

      <div className="panelist-shell">
        <div className="panelist-header-row">
          <p className="panelist-subheading">
            <span className="panelist-subheading-icon">{activePanel.icon}</span>
            <span className="panelist-subheading-text">
              <strong>{activePanel.panelTitle}</strong> @ {activePanel.location},
              {" "}Panelists:
            </span>
          </p>
        </div>

        <div className="panelist-grid">
          {activePanel.panelists.map((person, index) => (
            <div className="panelist-card" key={`${activeTab}-${index}`}>
              <div className="panelist-avatar">
                <span>{person.initials}</span>
              </div>

              <h3 className="panelist-name">{person.name}</h3>

              <div className="panelist-info-area">
                <p className="panelist-role">{person.role}</p>
                <p className="panelist-bio">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="panelist-tabs">
          {tabNames.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`panelist-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
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