
import { useModal } from "../contexts/modal-context"

export default function GridGallery() {
    const { toggleModal, changeIndex, slides } = useModal()

    const viewSlide = (index: number) => {
        changeIndex(index)
        toggleModal()
    }

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {slides.map((i, index) => (
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