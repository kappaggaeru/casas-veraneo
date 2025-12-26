"use client"
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import { ModalProvider } from "./contexts/modal-context";
import HomeComponent from "./components/home.component";

export default function Home() {
    return (
        <ModalProvider>
            <section>
                <Navbar />
                <Hero />
                <HomeComponent />
            </section>
        </ModalProvider>
    )
}
