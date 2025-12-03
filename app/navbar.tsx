import MenuButton from "./buttons/menu-button";

export default function Navbar() {
    return (
        <section className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-col justify-between">
                <span className="bold">Casa Cala</span>
                <span className="text-gray-500">Villa gesell</span>
            </div>
            <MenuButton />
        </section>
    )
}