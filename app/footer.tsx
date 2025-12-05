"use client"
export default function Footer() {
    return (
        <footer className="bg-primary-bg text-white flex flex-col py-16 px-10">
            <div className="flex flex-col gap-4 mx-auto max-w-[1000px] w-full">
                <div className="grid gap-4">

                    <h1 className="text-xl font-bold">Casa Cala</h1>
                    <p className="text-[#faf8f5cc] text-sm md:text-base text-pretty">Tu hogar de verano a pasos del mar. Creando recuerdos inolvidables desde hace más de 30 años.</p>
                </div>
                <p className="text-lg font-medium">Enlaces rapidos</p>
                <ul className="font-normal text-sm grid gap-2 text-[#faf8f5cc] 4 cursor-pointer">
                    <li onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</li>
                    <li onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Galeria</li>
                    <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre nosotros</li>
                    <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
                </ul>
                <div className="mt-4 pt-8 border-t border-[#faf8f5b3] text-center text-sm text-[#faf8f5cc]">
                    <p>© {new Date().getFullYear()} Casa Cala Villa Gesell.</p>
                    <p>Todos los derechos reservados.</p>
                </div>
                <div className="flex flex-col text-center text-[#faf8f5cc]">
                    <p className="text-sm text-primary-foreground/70">Sitio desarrollado por</p>
                    <a
                        href="https://www.lautaroolivera.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                    >
                        Lautaro Olivera
                    </a>
                </div>
            </div>
        </footer>
    )
}