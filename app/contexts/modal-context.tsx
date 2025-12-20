import { createContext, ReactNode, useContext, useState } from "react";

export interface Slide {
    path: string
    alt: string
}

interface ModalContextType {
    showModal: boolean
    slide: Slide | null
    toggleModal: () => void
    setCurrentSlide: (slide: Slide | null) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState(false)
    const [slide, setSlide] = useState<Slide | null>(null)

    const toggleModal = () => {
        setShowModal(prevShowModal => {
            return !prevShowModal
        })
    }

    const setCurrentSlide = (slide: Slide | null) => {
        setSlide(slide)
    }

    return (
        <ModalContext value={{
            showModal,
            slide,
            toggleModal,
            setCurrentSlide
        }}>
            {children}
        </ModalContext>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) throw new Error("useModal must be used within ModalProvider")
    return context
}