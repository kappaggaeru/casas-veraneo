"use client"

import { useModal } from "../contexts/modal-context"

export default function GalleryModal() {
    const { slide, showModal, toggleModal } = useModal();
    return (
        <section className={`
            fixed inset-0  p-8 cursor-pointer
            flex items-center justify-center bg-black/75
            border border-sky-500
            transition-all duration-500
            ${showModal ? "z-50 opacity-100 backdrop-blur-xs blur-none" : "opacity-0 z-0 blur-sm pointer-events-none"}
        `}
            onClick={() => toggleModal()}>
            <div className={`
                h-fit w-full flex justify-center items-center my-auto transition-all duration-500 border border-red-400
                md:w-[50%]
                ${showModal ? "scale-100" : "scale-80"} 
            `}>
                {showModal && slide &&
                    <img
                        src={slide.path}
                        alt={slide.alt}
                        className={`
                            max-h-[80vh] rounded-2xl transition-all duration-500 object-contain
                        `}

                    />
                }
            </div>
        </section>
    )
}