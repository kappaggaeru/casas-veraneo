import { createContext, ReactNode, useContext, useState } from "react";

export interface Slide {
    id: number
    source: string
    caption: string
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
        { id: 1, source: "images/fachada.png", caption: "fachada" },
        { id: 2, source: "images/living-comedor.png", caption: "living" },
        { id: 3, source: "images/patio.png", caption: "patio" },
        { id: 4, source: "images/vista-mar.png", caption: "vista" },
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