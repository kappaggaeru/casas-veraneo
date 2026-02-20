
export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/123456789"
            rel="noopener"
            target="_blank"
            className="fixed bottom-5 right-5 z-40 size-12 drop-shadow-2xl cursor-pointer transition-all duration-300 hover:scale-120">
            <img src="images/whatsapp.png" alt="whatsapp icon" className="w-full" />
        </a>
    )
}