import "../styles/Agenda.css";
import { timelineData } from "../data/timelineData";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";

const AgendaItem = ({ time, name, location, isLast }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      className={isMobile ? "agenda-mobile" : "agenda-grid"}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div className='event-time'>
        <p className='p1'>{time}</p>
      </div>
      <div className='rhs-group'>
        <div className='separator'>
          <div className='separator-circle'></div>
          {!isLast && (
            <div
              className={
                isMobile
                  ? "separator-vert-line separator-vert-line-mobile"
                  : "separator-vert-line"
              }
            ></div>
          )}
          <div className='separator-horiz-line'></div>
        </div>
        <div className='name-loc-card'>
          <p className='p1 event-name'>{name}</p>
          <p className='p1 loc'>@ {location}</p>
        </div>
      </div>
    </Box>
  );
};

export default function Agenda() {
  return (
    <div className='agenda'>
      <Typography
        variant='h4'
        sx={{
          textAlign: "center",
          color: "#D0CDEA",
          fontFamily: "Josefin Sans",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
          animation: "slideIn 1s ease-out", // Apply slide-in animation
        }}
      >
        AGENDA
      </Typography>
      <div className='agenda-body'>
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
