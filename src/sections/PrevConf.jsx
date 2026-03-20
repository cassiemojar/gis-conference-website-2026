import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, Grid, Button, Modal, Backdrop, Fade } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './../styles/PrevConf.css';
import { FaMousePointer } from 'react-icons/fa';

//images
import img1 from './../images/prev-conf/2025-head.JPG';
import img2 from './../images/prev-conf/merch.jpg';
import img3 from './../images/prev-conf/discussion.jpg';
import img4 from './../images/prev-conf/booths.JPG';
import img5 from './../images/prev-conf/presenter-1.JPG';
import img6 from './../images/prev-conf/audience.JPG';
import img7 from './../images/prev-conf/discussion-2.JPG';
import img8 from './../images/prev-conf/founder-open.JPG';
import img9 from './../images/prev-conf/discussion-3.JPG';
import img10 from './../images/prev-conf/speach.JPG';

const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
];

function PrevConf() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!isPaused && !open) {
            const timer = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [currentIndex, isPaused, open]);

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <Box
            id="PrevConf"
            className="prev-conf-container"
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 1, sm: 2, md: 0 }
            }}
        >
            <Typography variant="h1" className="main-title">
                PREVIOUS CONFERENCE
            </Typography>

            <Grid
                container
                spacing={{ md: 8, lg: 15 }}
                alignItems="center"
                justifyContent="center"
                sx={{
                    px: { xs: 1, sm: 2, md: 10 },
                    maxWidth: '100%',
                    margin: '0 auto'
                }}
            >
                {/* Stats Column */}
                <Grid item xs={12} md={4}>
                    <Box sx={{
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <Box sx={{ mb: { xs: 4, md: 6 } }}>
                            <Typography className="stat-number">100+</Typography>
                            <Typography className="stat-label">ATTENDEES</Typography>
                        </Box>
                        <Box sx={{ mb: { xs: 4, md: 6 } }}>
                            <Typography className="stat-number">25+</Typography>
                            <Typography className="stat-label">SPEAKERS</Typography>
                        </Box>
                        <FaMousePointer className="mouse-pointer" style={{ zIndex: 1 }} />
                        <Box sx={{ mb: { xs: 4, md: 6 } }}>
                            <Typography className="stat-number">10+</Typography>
                            <Typography className="stat-label">WORKSHOPS</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Photo Gallery Column */}
                <Grid item xs={12} md={8}>
                    <Box
                        className={`glass-card ${isPaused ? 'is-paused' : ''}`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onClick={() => setOpen(true)}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        {images.map((img, i) => (
                            <Box
                                key={i}
                                className="carousel-image"
                                sx={{
                                    backgroundImage: `url(${img})`,
                                    opacity: i === currentIndex ? 1 : 0,
                                }}
                            />
                        ))}

                        <Box className="carousel-blend" />

                        <Box className="carousel-controls">
                            <ArrowBackIosNewIcon
                                className="nav-arrow"
                                onClick={handlePrev}
                                sx={{
                                    touchAction: 'manipulation'  // Better touch performance
                                }}
                            />
                            <ArrowForwardIosIcon
                                className="nav-arrow"
                                onClick={handleNext}
                                sx={{
                                    touchAction: 'manipulation'  // Better touch performance
                                }}
                            />
                        </Box>

                        <div className="image-dots">
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                                />
                            ))}
                        </div>
                    </Box>

                    <Box sx={{
                        textAlign: 'center',
                        mt: { xs: 4, md: 3 },
                        px: { xs: 1, sm: 0 }
                    }}>
                        <Button
                            variant="contained"
                            className="view-prev-button"
                            href="https://innovateher.vercel.app/"
                            target="_blank"
                            sx={{
                                backgroundColor: "#6363AB",
                                padding: { xs: "10px 25px", sm: "12px 35px" },
                                borderRadius: "15px",
                                fontFamily: "Josefin Sans",
                                fontWeight: 700,
                                fontSize: { xs: "1.3rem", sm: "clamp(1.5rem, 4vw, 2rem)" },
                                color: "#fff",
                                boxShadow: "0 6px 8px rgba(220,220,220,0.6)",
                                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                                minHeight: "44px", // Touch-friendly size
                                touchAction: 'manipulation',

                                "&:hover": {
                                    boxShadow: "0 0 18px rgba(255,255,255,0.8)",
                                    backgroundColor: 'hsl(240, 30%, 40%)',
                                },
                                "&:active": {
                                    transform: "translateY(-2px)",
                                }
                            }}
                        >
                            VIEW PREVIOUS
                        </Button>
                    </Box>
                </Grid>
            </Grid>

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
                        <img
                            src={images[currentIndex]}
                            alt="Full view"
                            className="full-image-style"
                        />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default PrevConf;

