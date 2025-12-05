export default function Footer() {
    return (
        <footer className="bg-primary-bg text-white flex flex-col px-4 py-16">
            <div className="flex flex-col gap-4 mx-auto max-w-[1000px] w-full">
                <div className="grid gap-4">

                    <h1 className="text-xl font-bold">Casa Cala</h1>
                    <p className="text-[#faf8f5cc] text-sm md:text-base text-pretty">Tu hogar de verano a pasos del mar. Creando recuerdos inolvidables desde hace más de 30 años.</p>
                </div>
                <p className="text-lg font-medium">Enlaces rapidos</p>
                <ul className="font-normal text-sm grid gap-2 text-[#faf8f5cc]">
                    <li>Sobre nosotros</li>
                    <li>Galeria</li>
                    <li>Contacto</li>
                </ul>
                <div className="mt-4 pt-8 border-t border-[#00] text-center text-sm text-primary-foreground/70">
                    <p>© {new Date().getFullYear()} Casa Cala Villa Gesell.</p>
                    <p>Todos los derechos reservados.</p>
                </div>
                <div className="flex flex-col text-center">
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