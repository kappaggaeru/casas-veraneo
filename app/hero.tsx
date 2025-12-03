import { ActionButton } from "./buttons/action-button";

export default function Hero() {
    return (
        <section>
            <section className="w-full h-60 bg-soft-gray flex justify-center items-center">
                <p className="">video o carrusel de fotos</p>
            </section>
            <div className="p-4">
                <ActionButton text="Reservar" href="" type="primary"/>
            </div>
        </section>
    )
}