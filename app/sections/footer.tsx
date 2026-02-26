"use client"
export default function Footer() {
    return (
        <footer className="w-full px-10 lg:px-20 xl:px-60 2xl:px-80 bg-primary-500 text-white flex flex-col py-16">
            <div className="grid md:grid-cols-2 gap-8 mx-auto w-full">
                <div className="flex flex-col gap-4">
                    <p className="font-meow-script text-4xl font-bold">Casa Cala</p>
                    <p className="text-primary-foreground md:text-base text-pretty">Tu hogar de verano a pasos del mar. Creando recuerdos inolvidables desde hace más de 30 años.</p>
                </div>
                <div className="grid gap-4">
                    <p className="text-lg font-medium">Enlaces rapidos</p>
                    <ul className="font-normal grid gap-2 text-primary-foreground">
                        <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-white" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre nosotros</li>
                        <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-white" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Galeria</li>
                        <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-white" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</li>
                        <li className="hover:cursor-pointer font-medium w-fit pl-0 p-2 hover:text-white" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[0.1px] my-8 bg-white opacity-10"></div>
            <div className="text-center text-primary-foreground text-pretty">
                <p>Todos los derechos reservados -  Casa Cala {new Date().getFullYear()}</p>
            </div>
            <div className="mt-8 text-center text-primary-foreground">
                <a
                    href="https://www.lautaroolivera.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Sitio desarrollado por Lautaro Olivera
                </a>
            </div>
        </footer>
    )
}