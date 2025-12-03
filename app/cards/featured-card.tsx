"use client"
import React from "react";

export default function FeaturedCard() {
    const mockGallery = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        src: `https://picsum.photos/400/300?random=${i + 1}`,
        alt: `Imagen de galería ${i + 1}`,
    }));
    const [activeImage, setActiveImage ] = React.useState(mockGallery[0]);

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl">Galeria</h2>
            <div className="w-full rounded-lg overflow-hidden flex items-center justify-center">
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-full"
                />
            </div>
            <div className="grid grid-cols-5 gap-1">
                {mockGallery.map((img) => (
                    <div
                        key={img.id}
                        className="w-full h-20 overflow-hidden rounded-lg shadow-md cursor-pointer"
                        onClick={() => setActiveImage(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}