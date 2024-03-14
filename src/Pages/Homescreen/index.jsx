import Header from "../Header.jsx";
import About from "../About.jsx";
import Services from "../Services.jsx";
import Area from "../Area.jsx";
import Gallery from "../Gallery.jsx";
import Contact from "../Contact.jsx";
import Map from "../../components/Map.jsx";
import Reviews from "../Reviews.jsx";

export default function Home() {

    return (<>
        <Header />
        <About />
        <Services />
        <Area />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
    </>)
}