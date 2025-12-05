"use client"
export default function Footer() {
    return (
        <footer className="w-full px-10 lg:px-40 xl:px-80 bg-primary-bg text-white flex flex-col py-16">
            <div className="grid md:grid-cols-2 gap-8 mx-auto w-full">
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold">Casa Cala</p>
                    <p className="text-[#faf8f5cc] text-sm md:text-base text-pretty">Tu hogar de verano a pasos del mar. Creando recuerdos inolvidables desde hace más de 30 años.</p>
                </div>
                <div className="grid gap-4">
                    <p className="text-lg font-medium">Enlaces rapidos</p>
                    <ul className="font-normal text-sm grid gap-2 text-[#faf8f5cc] 4">
                        <li
                            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                            className="cursor-pointer w-fit">
                            Servicios
                        </li>
                        <li
                            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                            className="cursor-pointer w-fit">
                            Galeria
                        </li>
                        <li
                            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                            className="cursor-pointer w-fit">
                            Sobre nosotros
                        </li>
                        <li
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="cursor-pointer w-fit">
                            Contacto
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[0.1px] my-8 bg-white opacity-10"></div>
            <div className="text-center text-sm text-[#faf8f5cc]">
                <p>© {new Date().getFullYear()} Casa Cala Villa Gesell. Todos los derechos reservados.</p>
            </div>
            <div className="mt-8 text-center text-[#faf8f5cc]">
                <p className="text-sm text-primary-foreground/70">Sitio desarrollado por <a
                    href="https://www.lautaroolivera.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                >
                    Lautaro Olivera
                </a></p>

            </div>
        </footer>
    )
}