import { Car, Globe } from "lucide-react";
import { InfoCard } from "./cards/info-card";

export default function Services() {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-xl">Servicios</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <InfoCard title={"Internet"} icon={Globe} text={"Conexión de 10Mb"} />
                <InfoCard title={"Cochera"} icon={Car} text={"A pocas cuadras de la playa y el centro"} />
            </div>
        </section>
    )
}