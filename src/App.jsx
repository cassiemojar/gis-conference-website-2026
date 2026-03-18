import "./App.css";
import { useInView } from "react-intersection-observer";
import NavBar from "./components/NavBar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Agenda from "./sections/Agenda";
import Keynote from "./sections/Keynote";
import Workshop from "./sections/Workshop";
import Sponsors from "./sections/Sponsors";
import Panelist from "./sections/Panelist";
import FAQ from "./sections/FAQ";
import TheTeam from "./sections/TheTeam";
import Footer from "./sections/Footer";
import PrevConf from "./sections/PrevConf";

function SectionReveal({ children, direction = "up", delay = 0 }) {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
    return (
        <div
            ref={ref}
            className={`reveal reveal-${direction}${inView ? " visible" : ""}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <div className='App-Component'>
                <div className='Nav-Component'>
                    <NavBar />
                </div>
            </div>
            <div className='Hero-Background'>
                <div className='App-Component'>
                    <Hero />
                </div>
            </div>
            <div className='About-Us-Background'>
                <SectionReveal direction="left">
                    <div className='App-Component'>
                        <AboutUs />
                    </div>
                </SectionReveal>
            </div>
            <div className='Agenda-Background' id='Agenda'>
                <SectionReveal direction="up">
                    <div className='App-Component'>
                        <Agenda />
                    </div>
                </SectionReveal>
            </div>
            <div className='KeyNote-Background' id='KeyNote'>
                <SectionReveal direction="right">
                    <div className='KeyNote-Component'>
                        <Keynote />
                    </div>
                </SectionReveal>
            </div>
            <div className='Workshop-Background' id='Workshops'>
                <SectionReveal direction="up">
                    <div className='Workshop-Component'>
                        <Workshop />
                    </div>
                </SectionReveal>
            </div>
            <div className='Panelist-Background' id='Panelist'>
                <SectionReveal direction="left">
                    <div className='Panelist-Component'>
                        <Panelist />
                    </div>
                </SectionReveal>
            </div>
            <div className='Prev-Conf-Background'>
                <SectionReveal direction="right">
                    <div className='Prev-Conf-Component'>
                        <PrevConf />
                    </div>
                </SectionReveal>
            </div>
            <div className='Sponsor-FAQ-Team-Background'>
                <SectionReveal direction="up">
                    <div className='App-Component' id='Sponsors'>
                        <Sponsors />
                    </div>
                </SectionReveal>
                <SectionReveal direction="up" delay={150}>
                    <div className='App-Component' id='FAQ'>
                        <FAQ />
                    </div>
                </SectionReveal>
                <SectionReveal direction="up" delay={300}>
                    <div className='App-Component' id='TheTeam'>
                        <TheTeam />
                    </div>
                </SectionReveal>
            </div>
            <Footer />
        </div>
    );
}

export default App;
