
export default function Footer() {
    return (
        <footer className="bg-soft-gray flex flex-col px-4 py-8 mt-8">
            <div className="flex flex-col gap-4 mx-auto max-w-[1000px] w-full">
                <h1 className="text-xl font-bold">Casa Cala</h1>
                <div>
                    <p className="font-medium">Mapa de sitio</p>
                    <ul className="font-normal">
                        <li>Sobre nosotros</li>
                        <li>Galeria</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <hr className="text-gray-300" />
                <div className="flex flex-col text-center">
                    <p className="text-gray-500">Sitio desarrollado por</p>
                    <a
                        href="https://www.lautaroolivera.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lautaro Olivera
                    </a>
                </div>
            </div>
        </footer>
    )
}