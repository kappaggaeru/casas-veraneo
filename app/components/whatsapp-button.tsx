import { useScrollDirection } from "../hooks/useScrollDirection"

export default function WhatsappButton() {
    const { scrollDirection } = useScrollDirection()

    return (
        <a
            href="https://wa.me/123456789"
            rel="noopener"
            target="_blank"
            className={`
                fixed z-40 size-12 drop-shadow-2xl cursor-pointer
                transition-all ease-out duration-300 hover:scale-120
                bottom-5 right-5
                ${scrollDirection == "down" ? "translate-y-30" : "translate-y-0"}`
            }>
            <img src="images/whatsapp.png" alt="whatsapp icon" className="w-full" />
        </a >
    )
}