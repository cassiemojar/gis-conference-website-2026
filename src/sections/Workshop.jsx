import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../styles/Workshop.css";
import { workshopData } from "../data/WorkshopData";

function Workshop() {
  const tabNames = Object.keys(workshopData);
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const activeCategory = useMemo(() => workshopData[activeTab], [activeTab]);

  return (
    <Box id="Workshop" className="workshop-section">
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "#EFCCFF",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "28px",
          fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.5rem" },
          textShadow: "4px 4px 15px rgba(255, 255, 255, 0.28)",
        }}
      >
        WORKSHOPS
      </Typography>

      <div className="workshop-intro">
        <ul>
          <li>
            Each category (Science, Arts & Math, Technology, Engineering) has 2
            workshops. Attendees are welcome to attend any two workshops of
            their choice.
          </li>
          <li>
            During lunch, attendees are encouraged to go to our career and
            networking fair with booths from sponsors and partners, which will
            be set up in Location TBD.
          </li>
        </ul>
      </div>

      <div className="workshop-shell">
        <div className="workshop-grid">
          {activeCategory.workshops.map((item, index) => (
            <div className="workshop-card" key={`${activeTab}-${index}`}>
              <p className="workshop-time">{item.time}</p>
              <p className="workshop-topic-line">
                <strong>{item.topic}</strong> <span>led by:</span>
              </p>

              <div className="workshop-avatar">
                <span>{item.initials}</span>
              </div>

              <h3 className="workshop-name">{item.name}</h3>

              <div className="workshop-details-area">
                <div className="workshop-default-content">
                  <p className="workshop-role">{item.role}</p>
                </div>

                <div className="workshop-hover-content">
                  <p className="workshop-role workshop-role-hover">
                    {item.role}
                  </p>
                  <p className="workshop-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="workshop-tabs">
          {tabNames.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`workshop-tab ${activeTab === tab ? "active" : ""}`}
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

export default Workshop;