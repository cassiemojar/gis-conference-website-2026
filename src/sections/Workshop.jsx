import "../styles/Workshop.css";
import { workshopData } from "../data/WorkshopData.jsx";

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
  return (
    <div id="Workshops" className="workshop-section">
      <div className="workshop-section-inner">
        <WorkshopCard workshop={workshopData[0]} />
      </div>
    </div>
  );
}
