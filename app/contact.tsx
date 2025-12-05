import { Mail, Navigation, Phone } from "lucide-react";
import { InfoCard } from "./cards/info-card";
import Map from "./map";

export default function Contact() {
    return (
        <section className="flex flex-col gap-6 py-16 px-10 bg-muted-bg" id="contact">
            <div className="grid gap-4">
                <h2 className="text-3xl">Contacto</h2>
                <p className="text-gray-600">
                    Estamos listos para ayudarte a planificar tus próximas vacaciones
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
                <InfoCard title={"Ubicación"} icon={Navigation} description={"Villa gesell 102 - 5"} />
                <InfoCard title={"Teléfono"} icon={Phone} description={"+54 9122 41256"} />
                <InfoCard title={"Correo electronico"} icon={Mail} description={"casa.cala.vg@gmail.com"} />
            </div>
            <Map />
        </section>
    )
}