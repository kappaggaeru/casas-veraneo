import { useModal } from "../contexts/modal-context"
import DraggableCarousel from "./draggable-carousel";

export default function GalleryModal() {
    const { showModal, toggleModal } = useModal();

    return (
        <section className={`
            fixed inset-0 cursor-pointer w-screen
            flex flex-col items-center justify-center bg-black/75
            transition-all duration-500 z-50
            ${showModal ? "z-50 opacity-100 backdrop-blur-xs blur-none" : "opacity-0 z-0 blur-sm pointer-events-none"}
        `}
        >
            <div className="fixed inset-0 w-screen" onClick={() => toggleModal()}></div>
            <DraggableCarousel />
        </section>
    )
}