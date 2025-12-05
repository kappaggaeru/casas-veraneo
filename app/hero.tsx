import { ActionButton } from "./buttons/action-button"

export default function Hero() {
    const carousel = [
        { path: "/images/fachada.png", alt: "fachada" },
        { path: "/images/patio.png", alt: "patio" },
        { path: "/images/vista-mar.png", alt: "vista-mar" },
    ]
    return (
        <section>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="absolute w-screen h-screen bg-black opacity-20 z-10"></div>
                <img src={carousel[0].path} alt={carousel[0].alt} className="absolute w-screen h-screen object-cover z-5"/>
                <div className="absolute flex flex-col gap-4 justify-center text-center mx-8 z-20 text-shadow-lg/30">
                    <h1 className="text-white text-5xl font-bold">Casa Cala</h1>
                    <span className="text-white">Villa Gesell</span>
                    <p className="text-white text-lg">Casas de verano diseñadas para crear recuerdos inolvidables a pasos del mar</p>
                    <ActionButton text="Reservá ahora" type="primary" />
                </div>
            </section>
        </section>
    )
}