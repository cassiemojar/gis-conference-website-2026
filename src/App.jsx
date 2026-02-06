import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Agenda from "./sections/Agenda";
import Keynote from "./sections/Keynote";
import Workshop from "./sections/Workshop";
import Sponsors from "./sections/Sponsors";
import Team from "./sections/TheTeam";
import Panelist from "./sections/Panelist";
import FAQ from "./sections/FAQ";
import TheTeam from "./sections/TheTeam";
import Footer from "./sections/Footer";
import PrevConf from "./sections/PrevConf";

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
                <div className='App-Component'>
                    <AboutUs />
                </div>
            </div>
            <div
                className='Agenda-Background'
                id='Agenda'
            >
                <div className='App-Component'>
                    <Agenda />
                </div>
            </div>
            <div
                className='KeyNote-Background'
                id='KeyNote'
            >
                <div className='KeyNote-Component'>
                    <Keynote />
                </div>
            </div>

            <div
                className='Workshop-Background'
                id='Workshops'
            >
                <div className='Workshop-Component'>
                    <Workshop />
                </div>
            </div>

            <div
                className='Panelist-Background'
                id='Panelist'
            >
                <div className='Panelist-Component'>
                    <Panelist />
                </div>
            </div>

            <div className='Prev-Conf-Background'>
                <div className='Prev-Conf-Component'>
                    <PrevConf />
                </div>
            </div>

            <div className='Sponsor-FAQ-Team-Background'>
                <div
                    className='App-Component'
                    id='Sponsors'
                >
                    <Sponsors />
                </div>
                <div
                    className='App-Component'
                    id='FAQ'
                >
                    <FAQ />
                </div>
                <div
                    className='App-Component'
                    id='TheTeam'
                >
                    <TheTeam />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
