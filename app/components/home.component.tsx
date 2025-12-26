"use client"
import { useEffect } from "react";
import About from "../sections/about";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Services from "../sections/services";
import GalleryModal from "./gallery-modal";
import { useModal } from "../contexts/modal-context";

export default function HomeComponent() {
    const { showModal } = useModal()
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [showModal])

    return (
        <div className="flex flex-col w-full mx-auto ">
            <About />
            <Services />
            <GalleryModal />
            <Contact />
            <Footer />
        </div>
    )
}