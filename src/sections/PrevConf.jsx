import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Button, Modal, Backdrop, Fade } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './../styles/PrevConf.css';

const images = [
    "https://via.placeholder.com/800x500/8683C6/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/800x500/A5A2D9/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/800x500/6C63FF/FFFFFF?text=Slide+3"
];

function PrevConf() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [open, setOpen] = useState(false);

    // Auto-slide logic
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                handleNext();
            }, 3000); // Changes every 3 seconds
            return () => clearInterval(timer);
        }
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <Box id="PrevConf" className="prev-conf-container">
            <Typography variant="h1" className="section-title">PREVIOUS CONFERENCE</Typography>

            <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ px: { xs: 2, md: 10 } }}>
                {/* Stats Column */}
                <Grid item xs={12} md={4}>
                    <Box className="stats-column">
                        <Box sx={{ mb: 4 }}><Typography className="stat-number">1000+</Typography><Typography className="stat-label">ATTENDEES</Typography></Box>
                        <Box sx={{ mb: 4 }}><Typography className="stat-number">50+</Typography><Typography className="stat-label">SPEAKERS</Typography></Box>
                        <Box sx={{ mb: 4 }}><Typography className="stat-number">20+</Typography><Typography className="stat-label">WORKSHOPS</Typography></Box>
                    </Box>
                </Grid>

                {/* Photo Recap Box */}
                <Grid item xs={12} md={8}>
                    <Box 
                        className="glass-card"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onClick={() => setOpen(true)}
                        style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'zoom-in' }}
                    >
                        <Box className="carousel-overlay">
                             <Typography className="recap-overlay-text">Photo Recap</Typography>
                        </Box>
                        
                        <Box className="carousel-controls" onClick={(e) => e.stopPropagation()}>
                            <ArrowBackIosNewIcon className="nav-arrow" onClick={handlePrev} />
                            <ArrowForwardIosIcon className="nav-arrow" onClick={handleNext} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* View Previous Button */}
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Button 
                    variant="contained" 
                    className="view-prev-button"
                    href="https://innovateher.vercel.app/"
                    target="_blank"
                >
                    VIEW PREVIOUS
                </Button>
            </Box>

            {/* Full Screen Modal */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <Box className="modal-content" onClick={() => setOpen(false)}>
                        <img src={images[currentIndex]} alt="Full view" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }} />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default PrevConf;
