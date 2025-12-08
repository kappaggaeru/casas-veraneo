"use client"
import React, { useEffect } from "react"
import { ActionButton } from "../buttons/action-button"
import { Carousel } from "../components/carousel";

export default function Hero() {
    const [inView, setInView] = React.useState([false, false, false]);

    const showElement = (pos: number) => {
        setInView(prevInView => {
            return prevInView.map((e, index) => {
                if (index === pos) {
                    return true
                }
                return e
            })
        })
    }

    useEffect(() => {
        let delay = 100

        inView.forEach((_, index) => {
            setTimeout(() => showElement(index), delay)
            delay += 200
        })
    }, [])

    const carousel = [
        { path: "/images/fachada.png", alt: "fachada" },
        { path: "/images/patio.png", alt: "patio" },
        { path: "/images/vista-mar.png", alt: "vista-mar" },
    ]
    return (
        <section>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="absolute h-screen bg-black opacity-20 z-10"></div>
                <div className="relative w-full h-full z-5">
                    <Carousel images={carousel} />
                </div>
                <div className="absolute flex flex-col gap-4 justify-center text-center mx-8 z-20 text-shadow-lg/30">
                    <div className={`
                        transition-all duration-500
                        ${inView[0] ? "translate-y-0 blur-none opacity-100" : "translate-y-6 blur-sm opacity-0"}`}
                    >
                        <h1 className="font-meow-script text-white text-5xl font-bold">
                            Casa Cala
                        </h1>
                        <span className="text-white">Villa Gesell</span>
                    </div>
                    <div className={`
                        transition-all duration-500
                        ${inView[1] ? "translate-y-0 blur-none opacity-100" : "translate-y-6 blur-sm opacity-0"}`}
                    >
                        <p className="text-white text-lg">Casas de verano diseñadas para crear recuerdos inolvidables a pasos del mar</p>
                    </div>
                    <div className={`
                        transition-all duration-500
                        ${inView[2] ? "translate-y-0 blur-none opacity-100" : "translate-y-6 blur-sm opacity-0"}`}
                    >
                        <ActionButton text="Reservá ahora" type="primary" />
                    </div>
                </div>
            </section>
        </section>
    )
}