import { MenuButton } from "./buttons/menu-button";

export default function Navbar() {
    return (
        <section className="flex flex-row justify-between items-center p-4 mx-auto max-w-[1000px]">
            <div className="flex flex-col justify-between">
                <span className="bold">Casa Cala</span>
                <span className="text-gray-500">Villa gesell</span>
            </div>
            <div className="block md:hidden">
                <MenuButton />
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row gap-8">
                    <li>Sobre nosotros</li>
                    <li>Galeria</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </section>
    )
}