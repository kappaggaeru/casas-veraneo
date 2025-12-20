
import { Slide, useModal } from "../contexts/modal-context"

export default function Gallery() {
    const { toggleModal, setCurrentSlide } = useModal()
    const images: Slide[] = [
        { path: "images/fachada.png", alt: "fachada" },
        { path: "images/living-comedor.png", alt: "living" },
        { path: "images/patio.png", alt: "patio" },
        { path: "images/vista-mar.png", alt: "vista" },
    ]

    const viewSlide = (index: number) => {
        setCurrentSlide(images[index])
        toggleModal()
    }

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((i, index) => (
                <img
                    key={index}
                    src={i.path}
                    alt={i.alt}
                    className="rounded-lg cursor-pointer"
                    onClick={() => viewSlide(index)}
                />
            ))}
        </div>
    )
}