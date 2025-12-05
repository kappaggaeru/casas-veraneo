import About from "./sections/about";
import Gallery from "./sections/gallery";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Navbar from "./components/navbar";

export default function Home() {
    return (
        <section className="">
            <Navbar />
            <Hero />
            <div className="flex flex-col w-full mx-auto ">
                <Services />
                <Gallery />
                <About />
                <Contact />
                <Footer />
            </div>
        </section>
    )
}
