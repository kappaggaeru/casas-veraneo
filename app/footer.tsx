import Contact from "./contact";

export default function Footer() {
    return (
        <footer className="bg-[--primary] flex flex-col">
            <h1>Casa Cala</h1>
            <div>
                <h2>Explore mas</h2>
                <ul>
                    <li>Sobre nosotros</li>
                    <li>Departamentos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div>
                <h2>Contacto</h2>
                <Contact />
            </div>
            <div>
                <p>Sitio desarrollado por</p>
                <a href="www.lautaroolivera.com">Lautaro Olivera</a>
            </div>
        </footer>
    )
}