import './../styles/FAQ.css';
import { FAQData } from '../data/FAQData.jsx';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { useInView } from "react-intersection-observer";

const AccordionItem = ({ question, answer }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true, // animate only the first time
    });

    return (
        <div
            ref={ref}
            className="accordion"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
            }}
        >
            <Accordion
                sx={{
                    marginBottom: "-16px",
                    padding: "0",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "& .MuiAccordion-root": { backgroundColor: "transparent" },
                    "& .MuiPaper-root": { backgroundColor: "transparent" }
                }}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                color: '#D0CDEA',
                                fontSize: '55px',
                                marginRight: '0',
                                padding: '0',
                                filter: `
                                drop-shadow(0 6px 6px rgba(0, 0, 0, 0.4)) /* shadow below */ 
                                drop-shadow(0 0 4px rgba(208, 205, 234, 0.6)) /* glowing effect */
                                `
                            }}
                        />
                    }
                    sx={{ overflowX: "hidden", padding: "0", margin: "0" }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
                            fontWeight: "bold",
                            color: "#D0CDEA",
                            marginLeft: "0",
                            fontFamily: "Josefin Sans",
                            overflow: "visible",
                            padding: "0",
                            fontSize: { xs: "1.2rem", sm: "1.5rem" }
                        }}
                    >
                        {question}
                        <Divider sx={{
                            width: '500%',
                            margin: '0 0',
                            marginTop: '8px',
                            marginRight: '10px',
                            borderBottom: '2px solid #D0CDEA',
                            filter: 'drop-shadow(0 0 4px rgba(208, 205, 234, 0.6))'
                        }}
                        />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        marginTop: "-16px",
                        backgroundColor: "transparent",
                        minHeight: "0",
                        maxHeight: "48px"
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "left",
                            color: "#D0CDEA",
                            fontWeight: "medium",
                            marginBottom: "70px",
                            marginLeft: "-16px",
                            marginTop: "0",
                            fontSize: { xs: "0.9rem", sm: "1rem" }
                        }}
                    >
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    );
};

export default function FAQ() {
    return (
        <div id="FAQ" className="faq">
            <div className="faq-section">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        marginTop: '25px',
                        marginBottom: '10px',
                        color: '#E8C3D1',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        textAlign: 'center',
                        animation: "slideInTitle 1s ease-out forwards"
                    }}>
                    FREQUENTLY ASKED QUESTIONS
                </Typography>
                {FAQData.map((data, index) => (
                    <AccordionItem key={`exec_${index}`} question={data.question} answer={data.answer} />
                ))}
            </div>
        </div >
    );
}
