import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useModal } from '../contexts/modal-context';

const DraggableCarousel = () => {
  const { slides, index, changeIndex } = useModal()

  // Función para mover el índice
  const nextStep = () => changeIndex(index === slides.length - 1 ? 0 : index + 1);
  const prevStep = () => changeIndex(index === 0 ? slides.length - 1 : index - 1);

  // Umbral de arrastre (20% de un contenedor de ejemplo de 600px aprox = 120px)
  const DRAG_THRESHOLD = 100;

  const onDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Si el arrastre supera el umbral o la velocidad es alta
    if (offset < -DRAG_THRESHOLD || velocity < -500) {
      nextStep();
    } else if (offset > DRAG_THRESHOLD || velocity > 500) {
      prevStep();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] xl:h-[800px] overflow-hidden bg-gray-900 rounded-2xl">
      
      {/* Contenedor Animado */}
      <motion.div
        className="flex h-full cursor-grab active:cursor-grabbing"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 50, bounce: 0 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }} // Para que no se mueva permanentemente de su sitio
        onDragEnd={onDragEnd}
      >
        {slides.map((src, i) => (
          <div key={i} className="min-w-full h-full shrink-0">
            <img 
              src={src.path} 
              alt={`Slide ${i}`} 
              className="w-full h-full object-cover pointer-events-none" // Evita que el navegador intente "arrastrar" la imagen nativamente
            />
          </div>
        ))}
      </motion.div>

      {/* Controles (Desktop) */}
      <button 
        onClick={prevStep}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-black/30 text-white cursor-pointer rounded-full hover:backdrop-blur-md transition-all"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={nextStep}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-black/30 text-white cursor-pointer rounded-full hover:backdrop-blur-md transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'bg-primary-foreground w-8' : 'w-2 bg-primary-foreground/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableCarousel;