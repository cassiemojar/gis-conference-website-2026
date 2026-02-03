import * as React from 'react';
import { Container, Box, Typography, Link, Grid, Stack } from '@mui/material';
import ig from './../images/logo-ig.png';
import fb from './../images/logo-fb.png';
import yt from './../images/logo-yt.png';
import linkedin from './../images/logo-linkedin.png';
import whiteLogo from './../images/white-gis-logo.png';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 8 }}>
            <Container maxWidth={false} sx={{ maxWidth: 1100 }}>
                {/* TOP ROW: Contact and Socials */}
                <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between" sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.2rem' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            💌 Email us at{' '}
                            <Link href="mailto:ubc.conference@girlsinsteam.org" color="inherit" sx={{ ml: 0.5, textDecoration: 'underline', mr: 0.5 }}>
                                ubc.conference@girlsinsteam.org
                            </Link>{' '}
                            if you have any questions!
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 4, md: 0 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, letterSpacing: '0.05rem' }}>
                            SEE WHAT WE’RE UP TO!
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {[
                                { href: "https://www.instagram.com/girlsinsteamorg/", src: ig, alt: "Instagram logo" },
                                { href: "https://www.facebook.com/girlsinsteamorg/", src: fb, alt: "Facebook logo" },
                                { href: "https://www.youtube.com/@girlsinsteam", src: yt, alt: "YouTube logo" },
                                { href: "https://www.linkedin.com/company/girlsinsteam/", src: linkedin, alt: "LinkedIn logo" },
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: "inline-flex" }}
                                >
                                    <Box
                                        component="img"
                                        src={item.src}
                                        alt={item.alt}
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease, filter 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.2)",
                                                filter: "drop-shadow(0 4px 10px rgba(208, 205, 234, 0.6))",
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Stack>

                    </Grid>
                </Grid>

                {/* BOTTOM ROW: Logo + Right Side */}
                <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between">
                    {/* Logo Section */}
                    <Grid item xs={12} md={5}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <img src={whiteLogo} alt="GIS Logo" style={{ width: '80%', maxWidth: '100px', height: 'auto' }} />
                            <Box>
                                <Typography variant="h6" fontWeight={700}>
                                    girls in STEAM
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9, maxWidth: '400px' }}>
                                    Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 3 }}>
                                    {'© '}
                                    {new Date().getFullYear()}
                                    {' by Girls in STEAM'}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Right Side: Quick Links + Support */}
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={4} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                            {/* Quick Links */}
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                    QUICK LINKS
                                </Typography>
                                <Stack spacing={1}>
                                    <Link key='Home' href="#Hero" color="inherit" underline="none"
                                        sx={{
                                            fontSize: '0.9rem',
                                            '&:hover': { filter: 'drop-shadow(0 6px 10px rgba(208, 205, 234, 0.6))' }
                                        }}>
                                        Home
                                    </Link>
                                    <Link key='About' href="#AboutUs" color="inherit" underline="none"
                                        sx={{
                                            fontSize: '0.9rem',
                                            '&:hover': { filter: 'drop-shadow(0 6px 10px rgba(208, 205, 234, 0.6))' }
                                        }}>
                                        About InnovateHer
                                    </Link>
                                    <Link key='Agenda' href="#Agenda" color="inherit" underline="none"
                                        sx={{
                                            fontSize: '0.9rem',
                                            '&:hover': { filter: 'drop-shadow(0 6px 10px rgba(208, 205, 234, 0.6))' }
                                        }}>
                                        Agenda
                                    </Link>
                                </Stack>
                            </Grid>

                            {/* Support */}
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                    SUPPORT
                                </Typography>
                                <Stack spacing={1} >
                                    <Link key='FAQ' href="#FAQ" color="inherit" underline="none"
                                        sx={{
                                            fontSize: '0.9rem',
                                            '&:hover': { filter: 'drop-shadow(0 6px 10px rgba(208, 205, 234, 0.6))' }
                                        }}>
                                        FAQ
                                    </Link>
                                    <Link key='Become a Sponsor' href="mailto:UBC.sponsorship@girlsinsteam.org" color="inherit" underline="none"
                                        sx={{
                                            fontSize: '0.9rem',
                                            '&:hover': { filter: 'drop-shadow(0 6px 10px rgba(208, 205, 234, 0.6))' }
                                        }}>
                                        Become a Sponsor
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
