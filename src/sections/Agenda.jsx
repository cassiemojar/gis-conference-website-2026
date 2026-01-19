import "../styles/Agenda.css";
import { timelineData } from "../data/timelineData";

const AgendaItem = ({ time, name, location }) => {
  return (
    <div className='agenda-item'>
      <div className='event-time'>
        <p className='p1'>{time}</p>
      </div>
      <div className='separator'>
        {/* vertical line: lhs */}
        <div className='lhs'>
          <div className='point'></div>
        </div>
        <div className='rhs'></div>
      </div>
      <div className='name-loc'>
        <div className='event-name-container'>
          <p className='p1 event-name'>{name}</p>
        </div>
        <div className='at'>@</div>
        <div className='loc'>
          <p className='p1'>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default function Agenda() {
  return (
    <div className='agenda'>
      <div className='agenda-section'>
        <h2>AGENDA</h2>
        {timelineData.map((data, index) => (
          <AgendaItem
            key={`timeline_${index}`}
            time={data.time}
            name={data.name}
            location={data.location}
          />
        ))}
      </div>
    </div>
  );
}
