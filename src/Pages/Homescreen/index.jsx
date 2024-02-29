import HeroSection from "../HeroSection.jsx";
import MySkills from "../MySkills.jsx";
import About from "../About.jsx";
import MyPortfolio from "../MyPortfolio.jsx";
import ContactMe from "../ContactMe.jsx";

export default function Home() {

    return (<>
        <HeroSection />
        <About />
        <MySkills />
        <MyPortfolio />
        <ContactMe />
    </>)
}