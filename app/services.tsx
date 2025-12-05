import { Car, Globe, Home, ShieldCheck, TreePine, Utensils, Waves, Wifi, Wind } from "lucide-react";
import { InfoCard } from "./cards/info-card";

export default function Services() {
    const services = [
        {
            icon: Wifi,
            title: "Wi-Fi de alta velocidad",
            description: "Internet de fibra óptica en todas las instalaciones",
        },
        {
            icon: Car,
            title: "Estacionamiento privado",
            description: "Espacio seguro para tu vehículo",
        },
        {
            icon: Waves,
            title: "A pasos del mar",
            description: "Ubicación privilegiada a 200m de la playa",
        },
        {
            icon: Home,
            title: "Totalmente equipadas",
            description: "Todo lo necesario para una estadía perfecta",
        },
        {
            icon: Utensils,
            title: "Cocina completa",
            description: "Equipamiento y menaje de primera calidad",
        },
        {
            icon: Wind,
            title: "Aire acondicionado",
            description: "Climatización en todos los ambientes",
        },
        {
            icon: TreePine,
            title: "Jardín y parrilla",
            description: "Espacios al aire libre para disfrutar",
        },
        {
            icon: ShieldCheck,
            title: "Seguridad 24/7",
            description: "Zona segura y monitoreada",
        },
    ]
    return (
        <section className="flex flex-col gap-6 py-16 px-10 bg-stone-bg">
            <div className="grid gap-4">
                <h2 className="text-3xl">Servicios disponibles</h2>
                <p className="text-gray-600">Todo lo que necesitás para disfrutar de unas vacaciones</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {services.map((s, index) => (
                    <InfoCard key={index} title={s.title} icon={s.icon} description={s.description} />
                ))}
            </div>
        </section>
    )
}