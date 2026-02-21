"use client"
import React from "react";
import { MenuButton } from "../buttons/menu-button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <section className={`
            fixed top-0 left-0 right-0
            mx-auto p-4 md:p-6
            flex flex-col overflow-hidden z-40
            transition-colors duration-300
        `}>
            <div className="
                w-full xl:w-[50%] border border-soft-border rounded-2xl
                mx-auto
                bg-secondary-500
                p-2 pl-4 ">
                <section className={`
                    flex flex-col items-center ${isMenuOpen ? "gap-4" : ""}
                    w-full z-10
                    transition-all duration-300
                `}>
                    <div className={`flex flex-row justify-between items-center w-full`}>
                        <div className="flex flex-col justify-between">
                            <span className="font-meow-script text-primary-500 text-4xl font-bold hover:cursor-default">Casa Cala</span>
                        </div>
                        <div className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuButton isOpen={isMenuOpen} />
                        </div>
                        {/* Lista desktop */}
                        <div className="hidden lg:block">
                            <ul className="flex gap-4 cursor-pointer">
                                <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</li>
                                <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Galeria</li>
                                <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre nosotros</li>
                                <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
                            </ul>
                        </div>
                    </div>
                    {/* Lista mobile */}
                    <div className={`
                            w-full overflow-hidden transition-all duration-300
                            grid gap-4 text-black
                            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                        `}>
                        <ul className="flex flex-col gap-4 text-md">
                            <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</li>
                            <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Galeria</li>
                            <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre nosotros</li>
                            <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-primary-400" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
                        </ul>
                    </div>
                </section>
            </div >
        </section >
    )
}