"use client"
import React from "react";
import { MenuButton } from "./buttons/menu-button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <section className="absolute left-0 right-0 w-full flex flex-col overflow-hidden backdrop-blur-xs">
            <div className="w-full mx-auto max-w-[1000px]">
                <section className={`
                    flex flex-col items-center ${isMenuOpen ? "gap-4" : "gap-1"}
                    p-4 w-full z-10 border-b border-gray-200
                    transition-all duration-300
                `}>
                    <div className={`flex flex-row justify-between items-center w-full`}>
                        <div className="flex flex-col justify-between">
                            <span className="bold">Casa Cala</span>
                            <span className="text-gray-500">Villa gesell</span>
                        </div>
                        <div className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuButton isOpen={isMenuOpen} />
                        </div>
                        {/* Lista desktop */}
                        <div className="hidden md:block">
                            <ul className="flex gap-4">
                                <li>Sobre nosotros</li>
                                <li>Galeria</li>
                                <li>Contacto</li>
                                <li>Servicios</li>
                            </ul>
                        </div>
                    </div>
                    {/* Lista mobile */}
                    <div className={`
                            md:hidden w-full overflow-hidden transition-all duration-300
                            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                        `}>
                        <ul className="flex flex-col gap-4">
                            <li>Sobre nosotros</li>
                            <li>Galeria</li>
                            <li>Contacto</li>
                            <li>Servicios</li>
                        </ul>
                    </div>
                </section>
            </div >
        </section >
    )
}