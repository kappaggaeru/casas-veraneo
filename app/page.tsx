"use client"
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Navbar from "./components/navbar";
import GalleryModal from "./components/gallery-modal";
import { ModalProvider } from "./contexts/modal-context";

export default function Home() {
    return (
        <ModalProvider>
            <section className="">
                <Navbar />
                <Hero />
                <div className="flex flex-col w-full mx-auto ">
                    <About />
                    <Services />
                    <GalleryModal />
                    <Contact />
                    <Footer />
                </div>
            </section>
        </ModalProvider>
    )
}
