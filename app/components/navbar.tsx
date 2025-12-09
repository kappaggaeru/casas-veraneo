"use client"
import React from "react";
import { MenuButton } from "../buttons/menu-button";
import { ActionButton } from "../buttons/action-button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <section className="absolute left-0 right-0 bg-white/50 w-full flex flex-col overflow-hidden backdrop-blur-3xl z-40 brightness-100">
            <div className="w-full px-6 py-4 md:px-10 lg:px-20 xl:px-60 2xl:px-80">
                <section className={`
                    flex flex-col items-center ${isMenuOpen ? "gap-4" : "gap-1"}
                    w-full z-10
                    transition-all duration-300
                `}>
                    <div className={`flex flex-row justify-between items-center w-full`}>
                        <div className="flex flex-col justify-between">
                            <span className="font-meow-script text-shadow-lg text-white text-4xl">Casa Cala</span>
                        </div>
                        <div className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuButton isOpen={isMenuOpen} />
                        </div>
                        {/* Lista desktop */}
                        <div className="hidden md:block">
                            <ul className="flex gap-4 cursor-pointer">
                                <li
                                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                                    Servicios
                                </li>
                                <li
                                    onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
                                    Galeria
                                </li>
                                <li
                                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                                    Sobre nosotros
                                </li>
                                <li
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                                    Contacto
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Lista mobile */}
                    <div className={`
                            md:hidden w-full overflow-hidden transition-all duration-300
                            grid gap-4
                            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                        `}>
                        <ul className="flex flex-col gap-4">
                            <li onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</li>
                            <li onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Galeria</li>
                            <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre nosotros</li>
                            <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
                        </ul>
                        <ActionButton text="Reservar" type="tertiary" />
                    </div>
                </section>
            </div >
        </section >
    )
}