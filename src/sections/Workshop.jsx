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
        &ldquo;{topic}&rdquo; <span className="workshop-led">lead by:</span>
      </p>
      <div className="workshop-card-body">
        <div className="workshop-card-body-inner">
          <div
            className={`workshop-card-dummy-photo ${!imageUrl ? "workshop-card-dummy-photo--placeholder" : ""}`}
          >
            {imageUrl && <img src={imageUrl} alt="" />}
          </div>
          <div className="workshop-card-info">
          <p className="workshop-card-name">
            {speakerName}{pronouns ? ` (${pronouns})` : ""}
          </p>
          <p className="workshop-card-role">{role}</p>
          <p className="workshop-card-focus">{focusAreas}</p>
        </div>
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
      <h2 className="workshop-title">Workshops</h2>
      <div className="workshop-intro">
        <ul>
          <li>Each category (Science, Arts & Math, Technology, Engineering) has 2 workshops. Attendees are welcome to attend any two workshops of their choice.</li>
          <li>During lunch, attendees are encouraged to go to our career/networking fair with booths from sponsors & partners which will be set up in Location TBD.</li>
        </ul>
      </div>
      <div className="workshop-content-box">
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
    </div>
  );
}
