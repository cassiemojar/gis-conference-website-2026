import React from 'react';
import './../styles/TheTeam.css';
import BioDialog from '../components/BioDialog.jsx';
import { bioData } from '../data/TeamData.js';
import Typography from '@mui/material/Typography';

export default function Slider() {
    const [open, setOpen] = React.useState(false);
    const [bio, setBio] = React.useState(bioData[0]);

    const handleBioImgClick = (data) => {
        setOpen(true);
        setBio(data);
    };

    return (
        <div className="the-team">
            <Typography
                variant="h4"
                fontFamily="'Josefin Sans', sans-serif"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    color: '#E8C3D1',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    textAlign: 'center',
                    animation: "slideInTitle 1s ease-out forwards"
                }}>
                OUR TEAM
            </Typography>
            <div className="slider">
                <div className="imgs-slide">
                    {bioData.map((person, index) => (
                        <img
                            key={`${person.name}-${index}`}
                            src={person.src}
                            alt={person.name}
                            onClick={() => handleBioImgClick(person)}
                        />
                    ))}
                </div>
                <div className="imgs-slide">
                    {bioData.map((person, index) => (
                        <img
                            key={`loop-${person.name}-${index}`}
                            src={person.src}
                            alt={person.name}
                            onClick={() => handleBioImgClick(person)}
                        />
                    ))}
                </div>
            </div>
            <BioDialog open={open} setOpen={setOpen} bio={bio} />
        </div>
    );
}