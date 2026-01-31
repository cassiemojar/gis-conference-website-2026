import "../styles/Agenda.css";
import { timelineData } from "../data/timelineData";
import { Typography, Box } from "@mui/material";

const AgendaItem = ({ time, name, location, isLast }) => {
  return (
    <>
      <div className='event-time'>
        <p className='p1'>{time}</p>
      </div>
      <div className='separator'>
        <div className='separator-circle'></div>
        {!isLast && <div className='separator-vert-line'></div>}
        <div className='separator-horiz-line'></div>
      </div>
      <div className='name-loc-card'>
        <p className='p1 event-name'>{name}</p>
        <p className='p1 loc'>@ {location}</p>
      </div>
    </>
  );
};

export default function Agenda() {
  return (
    <div className='agenda'>
      {/* <h2>AGENDA</h2> */}
      <Typography
        variant='h4'
        sx={{
          textAlign: "center",
          color: "#E8C3D1",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
          animation: "slideIn 1s ease-out", // Apply slide-in animation
        }}
      >
        AGENDA
      </Typography>
      <div className='agenda-grid'>
        {timelineData.map((data, index) => (
          <AgendaItem
            key={`timeline_${index}`}
            time={data.time}
            name={data.name}
            location={data.location}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
