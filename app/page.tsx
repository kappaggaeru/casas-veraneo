import About from "./about";
import Gallery from "./gallery";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Services from "./services";

export default function Home() {
    return (
        <section className="">
            <Navbar />
            <Hero />
            <div className="xl:px-60 flex flex-col w-full mx-auto ">
                <Services />
                <Gallery />
                <About />
                <Contact />
            </div>
            <Footer />
        </section>
    )
}
