
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Slide, useModal } from "../contexts/modal-context"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { MoveLeft, MoveRight, X } from "lucide-react";

const lightboxVariants: Variants = {
    enter: (dir: number) => ({
        opacity: 0,
        x: dir * 60,
        filter: "blur(8px)",
        scale: 0.97,
    }),
    center: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
    },
    exit: (dir: number) => ({
        opacity: 0,
        x: dir * -60,
        filter: "blur(8px)",
        scale: 0.97,
    }),
};

export default function GridGallery() {
    const { slides } = useModal()
    const [selected, setSelected] = useState<Slide | null>(null);
    const [direction, setDirection] = useState<number>(0);

    const filmstripRef = useRef<HTMLDivElement>(null);
    const thumbRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const isDragging = useRef<boolean>(false);
    const dragStart = useRef<{ x: number; scrollLeft: number }>({ x: 0, scrollLeft: 0 });

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        const strip = filmstripRef.current;
        if (!strip) return;

        isDragging.current = false;
        dragStart.current = { x: e.pageX, scrollLeft: strip.scrollLeft };

        const onMove = (me: globalThis.MouseEvent) => {
            const dx = me.pageX - dragStart.current.x;
            if (Math.abs(dx) > 4) isDragging.current = true;
            if (filmstripRef.current) {
                filmstripRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
            }
        };

        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    const navigate = useCallback(
        (dir: number) => {
            if (!selected) return;

            const currentIdx = slides.findIndex((img) => img.id === selected.id);
            const nextIdx = (currentIdx + dir + slides.length) % slides.length;
            const nextImage = slides[nextIdx];

            setDirection(dir);
            setSelected(nextImage);

            // Scroll filmstrip so the active thumb stays visible
            const thumb = thumbRefs.current[nextImage.id];
            const strip = filmstripRef.current;
            if (thumb && strip) {
                strip.scrollTo({
                    left: thumb.offsetLeft - strip.offsetWidth / 2 + thumb.offsetWidth / 2,
                    behavior: "smooth",
                });
            }
        },
        [selected],
    );

    const openImage = (img: Slide) => {
        if (isDragging.current) return;
        setSelected(img);
        setDirection(0);
    };

    const currentIdx = selected
        ? slides.findIndex((img) => img.id === selected.id)
        : -1;

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!selected) return;
            if (e.key === "ArrowRight") navigate(1);
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selected, navigate]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    display: "grid",
                    width: "min(100%, 1100px)",
                    gap: "1rem",
                }}
                className="grid-cols-2 md:grid-cols-4"
            >
                {slides.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.04 }}
                        whileHover={{ scale: 1.02, zIndex: 2 }}
                        onClick={() => openImage(img)}
                        style={{
                            aspectRatio: "4/3",
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                            background: "#111",
                        }}
                        className="custom-box-shadow rounded-lg"
                    >
                        <img
                            src={img.source}
                            alt={img.caption}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                transition: "filter 0.4s ease",
                                filter: selected?.id === img.id ? "brightness(0.5)" : "brightness(0.9)",
                            }}
                        />
                        <div
                            className="caption-overlay text-2xl"
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                                opacity: 0,
                                transition: "opacity 0.3s",
                                display: "flex",
                                alignItems: "flex-end",
                            }}
                        >
                            {img.caption}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="lightbox-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        onClick={() => setSelected(null)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(6, 6, 6, 0.92)",
                            backdropFilter: "blur(12px)",
                            zIndex: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Animated image */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={selected.id}
                                custom={direction}
                                variants={lightboxVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                                style={{
                                    position: "relative",
                                    maxWidth: "88vw",
                                    maxHeight: "80vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={selected.source.replace("w=800", "w=1600")}
                                    alt={selected.caption}
                                    style={{
                                        maxWidth: "88vw",
                                        maxHeight: "76vh",
                                        objectFit: "contain",
                                        display: "block",
                                        boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
                                    }}
                                />
                                <div className="text-lg text-gray-400 capitalize mt-4">
                                    {selected.caption}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        {/* Prev */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); navigate(-1); }}
                            style={{
                                left: 24,
                                top: "50%",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "#e8e0d0",
                                cursor: "pointer",
                                fontSize: 20,
                                backdropFilter: "blur(8px)",
                                zIndex: 110,
                            }}
                            className="fixed size-12 rounded-full flex items-center justify-center"
                        >
                            <MoveLeft className="text-gray-400" />
                        </motion.button>
                        {/* Next */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); navigate(1); }}
                            style={{
                                right: 24,
                                top: "50%",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: "50%",
                                cursor: "pointer",
                                justifyContent: "center",
                                backdropFilter: "blur(8px)",
                                zIndex: 110,
                            }}
                            className="fixed size-12 rounded-full flex items-center justify-center"
                        >
                            <MoveRight className="text-gray-400" />
                        </motion.button>
                        {/* Close */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelected(null)}
                            style={{
                                top: 24,
                                right: 24,
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "#888",
                                cursor: "pointer",
                                fontSize: 18,
                                backdropFilter: "blur(8px)",
                                zIndex: 110,
                                transition: "color 0.2s",
                            }}
                            className="fixed size-12 rounded-full flex items-center justify-center"
                        >
                            <X className="text-gray-400" />
                        </motion.button>
                        {/* Counter */}
                        <div
                            style={{
                                position: "fixed",
                                bottom: 24,
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 110,
                            }}
                            className="text-gray-400"
                        >
                            {currentIdx + 1} / {slides.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}