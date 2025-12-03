import { Mail, Navigation, Phone } from "lucide-react";
import { ContactCard } from "./cards/contact-card";

export default function Contact() {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-xl">Contacto</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <ContactCard title={"Ubicación"} icon={Navigation} text={"Villa gesell 102 - 5"} />
                <ContactCard title={"Teléfono"} icon={Phone} text={"+54 9122 41256"} />
                <ContactCard title={"Correo electronico"} icon={Mail} text={"casa.cala.vg@gmail.com"} />
            </div>
        </section>
    )
}