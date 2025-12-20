"use client"
import React, { useEffect } from "react"


type CarouselProps = {
    images: ImageCarousel[],
    autoPlay?: boolean,
}

type ImageCarousel = {
    path: string,
    alt: string
}
export const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = true }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    useEffect(() => {
        if (autoPlay) {
            setInterval(() => nextSlide(), 3000)
        }
    }, [autoPlay])

    const nextSlide = () => {
        setCurrentIndex(prev => {
            const newIndex = prev + 1;
            if (newIndex >= images.length) {
                return 0;
            }
            return newIndex
        })
    }

    return (
        <section className="relative w-full h-full">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <img src={image.path} alt={image.alt} className={`h-full w-full object-cover`} />
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full transition-all cursor-pointer ${index === currentIndex ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"}`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}