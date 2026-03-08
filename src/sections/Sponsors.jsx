import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import './../styles/SupportUs.css';
// sponsors
import apsc from '../images/sponsors/logo-apsc-g.jpeg';
import seaspan from '../images/sponsors/logo-seaspan-g.png';
import hedgehog from '../images/sponsors/logo-hedgehog-s.png';
import mcelhanney from '../images/sponsors/logo-mcelhanney-s.png';
import bcsun from '../images/sponsors/logo-bcsun-b.jpeg';
import etro from '../images/sponsors/logo-etro-b.png';
import belisse from '../images/sponsors/logo-belisse-k.jpeg';
import indomie from '../images/sponsors/logo-indomie-k.png';
import jbakes from '../images/sponsors/logo-jbakes-k.jpeg';
import mavian from '../images/sponsors/logo-maivan-k.png';
import raven from '../images/sponsors/logo-raven-k.png';
import darna from '../images/sponsors/logo-darna-k.png';
import crave from '../images/sponsors/logo-crave-k.png';
// booths
import acuitas from '../images/sponsors/booth-acuitas.png';
import aecom from '../images/sponsors/booth-aecom.png';
import digibc from '../images/sponsors/booth-digibc.png'
import esri from '../images/sponsors/booth-esri.png';
import ethos from '../images/sponsors/booth-ethos.png';
import geerup from '../images/sponsors/booth-geerup.png';
import kpmg from '../images/sponsors/booth-kpmg.png';
import nw from '../images/sponsors/booth-nw.png';
import ampl from '../images/sponsors/booth-amplitude.png';
import wics from '../images/sponsors/booth-wics.jpeg';
import wipa from '../images/sponsors/booth-wipa.jpeg';

export default function Sponsors() {
    // Array of sponsor logos
    const sponsorLogos = [
        apsc, seaspan, 
        hedgehog, mcelhanney,
        bcsun, etro,
        belisse, indomie, jbakes, mavian, raven, darna, crave
    ];

    const boothLogos = [
        acuitas, aecom, digibc, esri, ethos, geerup, nw, kpmg, ampl, wics, wipa
    ];

    // Function to render a single logo with scroll animation
    const renderLogo = (logo, index) => {
        const { ref, inView } = useInView({
            triggerOnce: true, // Only trigger the animation once
            threshold: 0.1, // Trigger when 10% of the element is visible
            delay: index * 200 // Stagger the animation delay based on the index
        });

        return (
            <img
                ref={ref}
                src={logo}
                alt="Sponsor Logo"
                className="SponsorLogo"
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'scale(1)' : 'scale(0.8)',
                    transition: `opacity 0.5s ${index * 0.2}s ease-out, transform 0.5s ${index * 0.2}s ease-out`
                }}
            />
        );
    };

    return (
        <div id="Support">
            <Grid container spacing={2} className="SupportUsContainer">
                <Grid item xs={12} className="CenteredGridItem">
                    <div className="SupportSectionContainer">
                        <Typography
                            variant="h3"
                            className='main-title'>
                            THANK YOU TO OUR PARTNERS
                        </Typography>
                        <div className="BoxContainer">
                            {/* Top Row: First 4 Logos */}
                            <div className="LogoRow">
                                {sponsorLogos.slice(0, 4).map((logo, index) => renderLogo(logo, index))}
                            </div>
                            {/* Bottom Row: Next 4 Logos */}
                            <div className="LogoRow">
                                {sponsorLogos.slice(4, 6).map((logo, index) => renderLogo(logo, index + 4))}
                            </div>
                        </div>
                        <Typography
                            variant="h4"
                            className='sub-title'>
                            IN KINDS
                        </Typography>
                        <div className="BoxContainer">
                            <div className="LogoRow">
                                {sponsorLogos.slice(6, 10).map((logo, index) => renderLogo(logo, index))}
                            </div>
                            {/* Bottom Row: Next 4 Logos */}
                            <div className="LogoRow">
                                {sponsorLogos.slice(10, 14).map((logo, index) => renderLogo(logo, index + 4))}
                            </div>
                        </div>
                        <Typography
                            variant="h4"
                            className='sub-title'>
                            BOOTHS
                        </Typography>
                        <div className="BoxContainer">
                            <div className="LogoRow">
                                {boothLogos.slice(0, 4).map((logo, index) => renderLogo(logo, index))}
                            </div>
                            {/* Bottom Row: Next 4 Logos */}
                            <div className="LogoRow">
                                {boothLogos.slice(4, 8).map((logo, index) => renderLogo(logo, index + 4))}
                            </div>
                            <div className="LogoRow">
                                {boothLogos.slice(8, 12).map((logo, index) => renderLogo(logo, index + 8))}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
