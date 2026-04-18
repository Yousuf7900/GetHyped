import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ExpertiseSection from "../components/ExpertiseSection";
import WorkSection from "../components/WorkSection";
import BrandsSection from "../components/BrandsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <Hero />
            <Intro />
            <ExpertiseSection />
            <WorkSection />
            <BrandsSection />
            <ContactSection />
            {/* <Footer /> */}
        </main>
    );
};

export default Home;