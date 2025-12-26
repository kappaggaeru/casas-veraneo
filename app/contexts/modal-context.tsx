import { createContext, ReactNode, useContext, useState } from "react";

export interface Slide {
    path: string
    alt: string
}

interface ModalContextType {
    showModal: boolean
    slides: Slide[]
    index: number
    toggleModal: () => void
    changeIndex: (index: number) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState(false)
    const [index, setIndex] = useState<number>(0)
    const slides: Slide[] = [
        { path: "images/fachada.png", alt: "fachada" },
        { path: "images/living-comedor.png", alt: "living" },
        { path: "images/patio.png", alt: "patio" },
        { path: "images/vista-mar.png", alt: "vista" },
    ]

    const toggleModal = () => {
        setShowModal(prevShowModal => {
            return !prevShowModal
        })
    }

    const changeIndex = (index: number) => {
        if (index > -1 && index <= slides.length) {
            setIndex(index)
        }
    }

    return (
        <ModalContext value={{
            showModal,
            slides,
            index,
            toggleModal,
            changeIndex
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