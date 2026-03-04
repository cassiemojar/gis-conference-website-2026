import { useState } from "react";
import "../styles/Workshop.css";
import { WORKSHOP_CATEGORIES, workshopData } from "../data/WorkshopData.jsx";

function WorkshopCard({ workshop }) {
  const { time, topic, speakerName, pronouns, role, focusAreas, imageUrl } =
    workshop;
  return (
    <div className="workshop-card">
      <p className="workshop-card-time">{time}</p>
      <p className="workshop-card-topic">
        &ldquo;{topic}&rdquo; led by:
      </p>
      <div className="workshop-card-body">
        <div
          className={`workshop-card-dummy-photo ${!imageUrl ? "workshop-card-dummy-photo--placeholder" : ""}`}
        >
          {imageUrl && <img src={imageUrl} alt="" />}
        </div>
        <div className="workshop-card-info">
          <p className="workshop-card-name">
            {speakerName} ({pronouns})
          </p>
          <p className="workshop-card-role">{role}</p>
          <p className="workshop-card-focus">{focusAreas}</p>
        </div>
      </div>
    </div>
  );
}

export default function Workshop() {
  const [activeCategory, setActiveCategory] = useState("science");
  const filtered = workshopData.filter((w) => w.category === activeCategory);

  return (
    <div id="Workshops" className="workshop-section">
      <div className="workshop-section-inner">
        {filtered.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
      <nav className="workshop-nav-bar" aria-label="Workshop categories">
        {WORKSHOP_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={activeCategory === cat.id ? "workshop-nav-item workshop-nav-item--active" : "workshop-nav-item"}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
