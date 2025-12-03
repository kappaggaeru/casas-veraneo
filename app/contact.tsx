import { Mail, Navigation, Phone } from "lucide-react";
import { ContactCard } from "./cards/contact-card";

export default function Contact(){
    return (
        <section className="grid grid-cols-2 gap-2">
            <ContactCard title={"Ubicación"} icon={Navigation} text={"Villa gesell 102 - 5"} color="text-orange-400" />
            <ContactCard title={"Teléfono"} icon={Phone} text={"+54 9122 41256"} color="text-sky-400" />
            <ContactCard title={"Correo electronico"} icon={Mail} text={"casa.cala.vg@gmail.com"} color="text-emerald-400" />
        </section>
    )
}