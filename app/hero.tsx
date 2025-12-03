import { ActionButton } from "./buttons/action-button";

export default function Hero() {
    return (
        <section>
            <section className="w-full h-60 bg-sky-600 flex justify-center items-center">
                <p className="">carousel</p>
            </section>
            <div className="p-4">
                <ActionButton text="Reservar" href="" />
            </div>
        </section>
    )
}