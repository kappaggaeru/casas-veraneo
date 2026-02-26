"use client"
import { useEffect } from "react";
import About from "../sections/about";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Services from "../sections/services";
import { useModal } from "../contexts/modal-context";
import Banner from "./banner";

export default function HomeComponent() {
    const { showModal } = useModal()
    // disables the body content when the modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [showModal])

    return (
        <div className="flex flex-col w-full mx-auto ">
            <Banner />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}