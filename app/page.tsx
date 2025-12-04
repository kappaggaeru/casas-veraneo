import AboutPreview from "./about-preview";
import { ActionButton } from "./buttons/action-button";
import Gallery from "./gallery";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Services from "./services";

export default function Home() {
    return (
        <section className="bg-amber-100 text-foreground">
            <Navbar />
            <Hero />
            <div className="p-4 xl:px-0 flex flex-col gap-8 mx-auto max-w-[1000px]">
                <ActionButton text="Reservar" href="" type="primary" />
                <AboutPreview />
                <Gallery />
                <Services />
                <Contact />
            </div>
            <Footer />
        </section>
    )
}
