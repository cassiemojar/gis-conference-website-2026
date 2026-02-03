import * as React from 'react';
import { Container, Box, Typography, Link, Grid, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                            Email us at{' '}
                            <Link href="mailto:ubc.conference@girlsinsteam.org" color="inherit" sx={{ ml: 0.5, textDecoration: 'underline' }}>
                                ubc.conference@girlsinsteam.org
                            </Link>{' '}
                            if you have any questions
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 4, md: 0 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, letterSpacing: '0.05rem' }}>
                            SEE WHAT WE’RE UP TO!
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <InstagramIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
                            <FacebookIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
                            <YouTubeIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
                            <LinkedInIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
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
                                <Typography variant="h5" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
                                    girls in <span style={{ fontWeight: 700 }}>STEAM</span>
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
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                                    QUICK LINKS
                                </Typography>
                                <Stack spacing={1}>
                                    {['Home', 'About Us', 'Our Values', 'Events', 'Resources', 'Newsletter'].map((text) => (
                                        <Link key={text} href="#" color="inherit" underline="none" sx={{ fontSize: '0.9rem', '&:hover': { opacity: 0.7 } }}>
                                            {text}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>

                            {/* Support */}
                            <Grid item xs={6} md={4}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                                    SUPPORT
                                </Typography>
                                <Stack spacing={1} >
                                    {['Donate', 'Become a Sponsor', 'FAQ', 'Join GIS'].map((text) => (
                                        <Link key={text} href="#" color="inherit" underline="none" sx={{ fontSize: '0.9rem', '&:hover': { opacity: 0.7 } }}>
                                            {text}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
