"use client"
import React from "react";

export default function Gallery() {
    const mockGallery = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        src: `https://picsum.photos/400/300?random=${i + 1}`,
        alt: `Imagen de galería ${i + 1}`,
    }));
    const [activeImage, setActiveImage ] = React.useState(mockGallery[0]);

    return (
        <section className="w-full px-10 lg:px-20 xl:px-60 2xl:px-80 flex flex-col gap-4 py-16 bg-muted-bg" id="gallery">
            <div className="grid gap-4">
                <h2 className="text-3xl">Galeria</h2>
                <p className="text-gray-600">Explorá cada rincón de nuestras casas de verano</p>
            </div>
            <div className="w-full rounded-lg overflow-hidden flex items-center justify-center">
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-full aspect-video"
                />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {mockGallery.map((img) => (
                    <div
                        key={img.id}
                        className="w-full overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square"
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